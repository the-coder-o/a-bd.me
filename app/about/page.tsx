import { Metadata } from 'next'

import MyName from '@/app/about/component/my-name'
import Aboutme from '@/app/about/component/aboutme'
import AboutImages from '@/app/about/component/about-images'

export const metadata: Metadata = {
  title: 'About | Abdul Basit',
  description: 'I am a full-stack software engineer who basically just enjoys creating things.',
}

const AboutPage = () => {
  return (
    <div className={'pt-[9rem] max-md:pt-[8rem] pb-28'}>
      <div className={'container'}>
        <MyName />
      </div>
      <div>
        <AboutImages />
      </div>
      <div className={'container'}>
        <Aboutme />
      </div>
    </div>
  )
}

export default AboutPage
