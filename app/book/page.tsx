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
}

export default function Book() {
  return (
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
  )
}
