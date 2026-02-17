import React from 'react'
import {Link} from 'react-router'

const Connect = () => {
  return (
    <div className='p-12 flex items-center justify-around text-xl bg-blue-100'>
        <div className='text-4xl tracking-wide'>Let's work Together</div>
        <div className='flex gap-10 sm:flex-col'>
          <button className='bg-black text-blue-50 p-4 transition-all duration-400 rounded-full hover:scale-120 hover:bg-blue-600 hover:text-black'>
          <a href="/files/DataAnalystAdwick.pdf" download='ResumeAdwickAkarsh.pdf' target='_blank'>View Resume</a>
        </button>
        <button className='bg-black text-blue-50 p-4 transition-all duration-400 rounded-full hover:scale-120 hover:bg-blue-600 hover:text-black'>
            <a href="mailto:adwick0704@gmail.com" target='_blank'>Write a Mail</a>
        </button>
        </div>
    </div>
  )
}

export default Connect