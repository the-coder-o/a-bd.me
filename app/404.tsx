'use client'

import ComingSoonIcon from '@/assets/images/comingsoon.png'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <div className={'container'}>
      <div className={'flex items-center justify-center'}>
        <Image width={100} height={100} src={ComingSoonIcon} alt={'ComingSoonIcon'} />
      </div>
    </div>
  )
}

export default Custom404
