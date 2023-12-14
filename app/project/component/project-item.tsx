import Link from 'next/link'
import Image from 'next/image'

import { ProjectData } from '@/lib/data/project.data'

const ProjectItem = () => {
  return (
    <>
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
    </>
  )
}

export default ProjectItem
