'use client'

import React from 'react'
import { NextSeo } from 'next-seo'

import GuestbookMain from '@/app/guestbook/components/guestbook.main'
import GuestBookForm from '@/app/guestbook/components/guestbook/guestbook-form'
import GuestbookItem from '@/app/guestbook/components/guestbook/guestbook-item'

const GuestBook = () => {
  const SEO = {
    title: 'Guestbook | Abdul Basit',
    description: 'I am a full-stack software engineer who basically just enjoys creating things.',
    canonical: 'https://a-bd.me/guestbook',
    openGraph: {
      url: 'https://a-bd.me/guestbook',
      title: 'Guestbook',
      description: 'Connect with me and leave your mark!',
      images: [
        {
          url: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg',
          width: 640,
          height: 640,
          alt: 'Guestbook Image',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
      url: 'https://a-bd.me/guestbook',
      title: 'Guestbook',
      description: 'Connect with me and leave your mark!',
      image: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <meta charSet="utf-8" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/guestbook" />
      <meta name="description" content="You get to know other people's opinion on this page and write your own opinion." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Guestbook" />
      <meta property="og:description" content="You get to know other people's opinion on this page and write your own opinion." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/guestbook" />
      <meta name="twitter:title" content="Guestbook..." />
      <meta name="twitter:description" content="You get to know other people's opinion on this page and write your own opinion." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/guestbook" />
      <head>
        <title>Guestbook | Abdul Basit</title>
      </head>
      <main className="container pb-28">
        <section className="pt-[9rem] max-md:pt-[8rem] flex flex-col gap-8">
          <GuestbookMain />
          <section className="flex flex-col">
            <GuestBookForm />
            <GuestbookItem />
          </section>
        </section>
      </main>
    </>
  )
}

export default GuestBook
