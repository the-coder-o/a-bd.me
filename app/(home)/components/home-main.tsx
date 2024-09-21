'use client'

import React from 'react'

import Link from '@/components/ui/Link'
import { ArrowUpRightIcon } from 'lucide-react'

const HomeMain = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">hey, Abdulbasit here!</h1>
          <p className={'max-w-lg dark:text-[#b4b4b4]'}>Hi there, I&apos;m a fullstack javascript who simply loves building things. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogging, and personal development.</p>
        </div>
        <div className="flex animate-in gap-3 text-sm">
          <Link href="https://discord.gg/KhNh8nbw3U" className="flex w-fit items-center rounded-full dark:bg-[#191919] bg-secondary px-3 py-1 no-underline hover:bg-tertiary">
            Discord
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link href="https://instagram.com/bosit.xonn" className="flex w-fit items-center rounded-full dark:bg-[#191919] bg-secondary px-3 py-1 no-underline hover:bg-tertiary">
            IG
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link className="flex w-fit items-center rounded-full dark:bg-[#191919] bg-secondary px-3 py-1 no-underline hover:bg-tertiary" href="https://twitter.com/the_coder_o">
            Tweets
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
