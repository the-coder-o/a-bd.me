import React from 'react'
import Image from 'next/image'

const MobileDesign = () => {
  return (
    <div className="lg:hidden mt-8">
      <div className="animate-in" style={{ '--index': 1 } as React.CSSProperties}>
        <Image src={'https://www.a-bd.me/_next/image?url=https%3A%2F%2Fi.ibb.co%2FbzCjVtr%2Fperson3.jpg&w=256&q=75'} alt={'me and lily'} width={324} height={139} className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6" priority />
      </div>

      <div className="animate-in" style={{ '--index': 1 } as React.CSSProperties}>
        <Image
          src={'https://www.a-bd.me/_next/image?url=https%3A%2F%2Fi.ibb.co%2FMPyDVH2%2Fphoto-2024-01-29-11-45-54.jpg&w=256&q=75'}
          alt={'me and lily'}
          width={220}
          height={260}
          className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 top-[300px]"
          priority
        />
      </div>
    </div>
  )
}

export default MobileDesign
