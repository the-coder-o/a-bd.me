import { NextResponse } from 'next/server'

export default async function handler(req: Request, res: Response) {
  const API_KEY = 'Lw3YdhLXeVlkFeJOPGwiDHuuWY3Rpguw'
  const UMAMI_API_URL = 'https://a-bd.me/api/events'

  const response = await fetch(UMAMI_API_URL, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
    },
  })

  const data = await response.json()
  console.log(data)

  return NextResponse.json(data)
}
