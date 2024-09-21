'use client'

import React from 'react'

import { motion } from 'framer-motion'

const ProjectMain = () => {
  return (
    <div>
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className={'font-bold text-3xl'}>
        Projects
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }} className={'dark:text-[#b4b4b4] text-[#646464]'}>
        Here are some of the projects I've worked on.
      </motion.p>
    </div>
  )
}

export default ProjectMain
