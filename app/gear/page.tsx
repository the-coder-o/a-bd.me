import React from 'react'
import { GearAppleData, GearHomeDeskSetupData } from '@/lib/data/gears.data'

const GearPage = () => {
  return (
    <div className={'container pb-28'}>
      <div className={'flex flex-col gap-16 md:gap-24'}>
        <div className="flex gap-8 flex-col pt-[5rem]">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Gear</h3>
            <p className="dark:text-[#b4b4b4] text-[#646464]">My toolbox.</p>
          </div>
          <p className={'max-w-lg'}>This is gear I actually own and recommend. The affiliate links come at no extra cost, but it does however help support my content creation.</p>
        </div>
        <div className={'flex flex-col gap-8'}>
          <h2 className={'text-[#646464] dark:text-[#b4b4b4]'}>Apple</h2>
          <div className={'grid md:grid-cols-2 gap-x-6 gap-y-8 group'}>
            {GearAppleData?.map((apple) => (
              <div className={'flex gap-4 items-center transition hover:!opacity-100 group-hover:opacity-50'}>
                <a
                  href={apple?.url}
                  target={'_blank'}
                  className={'flex items-center justify-center rounded-xl w-[5rem] h-[4rem] min-w-[4rem] overflow-hidden aspect-square relative dark:bg-[#b4b4b4] bg-[#e8e8e8]'}
                >
                  <img src={apple?.img} alt="" className={apple?.title} />
                </a>
                <div className={'grow flex justify-between gap-2 items-center'}>
                  <div className={'space-y-1'}>
                    <h3 className={'text-primary line-clamp-2 leading-tight font-medium'}>{apple?.title}</h3>
                    <p className={'line-clamp-3 leading-tight text-sm text-[#646464] dark:text-[#b4b4b4]'}>{apple?.description}</p>
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
        </div>
        <div className={'flex flex-col gap-8'}>
          <h2 className={'text-[#646464] dark:text-[#b4b4b4]'}>Home Desk Setup</h2>
          <div className={'grid md:grid-cols-2 gap-x-6 gap-y-8 group'}>
            {GearHomeDeskSetupData?.map((deskSetup) => (
              <div className={'flex gap-4 items-center transition hover:!opacity-100 group-hover:opacity-50'}>
                <a
                  href={deskSetup?.url}
                  target={'_blank'}
                  className={'flex items-center justify-center rounded-xl w-[5rem] h-[4rem] min-w-[4rem] overflow-hidden aspect-square relative dark:bg-[#b4b4b4] bg-[#e8e8e8]'}
                >
                  <img src={deskSetup?.img} alt="" className={deskSetup?.title} />
                </a>
                <div className={'grow flex justify-between gap-2 items-center'}>
                  <div className={'space-y-1'}>
                    <h3 className={'text-primary line-clamp-2 leading-tight font-medium'}>{deskSetup?.title}</h3>
                    <p className={'line-clamp-3 leading-tight text-sm text-[#646464] dark:text-[#b4b4b4]'}>{deskSetup?.description}</p>
                  </div>
                  <div>
                    <a href={deskSetup?.url} target={'_blank'} className={'ml-auto text-sm rounded-full px-4 py-1 dark:bg-secondary h-fit bg-[#e8e8e8]'}>
                      Get
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GearPage
