import React from 'react'
import Image from 'next/image'

const AboutImages = () => {
  return (
    <div>
      <div className="flex items-center justify-center container-for-slider !mt-[100px]">
        <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-8deg]">
          <Image width={220} height={220} className="rounded-[18px] !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/bzCjVtr/person3.jpg" alt={'img'} />
        </div>
        <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[9deg] max-md:rotate-[10deg]">
          <Image
            width={220}
            height={220}
            className="rounded-[18px] !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer max-sm:!w-[188px] max-sm:!h-[188px]"
            src="https://i.ibb.co/rySw8GK/photo-2023-01-15-09-26-31.jpg"
            alt={'img'}
          />
        </div>
        <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-10deg] max-md:hidden">
          <Image width={220} height={220} className="rounded-[18px] !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/Zz8p22b/person2.jpg" alt={'img'} />
        </div>
        <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[11deg] max-md:hidden">
          <Image
            width={220}
            height={220}
            className="rounded-[18px] !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer"
            src="https://i.ibb.co/5xQzP7M/photo-2023-08-31-13-32-50.jpg"
            alt={'img'}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutImages
