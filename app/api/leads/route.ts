import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

/**
 * Handle GET request - Fetch all leads
 */
export async function GET() {
  try {
    console.log('Fetching leads from database...')
    
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    console.log(`Found ${leads.length} leads in database`)

    // Transform leads to match the frontend interface
    const transformedLeads = leads.map(lead => ({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      email: lead.email || '',
      concern: lead.concern || '',
      procedure: lead.procedure || '',
      message: lead.message || '',
      city: lead.city || '',
      age: lead.age || '',
      consent: lead.consent,
      source: lead.source || '',
      formName: lead.formName || '',
      status: lead.status as 'new' | 'contacted' | 'scheduled' | 'converted' | 'lost',
      telecrmSynced: lead.telecrmSynced,
      telecrmId: lead.telecrmId || undefined,
      createdAt: lead.createdAt.toISOString(),
      updatedAt: lead.updatedAt.toISOString()
    }))

    return NextResponse.json({ 
      success: true,
      leads: transformedLeads 
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch leads',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}