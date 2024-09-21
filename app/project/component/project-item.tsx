'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import Halo from '@/components/ui/Halo'
import { ProjectData } from '@/content/project.data'

const ProjectItem = () => {
  return (
    <>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 3 * 0.1 }} className={'flex flex-col group'}>
        {ProjectData?.map((project, index) => (
          <div key={index} className={'py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0 hover:!opacity-100 group-hover:opacity-50'}>
            <Link href={'/project/' + project?.slug} className={'w-full project-border md:w-2/5 aspect-video dark:bg-[#222222] bg-[#efefef] rounded-lg overflow-clip select-none'}>
              <Halo strength={10}>
                <div className={'relative w-full h-full overflow-hidden'}>
                  <div className={'transition-opacity opacity-0 inset-0 z-50 pointer-events-none'}></div>
                  <Image fill src={project?.homeImg} alt={project?.title} className={'w-full p-2 !h-[120%] !flex !items-center !justify-center !rounded-xl !z-50'} />
                </div>
              </Halo>
            </Link>
            <div className={'w-full md:w-3/5 space-y-2'}>
              <div className={'flex gap-2'}>
                <a href={project?.demoUrl} target={'_blank'} className={'text-primary font-medium hover:underline'}>
                  {project?.title}
                </a>
                <p className={'text-primary font-medium dark:text-[#b4b4b4]'}> · {project?.year}</p>
              </div>
              <p className={'text-[17px] text-[#6e6e6e] line-clamp-4 leading-tight'}>{project?.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default ProjectItem
