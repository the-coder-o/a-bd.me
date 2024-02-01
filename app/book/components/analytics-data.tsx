import React from 'react'

const AnalyticsData = () => {
  return (
    <p className="text-center text-xs text-[#7C707D] mt-[-60px]">
      Analytics for the month of&nbsp;
      {new Date().toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      })}
      .<br></br>
      Additional data points available upon request.
    </p>
  )
}

export default AnalyticsData
