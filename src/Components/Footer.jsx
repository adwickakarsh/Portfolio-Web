import React from 'react'

const Footer = () => {
  return (
    <div className='bg-purple-200 p-8 text-2xl flex items-center justify-start gap-1.5 max-sm:text-xl'>
      <div>Inspired By</div>
      <a href="https://mohitkumar.dev/" target="_blank" className='bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom bg-gradient-to-r from-black to-black
  transition-all duration-400 ease-out'>Mohit</a>
    </div>
  )
}

export default Footer