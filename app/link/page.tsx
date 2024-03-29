'use client'

import { motion } from 'framer-motion'

import LinkItem from '@/app/link/component/link-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const LinkPage = () => {
  return (
    <>
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://a-bd.me/link" />
      <meta name="keywords" content="Abdul Basit Blog's" />
      <meta name="description" content=" FullStack developer who loves building cool things with code. In addition to coding, Find me elsewhere " />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Just a quick glimpse." />
      <meta property="og:description" content="I am a full-stack software engineer who basically just enjoys creating things." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="www.a-bd.me" />
      <meta property="twitter:url" content="https://a-bd.me/link" />
      <meta name="twitter:title" content="Contact with me..." />
      <meta name="twitter:description" content="I am a full-stack software engineer who basically just enjoys creating things." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
      <link rel="canonical" href="https://a-bd.me/link" />
      <head>
        <title>Contact | Abdul Basit</title>
      </head>
      <div className={'container pt-[9rem] max-md:pt-[8rem] pb-24'}>
        <div className={'flex flex-col gap-10 max-md:gap-10'}>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className={'flex flex-col gap-8 items-center justify-center'}>
            <Avatar className={'w-[100px] h-[100px]'}>
              <AvatarImage src="https://i.ibb.co/84ZQKWM/person3.jpg" />
              <AvatarFallback>Ab</AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="space-y-1 animate-in">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 2 * 0.1 }}>
              <h1 className="text-2xl font-bold tracking-tight text-center">Abdul Basit</h1>
              <p className="max-w-[400px] dark:text-[#b4b4b4] text-[#646464] mx-auto text-center">
                FullStack developer who loves building cool things with code. In addition to coding, Find me elsewhere {''}
                <a target={'_blank'} href="https://t.me/imAnonymous0o0" className={'underline hover:opacity-75'}>
                  @imAnonymous0o0
                </a>
              </p>
            </motion.div>
          </div>
          <div>
            <div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 4 * 0.1 }} className="flex justify-between mt-[50px] max-md:flex-col max-md:gap-2">
                <LinkItem />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkPage
