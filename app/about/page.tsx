'use client'

import React from 'react'

import { NextSeo } from 'next-seo'

import Gallery from '@/components/ui/gallery'
import AboutMain from '@/app/about/component/about-main'
import About from '@/app/about/component/about'
import MobileDesign from '@/app/about/component/mobile-design'

const AboutPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="About | Abdul Basit"
        description="I am a full-stack software engineer who basically just enjoys creating things."
        canonical="http://www.a-bd.me/about"
        openGraph={{
          url: 'http://www.a-bd.me/about',
          title: 'Just a quick glimpse.',
          description: 'I am a full-stack software engineer who basically just enjoys creating things.',
          images: [
            {
              url: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322',
              width: 640,
              height: 640,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'Abdul Basit Blog',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/about" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="description" content="I am a full-stack software engineer who basically just enjoys creating things." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Just a quick glimpse." />
      <meta property="og:description" content="I am a full-stack software engineer who basically just enjoys creating things." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/about" />
      <meta name="twitter:title" content="Just a quick glimpse." />
      <meta name="twitter:description" content="I am a full-stack software engineer who basically just enjoys creating things." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/about" />
      <head>
        <title>About | Abdul Basit</title>
      </head>
      <main className="pt-[9rem] max-md:pt-[8rem] pb-28">
        <div className="container">
          <AboutMain />
        </div>
        <MobileDesign />
        <section className="hidden lg:block mt-[80px]">
          <Gallery />
        </section>
        <div className="container">
          <About />
        </div>
      </main>
    </>
  )
}

export default AboutPage
