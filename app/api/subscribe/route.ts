import { NextResponse } from 'next/server'
// @ts-ignore
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    // @ts-ignore
    const { user_email } = await req.json()

    const subscribe = await db.subscribe.create({
      data: { user_email },
    })

    return NextResponse.json(subscribe)
  } catch (error) {
    return new NextResponse('Internal server', { status: 500 })
  }
}
