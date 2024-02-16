'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import LatestBlogs from '@/app/(home)/latest-blogs'

const HomeLatestPosts = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 6 * 0.1 }} className={'pt-[78px]'}>
      <div className={'flex flex-col gap-8'}>
        <div>
          <p className={'text-[#646464] dark:text-[#b4b4b4]'}>Latest Posts</p>
        </div>
        <div className={'group relative'}>
          <LatestBlogs />
        </div>
        <div>
          <Link href={"/blog"} className={'text-[#646464] dark:text-[#b4b4b4] underline transition hover:text-zinc-900 dark:hover:text-white'}>
            See All
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeLatestPosts
