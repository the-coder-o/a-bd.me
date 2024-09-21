'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GearApple from '@/app/gear/components/gear-apple'
import GearHomeDesk from '@/app/gear/components/gear-home-desk'
import GearCamera from '@/app/gear/components/gear-camera'
import GearApp from '@/app/gear/components/gear-app'
import GearWebsite from '@/app/gear/components/gear-website'

const GeneralGearsComponent = () => {
  return (
    <>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 4 * 0.1 }} className={'flex flex-col gap-8'}>
        <GearApple />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 5 * 0.1 }} className={'flex flex-col gap-8'}>
        <GearHomeDesk />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 7 * 0.1 }} className={'flex flex-col gap-8'}>
        <GearCamera />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 6 * 0.1 }} className={'flex flex-col gap-8'}>
        <GearApp />
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 7 * 0.1 }} className={'flex flex-col gap-8'}>
        <GearWebsite />
      </motion.div>
    </>
  )
}

export default GeneralGearsComponent
