import Image from 'next/image'

import { GearAppleData } from '@/lib/data/gears.data'

const GearApple = () => {
  return (
    <>
      <h2 className={'text-[#646464] dark:text-[#b4b4b4]'}>Apple</h2>
      <div className={'grid md:grid-cols-2 gap-x-6 gap-y-8 group'}>
        {GearAppleData?.map((apple) => (
          <div className={'flex gap-4 items-center transition hover:!opacity-100 group-hover:opacity-50'}>
            <a href={apple?.url} target={'_blank'} className={'flex items-center justify-center rounded-xl min-w-[4rem] overflow-hidden aspect-square relative dark:bg-[#fff] bg-[#e8e8e8]'}>
              <Image fill src={apple?.img} alt={apple?.title} />
            </a>
            <div className={'grow flex justify-between gap-2 items-center'}>
              <div className={'space-y-1'}>
                <h3 className={'text-primary line-clamp-2 leading-tight font-medium'}>{apple?.title}</h3>
                <p className={'line-clamp-2 leading-tight text-sm text-[#646464] dark:text-[#b4b4b4]'}>{apple?.description}</p>
              </div>
              <div>
                <a href={apple?.url} target={'_blank'} className={'ml-auto text-sm rounded-full px-4 py-1 dark:bg-secondary h-fit bg-[#e8e8e8]'}>
                  Get
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GearApple
