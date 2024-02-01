'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { Chip } from '@/app/book/components/chip'
import { ProgressBar } from '@/app/book/components/progress-bar'
import CountUp from 'react-countup'

const Analytics = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      <h2 className="col-span-2 text-[#b4b4b4] md:col-span-6">Book Analytics</h2>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4] max-sm:text-xs">Completed books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={12} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4] max-sm:text-xs">Monthly reading lists</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={650} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4] max-sm:text-xs">Monthly books</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={5} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4] max-sm:text-xs">Yearly reading</p>
        <h2 className="text-2xl font-bold text-primary">18+</h2>
      </div>
      <h2 className="col-span-2 mt-4 text-[#b4b4b4] md:col-span-6">Analytics from my website</h2>
      <div className="col-span-2 row-span-1 space-y-2 rounded-xl border border-styles bg-[#222222] p-6 md:col-span-3">
        <p className="text-[#b4b4b4]">Gender</p>
        <div>
          <ProgressBar percentage={89} label="Male" />
          <ProgressBar percentage={11} label="Fem." />
        </div>
      </div>
      <div className="order-last col-span-2 row-span-2 overflow-clip rounded-xl border border-styles bg-[#222222] pt-6 text-center md:order-none md:col-span-3">
        <p className="font-bold text-[#b4b4b4]">Top Geographies</p>
        <p className="text-[#b4b4b4]">Views contribution</p>
        <div className="relative mt-6 flex-grow">
          <img src={'https://i.ibb.co/ZG8W6pL/map.png'} alt="map" className="opacity-75 saturate-0" />
          <Chip label="🇺🇸 60%" position={[35, 10]} />
          <Chip label="uz 35%" position={[30, 50]} />
          <Chip label="ch 7%" position={[50, 65]} />
        </div>
      </div>
      <div className="col-span-2 row-span-1 space-y-2 rounded-xl border border-styles bg-[#222222] p-6 md:col-span-3">
        <p className="text-[#b4b4b4]">Age</p>
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
