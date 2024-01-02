'use client'

import Halo from '@/components/ui/Halo'

import { motion } from 'framer-motion'

import { BlogData } from '@/content/blog.data'

import BlogItem from '@/app/blog/components/blog-item'
import SignUpFrom from '@/app/blog/components/ui/SignUpFrom'

const BlogPage = () => {
  return (
    <div className={'container pt-[9rem] max-md:pt-[8rem] pb-28'}>
      <div className={'flex flex-col gap-16 md:gap-24'}>
        <div>
          <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
            Blog
          </motion.h3>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
            {BlogData.length} posts about code, design, more ...
          </motion.p>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 * 0.1 }} className={'group relative'}>
          <BlogItem />
        </motion.div>
        <Halo strength={6}>
          <SignUpFrom />
        </Halo>
      </div>
    </div>
  )
}

export default BlogPage
