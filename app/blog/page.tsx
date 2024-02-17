'use client'

import React from 'react'

import { NextSeo } from 'next-seo'

import Halo from '@/components/ui/Halo'
import BlogItem from '@/app/blog/components/blog-item'
import BlogMain from '@/app/blog/components/blog-main'
import SignUpFrom from '@/app/blog/components/ui/SignUpFrom'

const BlogPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Blog | Abdul Basit"
        description="I write about programming, design, and occasionally life updates!"
        canonical="https://a-bd.me/blog"
        openGraph={{
          url: 'https://a-bd.me/blog',
          title: 'Interesting Blogs...',
          description: 'I write about programming, design, and occasionally life updates!',
          images: [
            {
              url: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322',
              width: 640,
              height: 640,
              alt: 'Blog Open Graph Image',
            },
          ],
          site_name: 'Abdul Basit Blog',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@handle',
          site: '@site',
          // @ts-ignore
          url: 'https://a-bd.me/blog',
          title: 'Interesting Blogs...',
          description: 'I write about programming, design, and occasionally life updates!',
          image: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322',
        }}
      />
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Abdul Basit Blog's" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://a-bd.me/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interesting Blogs..." />
        <meta property="og:description" content="I write about programming, design, and occasionally life updates!" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="www.a-bd.me" />
        <meta property="twitter:url" content="https://a-bd.me/blog" />
        <meta name="twitter:title" content="Interesting Blogs..." />
        <meta name="twitter:description" content="I write about programming, design, and occasionally life updates!" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
        <link rel="canonical" href="https://a-bd.me/blog" />
        <title>Blog | Abdul Basit</title>
      </head>
      <main className="container pt-[9rem] max-md:pt-[8rem] pb-28">
        <section className="flex flex-col gap-16 md:gap-24">
          <BlogMain />
          <BlogItem />
          <Halo strength={6}>
            <SignUpFrom />
          </Halo>
        </section>
      </main>
    </>
  )
}

export default BlogPage
