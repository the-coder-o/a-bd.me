'use client'

import { motion } from 'framer-motion'

import GearApp from '@/app/gear/components/gear-app'
import GearApple from '@/app/gear/components/gear-apple'
import GearWebsite from '@/app/gear/components/gear-website'
import GearHomeDesk from '@/app/gear/components/gear-home-desk'

const GearPage = () => {
  return (
    <div className={'container pb-28'}>
      <div className={'flex flex-col gap-16 md:gap-24'}>
        <div className="flex gap-8 flex-col pt-[5rem]">
          <div>
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
              Gear
            </motion.h3>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
              My toolbox, and i recommend you.
            </motion.p>
          </div>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 * 0.1 }} className={'max-w-lg'}>
            This is gear I actually own and recommend. The affiliate links come at no extra cost, but it does however help support my content creation.
          </motion.p>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 4 * 0.1 }} className={'flex flex-col gap-8'}>
          <GearApple />
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 5 * 0.1 }} className={'flex flex-col gap-8'}>
          <GearHomeDesk />
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 6 * 0.1 }} className={'flex flex-col gap-8'}>
          <GearApp />
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 7 * 0.1 }} className={'flex flex-col gap-8'}>
          <GearWebsite />
        </motion.div>
      </div>
    </div>
  )
}

export default GearPage
