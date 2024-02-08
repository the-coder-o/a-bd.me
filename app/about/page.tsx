import { Metadata } from 'next'

import About from '@/app/about/component/about'
import AboutMain from '@/app/about/component/about-main'
import AboutImages from '@/app/about/component/about-images'

export const metadata: Metadata = {
  title: 'About | Abdul Basit',
  description: 'I am a full-stack software engineer who basically just enjoys creating things.',
}

const AboutPage = () => {
  return (
    <>
      <head>
        {/*//Facebook Meta Tags */}
        <meta property="og:url" content="https://a-bd.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Link preview title" />
        <meta property="og:description" content="Link preview description" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
        {/*// Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="a-bd.vercel.app" />
        <meta property="twitter:url" content="https://a-bd.vercel.app/about" />
        <meta name="twitter:title" content="Link preview title" />
        <meta name="twitter:description" content="Link preview description" />
        <meta name="twitter:image" content="https://a-bd.vercel.appLink preview image URL" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
      </head>
      <div className={'pt-[9rem] max-md:pt-[8rem] pb-28'}>
        <div className={'container'}>
          <AboutMain />
        </div>
        <div>
          <AboutImages />
        </div>
        <div className={'container'}>
          <About />
        </div>
      </div>
    </>
  )
}

export default AboutPage
