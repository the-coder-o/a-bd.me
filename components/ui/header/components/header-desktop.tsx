import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { BlogData } from '@/content/blog.data'
import { HeaderData } from '@/lib/data/header.data'

const HeaderDesktop = () => {
  const pathName = usePathname()

  const blog: any = BlogData.find((item) => item.slug === pathName.split('/')[2])

  return (
    <div className={'flex items-center max-md:hidden'}>
      {HeaderData?.map((item: { linkTitle: string; linkPath: string }, index) => (
        <Link
          key={index}
          href={item.linkPath}
          className={cn(
            'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
            item.linkPath === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#00000017] dark:bg-[#ffffff1b]',
            '/blog' + blog?.slug === pathName.split('/')[2] && 'transition-all dark:text-white text-zinc-900 bg-[#00000017] dark:bg-[#ffffff1b]',
          )}
        >
          {item.linkTitle}
        </Link>
      ))}
    </div>
  )
}

export default HeaderDesktop
