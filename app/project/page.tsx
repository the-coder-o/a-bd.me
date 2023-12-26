'use client'

import { motion } from 'framer-motion'
import ProjectItem from '@/app/project/component/project-item'

const ProjectPage = () => {
  return (
    <div className={'container pb-24'}>
      <div className={'pt-[9rem] flex flex-col gap-16 md:gap-24'}>
        <div>
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className={'font-bold text-3xl'}>
            Projects
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className={'dark:text-[#b4b4b4] text-[#646464]'}>
            Here are some of the projects I've worked on.
          </motion.p>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 * 0.1 }} className={'flex flex-col group'}>
          <ProjectItem />
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectPage
