'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import HeaderMobile from '@/components/ui/header/components/header-mobile'
import HeaderDesktop from '@/components/ui/header/components/header-desktop'

import LogoDark from '@/public/logo/logo-dark.svg'
import LogoLight from '@/public/logo/logo-light.svg'

export const Header = () => {
  return (
    <header className={cn('w-full dark:bg-[#111111] bg-[#fff] pt-5')}>
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
