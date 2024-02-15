'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import HeaderMobile from '@/components/ui/header/components/header-mobile'
import HeaderDesktop from '@/components/ui/header/components/header-desktop'

import LogoDark from '@/public/logo/logo-dark.svg'
import LogoLight from '@/public/logo/logo-light.svg'
import { cn } from '@/lib/utils'

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollThreshold = 100 // Adjust this value as needed

      setHasScrolled(scrollTop > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={cn('z-[10000] transition-all duration-300 sticky top-0 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#111111]/10', hasScrolled ? 'header-border-style' : '!border-transparent')}
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
            <HeaderDesktop />
            <HeaderMobile />
          </div>
        </div>
      </div>
    </header>
  )
}
