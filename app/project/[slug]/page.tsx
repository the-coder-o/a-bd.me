'use client'

import { usePathname } from 'next/navigation'

import { ProjectData } from '@/lib/data/project.data'

const ProjectRoute = () => {
  const pathname = usePathname()

  const single = ProjectData.find((item) => item.slug === pathname.split('/')[2])

  console.log(single)
  return <div></div>
}

export default ProjectRoute
