'use client'

import React from 'react'

import Image from 'next/image'

import CountUp from 'react-countup'

import { Button } from '@/components/ui/button'

import RocketIcon from '@/public/rocket/rocket.png'

const AnalyticsWebsite = () => {
  return (
    <>
      <div className="grid !grid-cols-4 justify-center items-center gap-3 max-md:!grid-cols-2 max-md:gap-4 mt-[-50px]">
        <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
          <p className="dark:text-[#b4b4b4] text-[#646464]">Subscribers</p>
          <h2 className="text-2xl font-bold text-primary">
            <CountUp end={32} />+
          </h2>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
          <p className="dark:text-[#b4b4b4] text-[#646464]">Monthly views</p>
          <h2 className="text-2xl font-bold text-primary">
            <CountUp end={850} />+
          </h2>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
          <p className="dark:text-[#b4b4b4] text-[#646464]">Daily views</p>
          <h2 className="text-2xl font-bold text-primary">
            <CountUp end={120} />+
          </h2>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
          <p className="dark:text-[#b4b4b4] text-[#646464]">Yearly views</p>
          <h2 className="text-2xl font-bold text-primary">
            <CountUp end={1000} />+
          </h2>
        </div>
      </div>
      <div className={'flex items-center justify-center mt-[-70px] max-md:mt-[-50px] max-md:mb-[6px]'}>
        <Button onClick={() => window.open('https://analytics.us.umami.is/share/wxpBXX6WJmlJVWyE/Abdul%20Basit')} className={'!flex !items-center !gap-1'}>
          View all Analytics
          <Image width={18} height={18} src={RocketIcon} alt={'RocketIcon'} />
        </Button>
      </div>
    </>
  )
}

export default AnalyticsWebsite
