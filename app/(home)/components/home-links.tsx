'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import CountUp from 'react-countup'
import { Github, TrendingUp, Youtube } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Stats } from '@/app/(home)/components/stats'

const HomeLinks = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'flex gap-6 max-md:flex-col '}>
      <Avatar className={'w-[100px] h-[100px]'}>
        <AvatarImage src="https://i.ibb.co/84ZQKWM/person3.jpg" alt={'my-image'} />
        <AvatarFallback>Ab</AvatarFallback>
      </Avatar>
    </motion.div>
  )
}

export default HomeLinks
