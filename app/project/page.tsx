'use client'

import React from 'react'
import { NextSeo } from 'next-seo'

import ProjectMain from '@/app/project/component/project-main'
import ProjectItem from '@/app/project/component/project-item'

const ProjectPage = () => {
  const seoConfig = {
    title: 'Projects | Abdul Basit',
    description: "Here are some of the projects I've worked on.",
    canonical: 'https://a-bd.me/project',
    openGraph: {
      url: 'https://a-bd.me/projects',
      title: 'Interesting projects with popular frameworks.',
      description: "Here are some of the projects I've worked on.",
      images: [
        {
          url: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg',
          width: 640,
          height: 640,
          alt: 'Project Overview Image',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
      url: 'https://a-bd.me/projects',
      title: 'Interesting projects with popular frameworks.',
      description: "Here are some of the projects I've worked on.",
      image: 'https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg',
    },
  }

  return (
    <>
      <NextSeo {...seoConfig} />
      <meta charSet="utf-8" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/projects" />
      <meta name="description" content="Here are some of the projects I've worked on." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Interesting projects with popular frameworks." />
      <meta property="og:description" content="Here are some of the projects I've worked on." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/projects" />
      <meta name="twitter:title" content="Interesting projects with popular frameworks." />
      <meta name="twitter:description" content="Here are some of the projects I've worked on." />
      <meta name="twitter:image" content="https://a-bd.vercel.appLink preview image URL" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/project" />
      <head>
        <title>Project | Abdul Basit</title>
      </head>
      <main className="container pb-24">
        <section className="pt-[9rem] max-md:pt-[8rem] flex flex-col gap-16 md:gap-24">
          <ProjectMain />
          <ProjectItem />
        </section>
      </main>
    </>
  )
}

export default ProjectPage
