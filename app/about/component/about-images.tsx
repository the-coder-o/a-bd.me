import React from 'react'
import Image from 'next/image'

const AboutImages = () => {
  return (
    <div>
      <div className="flex items-center justify-center container-for-slider !mt-[100px] max-md:!mt-[50px]">
        <div className="w-auto hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-8deg]">
          <Image width={220} height={220} className="rounded-[18px] !object-cover !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/bzCjVtr/person3.jpg" alt={'img'} />
        </div>
        <div className="w-auto hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[9deg] max-md:rotate-[10deg]">
          <Image
            width={220}
            height={220}
            className="rounded-[18px] !object-cover !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer max-sm:!w-[170px] max-sm:!h-[200px]"
            src="https://i.ibb.co/mvnB5XJ/photo-2024-01-29-11-01-31.jpg"
            alt={'img'}
          />
        </div>
        <div className="w-auto hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-10deg] max-md:hidden">
          <Image
            width={220}
            height={220}
            className="rounded-[18px] !object-cover !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer"
            src="https://i.ibb.co/MPyDVH2/photo-2024-01-29-11-45-54.jpg"
            alt={'img'}
          />
        </div>
        <div className="w-auto hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[11deg] max-md:hidden">
          <Image
            width={220}
            height={220}
            className="rounded-[18px] !object-cover !w-[220px] !h-[220px] bg-cover bg-no-repeat cursor-pointer"
            src="https://i.ibb.co/BqJJ2qp/photo-2024-01-24-14-23-40.jpg"
            alt={'img'}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutImages
