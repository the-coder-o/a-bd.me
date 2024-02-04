'use client'

import Link from 'next/link'
import Image from 'next/image'

import { ArrowUpRight, Github, TrendingUp, Youtube } from 'lucide-react'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'

import BlogItem from '@/app/blog/components/blog-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import CoffeeIcon from '@/public/coffee/buymeacoffee.svg'

export default function Home() {
  return (
    <main className={'container pb-28'}>
      <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-8'}>
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'font-bold text-3xl'}>
            Abdul Basit
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'dark:text-[#b4b4b4] text-[#646464]'}>
            I write code and make videos.
          </motion.p>
        </div>
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
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 4 * 0.1 }}>
          <p className={'max-w-lg'}>
            Hi, I&apos;m Abdul Basit, a fullStack engineer who loves building cool things with code. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and
            personal development.
          </p>
          <div className={'group flex gap-3 max-md:flex-col max-md:gap-2 mt-9'}>
            <div className={'flex gap-5 max-md:flex-col'}>
              <iframe
                src="https://github.com/sponsors/the-coder-o/button"
                title="Sponsor the-coder-o"
                height="32"
                width="114"
                className={'!border-none hover:!opacity-100 rounded-[6px] group-hover:opacity-60'}
              ></iframe>
              <a href="https://www.buymeacoffee.com/abdulbacit" className={'bg-[#FFDD04] max-md:w-[170px]  font-[500] flex items-center justify-center h-[32px] rounded-[6px] text-black px-3'}>
                <Image width={0} height={0} src={CoffeeIcon} alt={'Coffee'} className={'!w-[20px]'} />
                Buy me a coffee
              </a>
            </div>
            <Link href={'/link'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
              <ArrowUpRight size={19} />
              More ways to connect
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 6 * 0.1 }} className={'pt-[65px]'}>
        <div className={'flex flex-col gap-8'}>
          <div>
            <p className={'text-[#646464] dark:text-[#b4b4b4]'}>Latest Posts</p>
          </div>
          <div className={'group relative'}>
            <BlogItem />
          </div>
          <div>
            <Link href="/blog" className={'text-[#646464] dark:text-[#b4b4b4] underline transition hover:text-zinc-900 dark:hover:text-white'}>
              See All
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
