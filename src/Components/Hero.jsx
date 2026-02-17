import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center px-20 py-90 bg-blue-200'>
        <div className='text-6xl py-5 tracking-wide'>Hi, I'm Adwick Akarsh.</div>
        <div className='text-2xl text-gray-800'>Data Analyst.</div>
        <div className='text-2xl text-gray-800'>Currently learning to make Wesbites.</div> 
        <div className='absolute w-80 h-80 right-100 rounded-full border-2 animate-[bounce_8s_ease-out_infinite]'></div>
        <div className='absolute w-100 h-100 right-50 top-120 rounded-full border-2 animate-[bounce_12s_ease-in-out_infinite]'></div>
      </div>
    </div>
  )
}

export default Hero