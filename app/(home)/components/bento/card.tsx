'use client'

import React from 'react'

import YouTube from './youtube'
import Github from './github'

const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 rounded-md">
      <YouTube />
      <Github />
    </div>
  )
}

export default Cards
