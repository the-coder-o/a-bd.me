'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import LatestBlogs from '@/app/(home)/latest-blogs'

const HomeLatestPosts = () => {
  return (
    <div className={'pt-[78px]'}>
      <div className={'flex flex-col gap-8'}>
        <div>
          <Link href={'/blog'} className={'underline-offset-4 group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary'}>
            Latest Posts
            <ArrowUpRight className={'w-[18.5px] h-[18.5px] text-[#b4b4b4] group-hover:text-white transition-all'} />
          </Link>
          <p className={'text-[#b4b4b4] mt-[16px] w-full'}>I frequently share articles on programming, productivity, and various other topics. Follow along and subscribe to stay updated with my latest posts!</p>
        </div>
        <div className={'group relative'}>
          <LatestBlogs />
        </div>
      </div>
    </div>
  )
}

export default HomeLatestPosts
