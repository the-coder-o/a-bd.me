'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

import { HeaderData } from '@/lib/data/header.data'

import { ModeToggle } from '@/components/mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export const Header = () => {
  const Logo: string = '<Ab/>'
  const pathName = usePathname()

  const router = useRouter()

  const handlePushPath = () => {
    router.push('/about')
  }

  return (
    <header className={'container'}>
      <div>
        <div className={'flex items-center justify-between mt-3'}>
          <div>
            <Link href={'/'} className={'font-bold text-[18px]'}>
              {Logo}
            </Link>
          </div>
          <div className={'flex items-center gap-9 max-md:hidden'}>
            {HeaderData?.map((item: { linkTitle: string; linkPath: string }, index) => (
              <Link
                key={index}
                href={item.linkPath}
                className={cn(
                  'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition',
                  item.linkPath === pathName && 'underline transition dark:text-white text-zinc-900',
                )}
              >
                {item.linkTitle}
              </Link>
            ))}
          </div>
          <div className={'flex items-center gap-2'}>
            <div className={'max-md:block hidden'}>
              <DropdownMenu>
                <DropdownMenuTrigger className={'text-[#646464] dark:text-[#b4b4b4] relative'}>Menu +</DropdownMenuTrigger>
                <DropdownMenuContent className={'absolute left-[-100px]'}>
                  <DropdownMenuItem onClick={handlePushPath}>About</DropdownMenuItem>
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                  <DropdownMenuItem>Gear</DropdownMenuItem>
                  <DropdownMenuItem>Projects</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
