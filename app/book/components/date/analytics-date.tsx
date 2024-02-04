import React from 'react'

const AnalyticsDate = () => {
  return (
    <p className="text-center text-xs dark:text-[#7C707D] text-[#646464] mt-[-60px]">
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

export default AnalyticsDate
