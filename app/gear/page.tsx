'use client'

import React from 'react'
import { NextSeo } from 'next-seo'

import GearMain from '@/app/gear/components/gear-main'
import GeneralGearsComponent from '@/app/gear/components/general-gears-component'

const GearPage = () => {
  const SEO = {
    title: 'Gear | Abdul Basit',
    description: 'My toolbox. This is gear I actually own and recommend.',
    canonical: 'https://a-bd.me/gear',
    openGraph: {
      url: 'https://a-bd.me/gear',
      title: 'My toolbox and I recommend you.',
      description: 'My toolbox. This is gear I actually own and recommend.',
      images: [
        {
          url: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg',
          width: 640,
          height: 640,
          alt: 'Gear Image',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
      handle: '@username', // Replace with actual Twitter handle
      site: '@site', // Replace with actual Twitter site
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <meta charSet="utf-8" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/gears" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="My toolbox and i recommend you." />
      <meta property="og:description" content="My toolbox. This is gear I actually own and recommend." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/gears" />
      <meta name="twitter:title" content="My toolbox and i recommend you." />
      <meta name="twitter:description" content="My toolbox. This is gear I actually own and recommend." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/gear" />
      <head>
        <title>Gear | Abdul Basit</title>
      </head>
      <main className="container pb-28">
        <section className="flex flex-col gap-16 md:gap-24">
          <GearMain />
          <GeneralGearsComponent />
        </section>
      </main>
    </>
  )
}

export default GearPage
