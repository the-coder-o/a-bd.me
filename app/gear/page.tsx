import { Metadata } from 'next'

import GearMain from '@/app/gear/components/gear-main'
import GeneralGearsComponent from '@/app/gear/components/general-gears-component'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gear | Abdul Basit',
  description: 'My toolbox. This is gear I actually own and recommend.',
  alternates: {
    canonical: 'http://www.a-bd.me/gear',
  },
}

const GearPage = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/gears" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="My toolbox and i recommend you." />
      <meta property="og:description" content="My toolbox. This is gear I actually own and recommend." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/gears" />
      <meta name="twitter:title" content="My toolbox and i recommend you." />
      <meta name="twitter:description" content="My toolbox. This is gear I actually own and recommend." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/gear" />
      <div className={'container pb-28'}>
        <div className={'flex flex-col gap-16 md:gap-24'}>
          <GearMain />
          <GeneralGearsComponent />
        </div>
      </div>
    </>
  )
}

export default GearPage
