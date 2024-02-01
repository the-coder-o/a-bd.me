'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { BlogData } from '@/content/blog.data'

const BlogMain = () => {
  return (
    <div>
      <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
        Blog
      </motion.h3>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
        {BlogData.length} posts about code, design, more ...
      </motion.p>
    </div>
  )
}

export default BlogMain
