import React from 'react'
import { grid } from '../../assets'

export const Grid = () => {
  return (
    <img src={grid} alt='grid' 
    className='hidden lg:block absolute -top-[1.125rem] left-0 z-0 w-full h-full object-contain object-top pointer-event-none opacity-60 mix-blend-color-dodge'
    />
  )
}
