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
  )
}

export default AboutPage
