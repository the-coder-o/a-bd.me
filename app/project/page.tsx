'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { ProjectData } from '@/lib/data/project.data'

const ProjectPage = () => {
  return (
    <div className={'container pb-24'}>
      <div className={'pt-[5rem] flex flex-col gap-16 md:gap-24'}>
        <div>
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className={'font-bold text-3xl'}>
            Projects
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className={'dark:text-[#b4b4b4] text-[#646464]'}>
            Here are some of the projects I've worked on.
          </motion.p>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 * 0.1 }} className={'flex flex-col group'}>
          {ProjectData?.map((project) => (
            <div className={'py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0 hover:!opacity-100 group-hover:opacity-50'}>
              <Link href={'/project/' + project?.slug} className={'w-full md:w-2/5 aspect-video bg-[#222222] rounded-lg border border-secondary overflow-clip select-none'}>
                <div className={'relative w-full h-full overflow-hidden'}>
                  <div className={'transition-opacity opacity-0 inset-0 z-50 pointer-events-none'}></div>
                  <Image fill src={project?.homeImg} alt={project?.title} className={'w-full p-2 !h-[120%] !flex !items-center !justify-center'} />
                </div>
              </Link>
              <div className={'w-full md:w-3/5 space-y-2'}>
                <div className={'flex gap-2'}>
                  <a href={project?.demoUrl} target={'_blank'} className={'text-primary font-medium hover:underline'}>
                    {project?.title}
                  </a>
                  <p className={'text-primary font-medium dark:text-[#b4b4b4]'}> · {project?.year}</p>
                </div>
                <p className={'text-[17px] text-[#6e6e6e]'}>{project?.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectPage
