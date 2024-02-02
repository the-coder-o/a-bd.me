'use client'

import React from 'react'

import { motion } from 'framer-motion'

import AboutMe from '@/app/about/component/about-me'
import AboutWork from '@/app/about/component/about-work'
import AboutContact from '@/app/about/component/about.contact'

const About = () => {
  return (
    <div className={'flex flex-col gap-[100px] mt-20 max-md:gap-9'}>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 4 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
        <AboutMe />
      </motion.div>
      <div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
          <AboutContact />
        </motion.div>
      </div>
      <div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 6 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
          <AboutWork />
        </motion.div>
      </div>
    </div>
  )
}

export default About
