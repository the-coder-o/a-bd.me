import React from 'react'

import { Metadata } from 'next'

import GuestbookMain from '@/app/guestbook/components/guestbook.main'
import GuestBookForm from '@/app/guestbook/components/guestbook/guestbook-form'
import GuestbookItem from '@/app/guestbook/components/guestbook/guestbook-item'

export const metadata: Metadata = {
  title: 'Guestbook | Abdul Basit',
  description: 'I am a full-stack software engineer who basically just enjoys creating things.',
  alternates: {
    canonical: 'http://www.a-bd.me/guestbook',
  },
}

const GuestBook = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/guestbook" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Guestbook" />
      <meta property="og:description" content="!" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/guestbook" />
      <meta name="twitter:title" content="Guestbook..." />
      <meta name="twitter:description" content="You get to know other people's opinion on this page and write your own opinion." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/guestbook" />
      <div className={'container pb-28'}>
        <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-8'}>
          <GuestbookMain />
          <div className={'flex flex-col'}>
            <GuestBookForm />
            <GuestbookItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default GuestBook
