'use client'

import React from 'react'

import CountUp from 'react-countup'

const AnalyticsWebsite = () => {
  return (
    <div className="grid !grid-cols-4 justify-center items-center gap-3 max-md:!grid-cols-2 max-md:gap-4 mt-[-50px]">
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4]">Subscribers</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={32} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4]">Monthly views</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={262} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4]">Daily views</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={18} />+
        </h2>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center rounded-xl border-styles bg-[#222222] p-6 md:col-span-2 max-md:items-center">
        <p className="text-[#b4b4b4]">Yearly views</p>
        <h2 className="text-2xl font-bold text-primary">
          <CountUp end={1000} />+
        </h2>
      </div>
    </div>
  )
}

export default AnalyticsWebsite
