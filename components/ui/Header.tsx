'use client'

import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

import { HeaderData } from '@/lib/data/header.data'

import { ModeToggle } from '@/components/mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import LogoDark from '@/public/logo/logo-dark.svg'
import LogoLight from '@/public/logo/logo-light.svg'

export const Header = () => {
  const pathName = usePathname()

  const router = useRouter()

  const handlePushToAbout = () => {
    router.push('/about')
  }
  const handlePushToGear = () => {
    router.push('/gear')
  }

  const handlePushToProject = () => {
    router.push('/project')
  }

  const handlePushToBlog = () => {
    router.push('/blog')
  }

  return (
    <header
      className={'z-[10000] sticky top-0  w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#111111]/10'}
      style={{ position: 'fixed', width: '100%' }}
    >
      <div className={'container'}>
        <div>
          <div className={'flex items-center justify-between mt-3 mb-3'}>
            <div>
              <Link href={'/'} className={'font-bold text-[25px]'}>
                <Image src={LogoDark} alt={LogoDark} width={1} height={1} className={'!w-[36px] dark:hidden'} />
                <Image src={LogoLight} alt={LogoLight} width={1} height={1} className={'!w-[36px] hidden dark:block'} />
              </Link>
            </div>
            <div className={'flex items-center max-md:hidden'}>
              {HeaderData?.map((item: { linkTitle: string; linkPath: string }, index) => (
                <Link
                  key={index}
                  href={item.linkPath}
                  className={cn(
                    'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
                    item.linkPath === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]',
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
                  <DropdownMenuContent className={'absolute left-[-100px] z-[99999999]'}>
                    <DropdownMenuItem
                      className={cn(
                        'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
                        '/about' === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]',
                      )}
                      onClick={handlePushToAbout}
                    >
                      About
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
                        '/blog' === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]',
                      )}
                      onClick={handlePushToBlog}
                    >
                      Blog
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
                        '/gear' === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]',
                      )}
                      onClick={handlePushToGear}
                    >
                      Gear
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        'text-[#646464] hover:text-primary dark:text-[#b4b4b4] hover:text-zinc-900 dark:hover:text-white transition-all text-sm px-4 py-1.5 rounded-lg',
                        '/project' === pathName && 'transition-all dark:text-white text-zinc-900 bg-[#ffffff1b]',
                      )}
                      onClick={handlePushToProject}
                    >
                      Projects
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
