import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // @ts-ignore
    const { name, message } = await req.json()
    const entry = await db.entry.create({
      data: {
        name,
        message,
      },
    })

    return NextResponse.json(entry)
  } catch (err) {
    return new NextResponse('Internal server', { status: 500 })
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const entries = await db.entry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(entries)
  } catch (err) {
    return new NextResponse('Internal server', { status: 500 })
  }
}
