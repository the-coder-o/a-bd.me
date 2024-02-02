import React from 'react'

export const ProgressBar = ({ percentage, label }: { percentage: number; label: string }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="h-2 w-full rounded border border-primary bg-neutral-500/25">
          <div className="h-2 rounded bg-blue-500" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="w-[15%] whitespace-nowrap text-right dark:text-[#b4b4b4] text-[#646464]">{label}</p>
        <p className="w-[15%] whitespace-nowrap text-right text-lg font-bold">
          {percentage}
          <span className="text-sm">%</span>
        </p>
      </div>
    </div>
  )
}
