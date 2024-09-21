'use client'

import React from 'react'

import { motion } from 'framer-motion'

const HomeAboutMe = () => {
  return <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'mt-[16px]'}></motion.div>
}

export default HomeAboutMe
