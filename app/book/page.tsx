import React from 'react'

import { Metadata } from 'next'

import Books from '@/app/book/components/book/books'
import Analytics from '@/app/book/components/analytics-book/analytics'
import AboutBook from '@/app/book/components/book/about-book'
import { Gradients } from '@/app/book/components/ui/gradients'
import AnalyticsDate from '@/app/book/components/date/analytics-date'
import AnalyticsWebsite from '@/app/book/components/analytics-website/analytics-website'

export const metadata: Metadata = {
  title: 'Analytics and Books | Abdul Basit',
  description: 'Creator based in Houston. Focuses on topics including consumer technology,books for programmers, software engineering, design, and lifestyle.',
  alternates: {
    canonical: 'http://www.a-bd.me/book',
  },
}

export default function Book() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/book" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Interesting Blogs..." />
      <meta property="og:description" content="I write about programming, design, and occasionally life updates!" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/book" />
      <meta name="twitter:title" content="Interesting Blogs..." />
      <meta name="twitter:description" content="I write about programming, design, and occasionally life updates!" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/book" />
      <div className={'!relative mb-[150px]'}>
        <div className={'container'}>
          <div className={'pt-[9rem] max-md:pt-[8rem] z-20 flex flex-col gap-16 md:gap-24'}>
            <AboutBook />
            <Analytics />
            <AnalyticsWebsite />
            <AnalyticsDate />
            <Books />
          </div>
        </div>
        <Gradients />
      </div>
    </>
  )
}
