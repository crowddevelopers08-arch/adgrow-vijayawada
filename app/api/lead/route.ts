import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface LeadData {
  name: string
  phone: string
  email?: string
  concern?: string
  source?: string
  formName?: string
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error('TELECRM_API_URL environment variable is not set')
  }

  try {
    // Prepare the TeleCRM payload according to their API structure
    const telecrmPayload = {
      fields: {
        Id: "", // Leave empty for new leads
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''), // Only digits
        city_1: "", // Not collected in form
        preferredtime: "",
        preferreddate: "",
        message: leadData.concern || "",
        select_the_procedure: leadData.concern || "",
        Country: "",
        LeadID: "",
        "CreatedOn": new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "consultation",
        "PageName": leadData.source || "hair-transformation-form",
        "State": "",
        "Age": ""
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Lead Source: ${leadData.source || 'hair-transformation-form'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Concern: ${leadData.concern || 'Not specified'}`
        }
      ]
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'nextjs-hair-transformation-form',
        'Accept': 'application/json',
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    // Handle empty responses
    if (response.status === 204) {
      clearTimeout(timeout)
      return { status: 'success', message: 'Lead created (204 No Content)' }
    }

    const responseText = await response.text()

    // Skip HTML responses
    if (
      responseText.trim().startsWith('<!DOCTYPE') ||
      responseText.trim().startsWith('<html') ||
      responseText.includes('<!DOCTYPE html>')
    ) {
      console.warn(`HTML response from ${endpoint}`, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        bodyPreview: responseText.slice(0, 200),
      })
      throw new Error('TeleCRM returned HTML response instead of JSON')
    }

    // Parse JSON
    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status} from ${endpoint}`)
      }
      clearTimeout(timeout)
      return data
    } catch {
      throw new Error(`Invalid JSON from ${endpoint}: ${responseText.slice(0, 100)}...`)
    }
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Handle POST request - Create new lead
 */
export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log('Received form data:', data)

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      )
    }

    // First, save to database
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        concern: data.concern || null,
        source: data.source || 'hair-transformation-form',
        formName: data.formName || 'hair-transformation-form',
        status: 'new',
        telecrmSynced: false,
        consent: true, // Assuming consent from form submission
      }
    })

    console.log('Lead saved to database:', lead.id)

    // Then attempt TeleCRM submission
    let telecrmResponse = null
    let telecrmError = null

    try {
      telecrmResponse = await sendToTeleCRM(data)
      console.log('TeleCRM response:', telecrmResponse)
      
      // Update lead with TeleCRM sync status
      await prisma.lead.update({
        where: { id: lead.id },
        data: {
          telecrmSynced: true,
          telecrmId: telecrmResponse.id || telecrmResponse.leadId || null,
          syncedAt: new Date()
        }
      })
    } catch (error) {
      telecrmError = error instanceof Error ? error.message : 'Unknown error'
      console.error('TeleCRM sync error:', telecrmError)
      
      // Update lead with error status but don't mark as failed
      await prisma.lead.update({
        where: { id: lead.id },
        data: {
          error: telecrmError
          // Don't change status to 'error' - keep it as 'new'
        }
      })
    }

    return NextResponse.json(
      {
        success: true,
        leadId: lead.id,
        telecrmResponse,
        telecrmError,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Lead creation error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create lead',
        details: error instanceof Error ? error.message : 'Unknown error',
        referenceId: `ERR-${Date.now()}`,
      },
      { status: 500 }
    )
  }
}