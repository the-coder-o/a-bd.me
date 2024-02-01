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
    <div className={'container pt-[9rem] max-md:pt-[8rem] pb-28'}>
      <div className={'flex flex-col gap-16 md:gap-24'}>
        <BlogMain />
        <BlogItem />
        <Halo strength={6}>
          <SignUpFrom />
        </Halo>
      </div>
    </div>
  )
}

export default BlogPage
