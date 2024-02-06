'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import axios from 'axios'

import Halo from '@/components/ui/Halo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { FaArrowRight } from 'react-icons/fa'

function GuestBookForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submitEntry = async (e: React.FormEvent) => {
    e.preventDefault()

    const entry = { name, message }
    try {
      const response = await axios.post('/api/entries', entry, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 201) {
        setName('')
        setMessage('')
      } else {
        console.error('Failed to submit entry')
      }

      setName('')
      setMessage('')
    } catch (error) {
      console.error('Failed to submit entry', error)
    }
    router.refresh()
  }

  return (
    <div className={'my-4 w-full rounded-lg dark:bg-[#222222]'}>
      <Halo strength={6} className={'p-6'}>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">Sign the Guestbook</h2>
        <p className="my-1 text-gray-800 dark:text-gray-200">Share a message for a future visitor of my site.</p>
        <form onSubmit={submitEntry} className={'py-3'}>
          <div className={'flex items-center gap-2'}>
            <Input id="name" type="text" value={name} placeholder={'Your name'} onChange={(e) => setName(e.target.value)} required className={'!bg-[#222222] border-style-input w-[150px]'} />
            <div className={'w-full relative'}>
              <Input id="message" value={message} placeholder={'Your message...'} onChange={(e) => setMessage(e.target.value)} required className={'!bg-[#222222] border-style-input'} />
              <Button size={'xs'} type="submit" className={'absolute right-1.5 top-1.5'}>
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </form>
        <button className="my-3 flex items-center text-sm text-gray-800 dark:text-gray-200" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          Sign out
        </button>
        <p className="text-sm text-gray-800 dark:text-gray-200">Your information is only used to display your name.</p>
      </Halo>
    </div>
  )
}

export default GuestBookForm
