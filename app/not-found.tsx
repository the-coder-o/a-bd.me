'use client'

import Image from 'next/image'

export default function NotFound() {
  return (
    <div className={'container pt-28'}>
      <div className={'flex flex-col items-center justify-center'}>
        <Image width={350} height={350} className={'!w-[300px] !h-[320px]'} src={'https://www.efulife.com/wp-content/uploads/2017/05/coming-soon-1.png'} alt={'ComingSoonIcon'} />
        <div>
          <p className={'text-center mt-2 text-[18px] max-md:text-[16px]'}>
            Uh oh! Page does not exists, This page coming soon, You may see this page soon... Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again… 💤
          </p>
        </div>
      </div>
    </div>
  )
}
