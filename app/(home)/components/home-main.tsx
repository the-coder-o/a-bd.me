'use client'

import React from 'react'

import { motion } from 'framer-motion'

const HomeMain = () => {
  return (
    <div>
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'font-bold text-3xl'}>
        Abdul Basit
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'dark:text-[#b4b4b4] text-[#646464]'}>
        I write code and make videos.
      </motion.p>
    </div>
  )
}

export default HomeMain
