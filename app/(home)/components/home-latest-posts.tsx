'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import LatestBlogs from '@/app/(home)/latest-blogs'

const HomeLatestPosts = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 6 * 0.1 }} className={'pt-[78px]'}>
      <div className={'flex flex-col gap-8'}>
        <div>
          <Link href={'/blog'} className={'underline-offset-4 group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary'}>
            Latest Posts
            <ArrowUpRight className={'w-[18.5px] h-[18.5px] text-[#b4b4b4] group-hover:text-white transition-all'} />
          </Link>
          <p className={'text-[#b4b4b4] mt-[16px] max-w-lg'}>I occasionally write about programming, productivity, and more. Check me out and subscribe to stay up to date.</p>
        </div>
        <div className={'group relative'}>
          <LatestBlogs />
        </div>
      </div>
    </motion.div>
  )
}

export default HomeLatestPosts
