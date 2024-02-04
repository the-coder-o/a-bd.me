'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { BlogData } from '@/content/blog.data'

const BlogItem = () => {
  return (
    <>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 3 * 0.1 }} className={'group relative'}>
        {BlogData.map((blog, index) => (
          <Link key={index} href={'/blog/' + blog?.slug} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50 '}>
            <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
              <span className={'text-[#646464] dark:text-[#b4b4b4] max-md:w-32'}>{blog?.blog_publish_date}</span>
              <p className={'font-medium dark:text-[#fff] transition max-md:leading-tight max-sm:text-md'}>{blog?.blog_title}</p>
            </div>
            <img src={blog?.blog_main_image_url} width={100} height={100} alt={blog?.blog_title} className={'rounded-lg !object-cover hidden max-md:block !w-[100px] !h-auto'} />
          </Link>
        ))
          .reverse()
          .slice(0, 3)}
      </motion.div>
    </>
  )
}

export default BlogItem
