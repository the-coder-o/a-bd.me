import React from 'react'

import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

import { HeaderData } from '@/lib/data/header.data'

import { ModeToggle } from '@/components/mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const HeaderMobile = () => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <div className={'flex items-center gap-2'}>
      <div className={'max-md:block hidden'}>
        <DropdownMenu>
          <DropdownMenuTrigger className={'text-[#646464] dark:text-[#b4b4b4] relative'}>Menu +</DropdownMenuTrigger>
          <DropdownMenuContent className={'absolute left-[-100px] z-[99999999] dark:bg-[#111111]'}>
            {HeaderData?.map((links: any, index) => (
              <DropdownMenuItem
                key={index}
                className={cn('text-[#646464] hover:text-primary dark:text-[#b4b4b4] !text-[16px] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg', links?.linkPath === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]')}
                onClick={() => router.push(links?.linkPath)}
              >
                {links?.linkTitle}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ModeToggle />
    </div>
  )
}

export default HeaderMobile
