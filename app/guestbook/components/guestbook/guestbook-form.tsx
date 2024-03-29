'use client'

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { createEntry } from '@/redux/slice/message-slice'

import { cn } from '@/lib/utils'
import { ArrowRight, Check } from 'lucide-react'

import { motion } from 'framer-motion'

import Halo from '@/components/ui/Halo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function GuestBookForm() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleCreate = (event: any) => {
    event.preventDefault()
    // @ts-ignore
    dispatch(createEntry({ name, message }))
    setName('')
    setMessage('')
    setSuccess(true)
  }

  setTimeout(() => {
    setSuccess(false)
  }, 4000)

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }} className={'my-4 w-full rounded-lg dark:bg-[#121212] bg-[#EFEFEF]'}>
      <Halo strength={6} className={'p-6'}>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">Join the Guestbook</h2>
        <p className="my-1 text-gray-800 dark:text-gray-200 max-sm:text-sm">Share a message for a future visitor of my site.</p>
        <form onSubmit={handleCreate} className={'py-3 mb-10'}>
          <div className={'flex items-center gap-2'}>
            <Input id="name" type="text" value={name} placeholder={'Your name'} onChange={(e) => setName(e.target.value)} required className={'dark:!bg-[#222222] input-border-style w-[150px]'} />
            <div className={'w-full relative'}>
              <Input id="message" value={message} placeholder={'Your message...'} onChange={(e) => setMessage(e.target.value)} required className={'dark:!bg-[#222222] input-border-style'} />
              <Button size={'xs'} type="submit" className={'absolute right-1.5 top-1.5'}>
                <ArrowRight size={15.5} />
              </Button>
            </div>
          </div>
        </form>
        <p className={cn('text-sm text-gray-800 dark:text-gray-200', success && 'hidden')}>Your information is only used to display your name.</p>
        <div className={cn('hidden', success ? 'block' : 'hidden')}>
          <p className="text-sm text-gray-800 dark:text-green-500 flex items-center gap-1">
            <Check size={18} />
            Your information is only used to display your name.
          </p>
        </div>
      </Halo>
    </motion.div>
  )
}

export default GuestBookForm
