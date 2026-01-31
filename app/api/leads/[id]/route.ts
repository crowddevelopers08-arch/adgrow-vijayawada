import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface RouteParams {
  params: {
    id: string
  }
}

/**
 * Handle PATCH request - Update lead status
 */
export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const { id } = params
    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      )
    }

    const validStatuses = ['new', 'contacted', 'scheduled', 'converted', 'lost']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json({ 
      success: true,
      lead 
    })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to update lead',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * Handle GET request - Get single lead
 */
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = params

    const lead = await prisma.lead.findUnique({
      where: { id }
    })

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true,
      lead 
    })
  } catch (error) {
    console.error('Error fetching lead:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch lead',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}