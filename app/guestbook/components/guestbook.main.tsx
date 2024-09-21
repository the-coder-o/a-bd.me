'use client'

import React from 'react'

import { motion } from 'framer-motion'

const GuestbookMain = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">Guestbook</h1>
      <p className="dark:text-[#b4b4b4] text-[#646464]">You get to know other people's opinion on this page and write your own opinion.</p>
    </motion.div>
  )
}

export default GuestbookMain
