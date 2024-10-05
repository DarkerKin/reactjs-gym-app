import React from 'react'
import Button from './button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl'>RIPPED<span className='text-blue-400'>NORMOUS</span></h1>
      </div>
      <p>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably ripped</span>
      and accept all risks of becoming the local <span className='text-blue-400 font-medium'>ripped monstrosity</span>, afflicted with sever body dysmorphia, able to fit through doors.</p>
      <Button text="Accept & Begin"></Button>
    </div>
  )
}
