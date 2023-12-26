'use client'

import { motion } from 'framer-motion'

import AboutMe from '@/app/about/component/about-me'
import AboutWork from '@/app/about/component/about-work'
import AboutImages from '@/app/about/component/about-images'
import AboutContact from '@/app/about/component/about.contact'
import AboutLocation from '@/app/about/component/about-location'

const AboutPage = () => {
  return (
    <div className={'pt-[9rem] pb-28'}>
      <div className={'container'}>
        <div className="flex flex-col">
          <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl font-bold tracking-tight">
            About Me
          </motion.h3>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className="dark:text-[#b4b4b4] text-[#646464]">
            Just a quick glimpse.
          </motion.p>
        </div>
      </div>
      <div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 * 0.1 }}>
          <AboutImages />
        </motion.div>
      </div>
      <div className={'container'}>
        <div className={'flex flex-col gap-16 mt-20 max-md:gap-9'}>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 4 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
            <AboutMe />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 5 * 0.1 }} className="flex justify-between  max-md:flex-col max-md:gap-2">
            <AboutLocation />
          </motion.div>
          <div>
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
              <AboutContact />
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 6 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
              <AboutWork />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
