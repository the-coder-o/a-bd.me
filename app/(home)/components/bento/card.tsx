'use client'

import React from 'react'

import { motion } from 'framer-motion'

import Map from '@/app/(home)/components/bento/map'
import YouTube from '@/app/(home)/components/bento/youtube'
import Gumroad from '@/app/(home)/components/bento/gumboard'
import Card from '@/app/(home)/components/bento/card-template'
import Instagram from '@/app/(home)/components/bento/instagram'

const Cards = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className="grid animate-in grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-8" style={{ '--index': 3 } as React.CSSProperties}>
      <YouTube />
      <Instagram />
      <Gumroad />
      <Card className="relative col-span-2 row-span-1" disableHalo noPadding>
        <Map />
        <div className="absolute bottom-2 left-2 flex items-center z-50 rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75">
          <p className="text-sm font-medium text-primary">Uzbekistan, TK</p>
        </div>
      </Card>
    </motion.div>
  )
}

export default Cards
