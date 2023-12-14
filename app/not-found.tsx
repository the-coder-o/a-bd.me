'use client'

import Image from 'next/image'

export default function NotFound() {
  return (
    <div className={'container pt-28'}>
      <div className={'flex flex-col items-center justify-center'}>
        <Image width={350} height={350} className={'!w-[350px]'} src={'https://i.ibb.co/wrs5xq5/97394032381b4f5c5839bac9f4a9553f-removebg-preview.png'} alt={'ComingSoonIcon'} />
        <div>
          <p className={'text-center text-[15px] max-md:text-[14px]'}>
            Uh oh! Page does not exists, This page coming soon, You may see this page soon... Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again… 💤
          </p>
        </div>
      </div>
    </div>
  )
}
