'use client'

import { motion } from 'framer-motion'

import LinkItem from '@/app/link/component/link-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const LinkPage = () => {
  return (
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
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 4 * 0.1 }}
              className="flex justify-between mt-[50px] max-md:flex-col max-md:gap-2"
            >
              <LinkItem />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkPage
