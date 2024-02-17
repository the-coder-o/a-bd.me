'use client'

import React from 'react'
import { NextSeo } from 'next-seo'

import Books from '@/app/book/components/book/books'
import Analytics from '@/app/book/components/analytics-book/analytics'
import AboutBook from '@/app/book/components/book/about-book'
import AnalyticsDate from '@/app/book/components/date/analytics-date'
import AnalyticsWebsite from '@/app/book/components/analytics-website/analytics-website'
import { Gradients } from '@/app/book/components/ui/gradients'

const metadata = {
  title: 'Analytics and Books | Abdul Basit',
  description: 'Creator based in Houston. Focuses on topics including consumer technology, books for programmers, software engineering, design, and lifestyle.',
  canonical: 'https://a-bd.me/book',
  imageUrl: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322',
}

export default function BookPage() {
  return (
    <>
      <NextSeo
        title={metadata.title}
        description="https://a-bd.me/book"
        canonical={metadata.canonical}
        openGraph={{
          url: metadata.canonical,
          title: metadata.title,
          description: metadata.description,
          images: [
            {
              url: metadata.imageUrl,
              width: 640,
              height: 640,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'Abdul Basit Blog',
        }}
        twitter={{
          cardType: 'summary',
          //@ts-ignore
          url: metadata.canonical,
          title: metadata.title,
          description: metadata.description,
          image: metadata.imageUrl,
        }}
      />
      <meta charSet="utf-8" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="I write about programming, design, and occasionally life updates!" />
      <meta property="og:url" content="https://a-bd.me/book" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Interesting Blogs..." />
      <meta property="og:description" content="I write about programming, design, and occasionally life updates!" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/book" />
      <meta name="twitter:title" content="Interesting Blogs..." />
      <meta name="twitter:description" content="I write about programming, design, and occasionally life updates!" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/book" />
      <head>
        <title>Analytics and Books | Abdul Basit</title>
      </head>
      <div className="relative mb-[150px]">
        <div className="container pt-[9rem] max-md:pt-[8rem] z-20 flex flex-col gap-16 md:gap-24">
          <AboutBook />
          <Analytics />
          <AnalyticsWebsite />
          <AnalyticsDate />
          <Books />
        </div>
        <Gradients />
      </div>
    </>
  )
}
