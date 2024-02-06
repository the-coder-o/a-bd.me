import { Metadata } from 'next'

import GuestBookForm from '@/app/guestbook/components/guestbook/guestbook-form'
import GuestbookItem from '@/app/guestbook/components/guestbook/guestbook-item'
import React from 'react'

export const metadata: Metadata = {
  title: 'Guestbook | Abdul Basit',
  description: 'I am a full-stack software engineer who basically just enjoys creating things.',
}

const GuestBook = () => {
  return (
    <div className={'container pb-28'}>
      <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-8'}>
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold tracking-tight">Guestbook</h3>
          <p className="dark:text-[#b4b4b4] text-[#646464]">Your information is only used to display your name.</p>
        </div>
        <div className={'flex flex-col'}>
          <GuestBookForm />
          <GuestbookItem />
        </div>
      </div>
    </div>
  )
}

export default GuestBook
