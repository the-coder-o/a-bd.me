'use client'
import React from 'react'

import Image from 'next/image'

import { Book } from 'lucide-react'

import { motion } from 'framer-motion'

const AboutBook = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex animate-in flex-col gap-8 md:flex-row md:items-end md:justify-between"
      style={{ '--index': 1 } as React.CSSProperties}
    >
      <div className="flex flex-col gap-1">
        <h3 className="leading-none text-[#b4b4b4]">Books Kit & Analytics</h3>
        <h2 className="whitespace-nowrap text-4xl font-bold tracking-tight">Abdul Basit</h2>
      </div>
      <div className="flex w-fit max-w-md flex-col gap-1 md:max-w-sm">
        <div className="inline-flex items-center gap-2">
          <div className="relative z-20 text-2xl text-[#fff]">
            <Book />
          </div>
          <span className="text-lg font-semibold tracking-tighter">BooksTracker</span>
        </div>
        <p className="z-50 text-sm text-[#b4b4b4]">Creator from Tashkent. Focuses on topics such as consumer technology, software development, design, books for programmers, and lifestyle.</p>
      </div>
      <Image src={'https://i.ibb.co/84ZQKWM/person3.jpg'} width={60} height={60} alt="avatar" className="!object-cover rounded-full md:order-last" />
    </motion.div>
  )
}

export default AboutBook
