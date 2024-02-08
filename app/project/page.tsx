import { Metadata } from 'next'

import ProjectMain from '@/app/project/component/project-main'
import ProjectItem from '@/app/project/component/project-item'

export const metadata: Metadata = {
  title: 'Projects | Abdul Basit',
  description: "Here are some of the projects I've worked on.",
}

const ProjectPage = () => {
  return (
    <>
      <meta charSet="utf-8" />
      {/*//Facebook Meta Tags */}
      <meta property="og:url" content="https://a-bd.vercel.app/projects" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Interesting projects with popular frameworks." />
      <meta property="og:description" content="Here are some of the projects I've worked on." />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
      />
      {/*// Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="a-bd.vercel.app" />
      <meta property="twitter:url" content="https://a-bd.vercel.app/projects" />
      <meta name="twitter:title" content="Interesting projects with popular frameworks." />
      <meta name="twitter:description" content="Here are some of the projects I've worked on." />
      <meta name="twitter:image" content="https://a-bd.vercel.appLink preview image URL" />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
      />
      <div className={'container pb-24'}>
        <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-16 md:gap-24'}>
          <ProjectMain />
          <ProjectItem />
        </div>
      </div>
    </>
  )
}

export default ProjectPage
