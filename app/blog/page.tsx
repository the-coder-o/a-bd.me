import { Metadata } from 'next'

import Halo from '@/components/ui/Halo'

import BlogItem from '@/app/blog/components/blog-item'
import BlogMain from '@/app/blog/components/blog-main'
import SignUpFrom from '@/app/blog/components/ui/SignUpFrom'

export const metadata: Metadata = {
  title: 'Blog | Abdul Basit',
  description: 'I write about programming, design, and occasionally life updates!',
}

const BlogPage = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        {/*//Facebook Meta Tags */}
        <meta property="og:url" content="https://a-bd.vercel.app/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interesting Blogs..." />
        <meta property="og:description" content="I write about programming, design, and occasionally life updates!" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
        {/*// Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="a-bd.vercel.app" />
        <meta property="twitter:url" content="https://a-bd.vercel.app/blog" />
        <meta name="twitter:title" content="Interesting Blogs..." />
        <meta name="twitter:description" content="I write about programming, design, and occasionally life updates!" />
        <meta name="twitter:image" content="https://a-bd.vercel.appLink preview image URL" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
      </head>
      <div className={'container pt-[9rem] max-md:pt-[8rem] pb-28'}>
        <div className={'flex flex-col gap-16 md:gap-24'}>
          <BlogMain />
          <BlogItem />
          <Halo strength={6}>
            <SignUpFrom />
          </Halo>
        </div>
      </div>
    </>
  )
}

export default BlogPage
