'use client'

import Link from 'next/link'
import Halo from '@/components/ui/Halo'

import { motion } from 'framer-motion'

import { BlogData } from '@/lib/data/blog.data'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const BlogPage = () => {
  return (
    <div className={'container pt-[5rem]'}>
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
          <>
            {BlogData.map((blog) => (
              <Link href={'/blog/' + blog?.slug} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50'}>
                <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
                  <span className={'text-[#646464] dark:text-[#b4b4b4]'}>{blog?.blog_publish_date}</span>
                  <p className={'font-medium dark:text-[#fff] transition max-md:leading-tight'}>{blog?.blog_title}</p>
                </div>
                <img src={blog?.blog_main_image_url} width={100} height={100} alt="my" className={'rounded-lg hidden max-md:block'} />
              </Link>
            ))}
          </>
        </motion.div>
        <Halo strength={5}>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 * 0.1 }}
            className="flex flex-col items-center justify-center gap-4 rounded-lg bg-tertiary p-6 text-center lg:p-8 bg-[#efefef] dark:bg-[#222222]"
          >
            <p className="font-medium text-primary">Subscribe to my newsletter</p>
            <p className="max-w-md dark:text-[#b4b4b4]">The Modern Blueprint —monthly readings on topics like tech, design, productivity, programming, and more!</p>
            <form className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row">
              <div className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="block !w-full !rounded-md !text-[#eeeeee]  px-4 py-2 !border !border-primary !placeholder:!text-tertiary !outline-none-inset bg-[#fcfcfc] dark:!bg-[#111111]"
                  placeholder="you@example.com"
                />
              </div>
              <Button
                variant={'default'}
                className="w-full whitespace-nowrap rounded-md bg-neutral-800 text-white hover:bg-neutral-900 !outline-none border-none
                 focus:ring-inset focus:ring-indigo-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100 md:w-fit "
              >
                Sign up
              </Button>
            </form>
            <p className="text-sm text-tertiary">Join the other readers.</p>
          </motion.div>
        </Halo>
      </div>
    </div>
  )
}

export default BlogPage
