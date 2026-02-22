import React from 'react'
import {Link} from 'react-router'

const Connect = () => {
  return (
    <div className='p-12 flex items-center justify-around text-xl bg-hite max-sm:p-8'>
        <div className='text-4xl tracking-wide'>Let's work Together</div>
        <div className='flex gap-10 max-md:flex-col'>
          <button className='bg-black text-white p-4 transition-all duration-400 rounded-xl hover:scale-120 hover:bg-blue-600 max-lg:scale-90'>
          <a href="/DataAnalystAdwick.pdf" download='ResumeAdwickAkarsh.pdf' target='_blank'>View Resume</a>
        </button>
        <button className='bg-black text-white p-4 transition-all duration-400 rounded-xl hover:scale-120 hover:bg-blue-600 max-lg:scale-90'>
            <a href="mailto:adwick0704@gmail.com" target='_blank'>Write a Mail</a>
        </button>
        </div>
    </div>
  )
}

export default Connect