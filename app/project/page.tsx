import { Metadata } from 'next'

import ProjectMain from '@/app/project/component/project-main'
import ProjectItem from '@/app/project/component/project-item'

export const metadata: Metadata = {
  title: 'Projects | Abdul Basit',
  description: "Here are some of the projects I've worked on.",
}

const ProjectPage = () => {
  return (
    <div className={'container pb-24'}>
      <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-16 md:gap-24'}>
        <ProjectMain />
        <ProjectItem />
      </div>
    </div>
  )
}

export default ProjectPage
