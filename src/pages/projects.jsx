import React from 'react'
import image1 from "../assets/Educational screenshot.png"
import image2 from "../assets/netflix screenshots.png"
import image3 from "../assets/spotify shots.png"
import image4 from "../assets/Screenshot from 2025-12-10 18-48-09.png"
const Projects = () => {
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 animation projects' id='projects'>
        <h1 className='text-center font-semibold text-4xl lg:text-5xl'>Projects</h1>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 justify-items-center'>
          <a href='https://mellifluous-stroopwafel-8ab97d.netlify.app' className='group relative overflow-hidden block border h-64 w-full lg:h-80 lg:w-[450px] bg-cover bg-center rounded-sm shadow-md ' style={{ backgroundImage: `url(${image4})` }}>
            <p className='absolute bottom-0 w-full bg-black/70 text-white p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>Food delivery website</p>
          </a>
          <a href='https://breakernefliux.netlify.app' className='group relative overflow-hidden block border h-64 w-full lg:h-80 lg:w-[450px] bg-cover bg-center rounded-sm shadow-md' style={{ backgroundImage: `url(${image2})` }}>
            <p className='absolute bottom-0 w-full bg-black/70 text-white p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>Netflix clone</p>
          </a>
          <a href='https://spotifyclone12000.netlify.app' className='group relative overflow-hidden block border h-64 w-full lg:h-80 lg:w-[450px] bg-cover bg-center rounded-sm shadow-md' style={{ backgroundImage: `url(${image3})` }}>
            <p className='absolute bottom-0 w-full bg-black/70 text-white p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>Spotify clone</p>
          </a>
          <a href='https://educationalsite2.netlify.app' className='group relative overflow-hidden block border h-64 w-full lg:h-80 lg:w-[450px] bg-cover bg-center rounded-sm shadow-md' style={{ backgroundImage: `url(${image1})` }}>
            <p className='absolute bottom-0 w-full bg-black/70 text-white p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>Landing page</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects