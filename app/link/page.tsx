'use client'

import { ArrowUpRight } from 'lucide-react'

import { motion } from 'framer-motion'
import { ContactLinkData } from '@/lib/data/link.data'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LinkPage = () => {
  return (
    <div className={'container pt-24 pb-24'}>
      <div className={'flex flex-col gap-10 max-md:gap-10'}>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className={'flex flex-col gap-8 items-center justify-center'}>
          <Avatar className={'w-[100px] h-[100px]'}>
            <AvatarImage src="https://i.ibb.co/84ZQKWM/person3.jpg" />
            <AvatarFallback>Ab</AvatarFallback>
          </Avatar>
        </motion.div>
        <div className="space-y-1 animate-in">
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2 * 0.1 }} className="text-2xl font-bold tracking-tight text-center">
            Abdul Basit
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className="max-w-sm dark:text-[#b4b4b4] text-[#646464] mx-auto text-center"
          >
            FullStack developer who loves building cool things with code. In addition to coding, I also make YouTube videos. Find me elsewhere @brianruizy
          </motion.p>
        </div>
        <div>
          <div>
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 4 * 0.1 }} className="flex justify-between max-md:flex-col max-md:gap-2">
              <div className="flex flex-col gap-5  w-full max-md:w-full">
                <div className="flex flex-col items-center justify-center gap-2 group">
                  {ContactLinkData.map((link) => (
                    <a
                      className="flex items-center justify-between rounded-[10px] bg-[#efefef] dark:bg-[#222222] px-[15px] py-[15px] w-full max-md:w-full transition hover:!opacity-100 group-hover:opacity-50"
                      href={link.url}
                      target={'_blank'}
                    >
                      <div className="flex items-center gap-2 font-[500]">
                        <i className={`${link.icon}`}></i>
                        <p className={'text-[15px]'}>{link.title}</p>
                      </div>
                      <div>
                        <ArrowUpRight size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkPage
