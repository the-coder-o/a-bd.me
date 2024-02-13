'use client'

import React from 'react'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

import { Chip } from '@/app/book/components/ui/chip'
import { ProgressBar } from '@/app/book/components/ui/progress-bar'

const Analytics = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      <h2 className="col-span-2 dark:text-[#b4b4b4] text-[#646464] md:col-span-6">Book Analytics</h2>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">Completed books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={12} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">Monthly reading lists</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={650} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">Monthly books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={5} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">Yearly reading</p>
        <h2 className="text-2xl font-bold text-primary">18+</h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">English books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={3} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-2 max-md:items-center">
        <p className=" dark:text-[#b4b4b4] text-[#646464] max-sm:text-xs">Russian Books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={4} />+
        </h2>
      </div>
      <h2 className="col-span-2 mt-4  dark:text-[#b4b4b4] text-[#646464] md:col-span-6">Analytics from my website</h2>
      <div className="col-span-2 row-span-1 space-y-2 rounded-xl border dark:border-styles light-style dark:bg-[#222222] bg-[#EFEFEF] p-6 md:col-span-3">
        <p className="text-[#b4b4b4]">Gender</p>
        <div>
          <ProgressBar percentage={89} label="Male" />
          <ProgressBar percentage={11} label="Fem." />
        </div>
      </div>
      <div className="order-last col-span-2 row-span-2 overflow-clip rounded-xl border dark:border-styles light-style dark:bg-[#222222] bg-[#efefef] pt-6 text-center md:order-none md:col-span-3">
        <p className="font-bold dark:text-[#b4b4b4] text-[#000]">Top Geographies</p>
        <p className="dark:text-[#b4b4b4] text-[#646464]">Views contribution</p>
        <div className="relative mt-6 flex-grow">
          <img src={'https://i.ibb.co/ZG8W6pL/map.png'} alt="map" className="opacity-75 saturate-0" />
          <Chip label="🇺🇸 30%" position={[35, 10]} />
          <Chip label="🇧🇷 3%" position={[65, 25]} />
          <Chip label="🇬🇱 3%" position={[10, 33]} />
          <Chip label="🇨🇦 5%" position={[16, 15]} />
          <Chip label="🇺🇿 48%" position={[35, 57]} />
          <Chip label="🇨🇳 3%" position={[47, 65]} />
          <Chip label="🇵🇱 3%" position={[23, 48]} />
          <Chip label="🇰🇪 3%" position={[60, 52]} />
          <Chip label="🇷🇺 5%" position={[20, 65]} />
          <Chip label="🇳🇪 2%" position={[48, 42]} />
          <Chip label="🇫🇷 2%" position={[35, 40]} />
        </div>
      </div>
      <div className="col-span-2 row-span-1 space-y-2 rounded-xl border dark:border-styles light-style dark:bg-[#222222] bg-[#efefef] p-6 md:col-span-3">
        <p className="dark:text-[#b4b4b4] text-[#646464]">Age</p>
        <div>
          <ProgressBar percentage={38} label="18-24" />
          <ProgressBar percentage={39} label="25-34" />
          <ProgressBar percentage={16} label="35-44" />
        </div>
      </div>
    </motion.div>
  )
}

export default Analytics
