import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/hero'
import Aboutme from './pages/aboutme'
import Services from './pages/services'
import Projects from './pages/projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { Providers } from './pages/Providers'
import Antigravity from './components/Antigravity'

const App = () => {
  return (
    <>
      <div className='fixed inset-0 w-full h-full z-0'>
         <Antigravity
    count={300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#000000"
    autoAnimate={true}
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
/>
      </div>
      <div className='relative z-10 w-full'>
        <Providers>
          <Navbar/>
          <Hero/>
          <Aboutme/>
          <Services/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Providers>
      </div>
    </>
  )
}

export default App