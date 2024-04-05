'use client'

import React from 'react'

import { motion } from 'framer-motion'

const HomeAboutMe = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'mt-[16px]'}>
      <p className={'max-w-lg dark:text-[#b4b4b4]'}>Hi there, I&apos;m a software engineer who simply loves building things. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogging, and personal development.</p>
    </motion.div>
  )
}

export default HomeAboutMe
