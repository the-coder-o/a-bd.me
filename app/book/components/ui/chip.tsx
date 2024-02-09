import React from 'react'

export const Chip = ({ label, position }: { label: string; position: Array<number> }) => {
  return (
    <span
      className="absolute z-20 rounded-full border border-primary dark:bg-[#222222] bg-[#fff] px-1 py-[2px] flex items-center justify-center text-sm font-bold shadow contrast-125 drop-shadow-xl"
      style={{
        top: `${position[0]}%`,
        left: `${position[1]}%`,
      }}
    >
      <span className="contrast-75">{label}</span>
    </span>
  )
}
