import React, { useState, useEffect } from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/hero'
import Aboutme from './pages/aboutme'
import Services from './pages/services'
import Projects from './pages/projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { Providers } from './pages/Providers'
import Antigravity from './components/Antigravity'
import AnimatedContent from './component/AnimatedContent'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className='fixed inset-0 w-full h-full z-0'>
         <Antigravity
    count={isMobile ? 150 : 300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={isMobile ? 0.8 : 1.5}
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
          <div className="pt-14 lg:pt-16">
            <AnimatedContent>
            <Hero/>
            </AnimatedContent>
            <Aboutme/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
        </Providers>
      </div>
    </>
  )
}

export default App