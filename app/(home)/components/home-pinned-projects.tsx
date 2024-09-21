import Halo from '@/components/ui/Halo'
import Link from '@/components/ui/Link'
import { ProjectData } from '@/content/project.data'
import Image from 'next/image'
import React from 'react'

const HomePinnedProjects = () => {
  return (
    <ul className="animated-list flex snap-x snap-mandatory grid-cols-2 flex-nowrap gap-9 overflow-x-scroll md:grid md:overflow-auto">
      {ProjectData.map((project) => (
        <li key={project.slug} className="col-span-1 min-w-72 snap-start transition-opacity">
          <Link href={`/projects/${project.slug}`} className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md bg-secondary dark:bg-[#191919]">
              <Halo strength={10}>
                <Image src={project.homeImg} alt={project.title} fill className="h-full w-full object-cover p-1 pt-2" />
              </Halo>
            </div>
            <div className="space-y-1">
              <p className="font-medium leading-tight">{project.title}</p>
              <p className="text-[#6e6e6e] line-clamp-2 leading-tight">{project.description}</p>
            </div>
          </Link>
        </li>
      )).slice(1, 3)}
    </ul>
  )
}

export default HomePinnedProjects
