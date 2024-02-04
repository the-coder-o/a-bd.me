'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import CountUp from 'react-countup'
import { Github, TrendingUp, Youtube } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const HomeLinks = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'flex gap-6 max-md:flex-col '}>
      <Avatar className={'w-[85px] h-[85px]'}>
        <AvatarImage src="https://i.ibb.co/84ZQKWM/person3.jpg" />
        <AvatarFallback>Ab</AvatarFallback>
      </Avatar>
      <div className={'space-y-2 group'}>
        <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
          <Github size={18} />
          <CountUp end={28} /> Repository Stars
        </Link>
        <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
          <TrendingUp size={19} />
          <CountUp end={256} /> Total Blog Views
        </Link>
        <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
          <Youtube size={19} />
          <CountUp end={52} /> YouTube Subscribers
        </Link>
      </div>
    </motion.div>
  )
}

export default HomeLinks
