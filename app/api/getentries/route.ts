import { NextResponse } from 'next/server'
// @ts-ignore
import { db } from '@/lib/db'

export async function GET() {
  try {
    const guests = await db.guest.findMany()
    return NextResponse.json(guests)
  } catch (error) {
    return new NextResponse('Internal server', { status: 500 })
  }
}
