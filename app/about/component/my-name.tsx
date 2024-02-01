'use client'

import React from 'react'

import { motion } from 'framer-motion'

const MyName = () => {
  return (
    <div className="flex flex-col">
      <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
        About Me
      </motion.h3>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
        Just a quick glimpse.
      </motion.p>
    </div>
  )
}

export default MyName
