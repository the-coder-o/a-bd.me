'use client'

import React from 'react'

import { motion } from 'framer-motion'

const GearMain = () => {
  return (
    <div className="flex gap-8 flex-col pt-[5rem] max-md:pt-[5rem]">
      <div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
          Gear
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
          My toolbox, and i recommend you.
        </motion.p>
      </div>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'max-w-lg'}>
        This is gear I actually own and recommend. The affiliate links come at no extra cost, but it does however help support my content creation.
      </motion.p>
    </div>
  )
}

export default GearMain
