import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/hero'
import Aboutme from './pages/aboutme'
import Services from './pages/services'
import Projects from './pages/projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { Providers } from './pages/Providers'
import { PrimeReactProvider } from 'primereact/api';

const App = () => {
  return (
    <>
    <PrimeReactProvider>
    <Providers>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </Providers>
    </PrimeReactProvider>
    </>
  )
}

export default App