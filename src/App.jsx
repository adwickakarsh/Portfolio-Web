import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Lenis from 'lenis'
import Connect from './Components/Connect'

const App = () => {
  const lenis = new Lenis({
    autoRaf:true,
    duration:2
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App