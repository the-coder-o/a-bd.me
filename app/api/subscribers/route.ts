import { NextResponse } from 'next/server'
// @ts-ignore
import { db } from '@/lib/db'

export async function GET(res: Response) {
  try {
    const subscribers = await db.subscripbe.findMany()
    return NextResponse.json(subscribers)
  } catch (error) {
    return new NextResponse('Internal server', { status: 500 })
  }
}
