'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import { ProjectData } from '@/content/project.data'
import { cn } from '@/lib/utils'

const ProjectRoute = () => {
  const pathname = usePathname()

  const project = ProjectData.find((item, index) => item.slug === pathname.split('/')[2])

  return (
    <div key={project?.title} className={'pb-24 pt-[9rem] max-md:pt-[8rem]'}>
      <div className={'flex flex-col gap-14'}>
        <div className={'flex flex-col gap-3 container'}>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className={'flex gap-3'}>
            <p className={'dark:text-[#b4b4b4] text-[#646464]'}>{project?.year}</p>
            <span>·</span>
            <a href={project?.demoUrl} target={'_blank'} className={'underline-offset-4 dark:text-[#b4b4b4] text-[#646464] hover:!text-white underline'}>
              See Demo
            </a>
          </motion.div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            className={'text-3xl font-bold leading-tight tracking-tight text-primary'}
          >
            {project?.title}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className={'text-lg leading-tight dark:text-[#b4b4b4] text-[#646464] md:text-xl'}
          >
            {project?.description}
          </motion.p>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 4 * 0.1 }} className={'container-for-image flex flex-col justify-center'}>
          {project?.images?.map((item: { image: string; description: string }) => (
            <div>
              <div className={cn('dark:bg-[#222222] bg-[#efefef] project-border rounded-lg')}>
                <img src={item?.image} alt={project?.title} className={'!w-[100%] rounded-lg'} />
              </div>
              <p className={'mx-auto max-w-md text-center mb-5 mt-2 text-xs font-medium leading-tight text-tertiary text-[#6e6e6e]'}>{item?.description}</p>
            </div>
          ))}
        </motion.div>
        <div className={'container flex flex-col gap-20'}>
          <div className={'flex flex-col gap-6'}>
            <h2>Tags</h2>
            <div className={'flex flex-wrap gap-3 '}>
              {project?.tags?.map((tag) => <div className={'whitespace-nowrap rounded-lg bg-[#e8e8e8] dark:bg-[#2a2a2a] dark:text-[#b4b4b4] text-[#646464] px-4 py-1.5 text-sm'}>{tag}</div>)}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Contact</h2>
            <p className="max-w-lg dark:text-[#b4b4b4] text-[#646464]">
              Need more project details, or interested in working together? Reach out to me directly at <span></span>
              <a href="mailto:abdulbositsharipovv@gmail.com" className="text-primary underline">
                email
              </a>
              . I'd be happy to connect!
            </p>
          </div>
          <Link href={'/project'} className="underline-offset-4 text-primary underline">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectRoute
