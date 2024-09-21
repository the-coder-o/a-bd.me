'use client'

import React from 'react'

import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import HomePinnedProjects from './components/home-pinned-projects'

const PinnedProjects = () => {
  return (
    <div className={'pt-[78px]'}>
      <div className={'flex flex-col gap-8'}>
        <div>
          <Link href={'/projects'} className={'underline-offset-4 group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary'}>
            Pinned Prjects
            <ArrowUpRight className={'w-[18.5px] h-[18.5px] text-[#b4b4b4] group-hover:text-white transition-all'} />
          </Link>
          <p className={'text-[#b4b4b4] mt-[16px] w-full'}>I regularly share insights on programming, productivity, and other topics. Follow along and subscribe to stay updated with my latest work!</p>
        </div>
        <div className={'group relative'}>
          <HomePinnedProjects />
        </div>
      </div>
    </div>
  )
}

export default PinnedProjects
