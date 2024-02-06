'use client'

import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import axios from 'axios'

import moment from 'moment'

interface Entry {
  id: number
  name: string
  message: string
  createdAt: Date
}

const GuestbookItem = () => {
  const router = useRouter()

  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    axios
      .get('/api/entries')
      .then((response) => {
        setEntries(response.data)
      })
      .catch((error) => {
        console.error('Failed to fetch entries', error)
      })
  }, [])
  return (
    <div>
      <ul className={'space-y-8'}>
        {entries.map((entry) => (
          <li key={entry.id} className={'mt-4 space-y-8'}>
            <div className="flex flex-col space-y-2">
              <div className="prose w-full break-words dark:text-gray-200">{entry?.message}</div>
              <div className="flex items-center space-x-3">
                <p className="text-sm text-gray-600 dark:text-[#c2c2c2]">{entry?.name}</p>
                <span className="text-gray-600 dark:text-[#c2c2c2]">/</span>
                <p className="text-sm text-gray-600 dark:text-[#c2c2c2]">{moment(new Date(entry.createdAt).toLocaleDateString()).format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuestbookItem
