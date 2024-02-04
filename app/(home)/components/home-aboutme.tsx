'use client'

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import CoffeeIcon from '@/public/coffee/giphy.gif'

const HomeAboutMe = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 4 * 0.1 }}>
      <p className={'max-w-lg'}>
        Hi, I&apos;m Abdul Basit, a fullStack engineer who loves building cool things with code. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and personal
        development.
      </p>
      <div className={'group flex gap-3 max-md:flex-col max-md:gap-2 mt-9'}>
        <div className={'flex gap-5 max-md:flex-col-reverse max-md:gap-2'}>
          <Link
            target={'_blank'}
            href="https://www.buymeacoffee.com/abdulbacit"
            className={'bg-[#FFDD04] max-md:w-[170px] hover:!opacity-100 group-hover:opacity-60 font-[500] flex items-center justify-center h-[32px] rounded-[6px] text-black px-3'}
          >
            <Image width={0} height={0} src={CoffeeIcon} alt={'Coffee'} className={'!w-[22px]'} />
            Buy me a coffee
          </Link>
          <iframe
            src="https://github.com/sponsors/the-coder-o/button"
            title="Sponsor the-coder-o"
            height="32"
            width="114"
            className={'!border-none hover:!opacity-100 rounded-[6px] group-hover:opacity-60'}
          ></iframe>
        </div>
        <Link href={'/link'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
          <ArrowUpRight size={19} />
          More ways to connect
        </Link>
      </div>
    </motion.div>
  )
}

export default HomeAboutMe
