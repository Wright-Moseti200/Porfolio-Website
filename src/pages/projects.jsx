import React from 'react'
import Hotelpic from "../assets/Hotel-booking-website-picture.PNG";
import foodpic from "../assets/Food-ordering-website-picture.PNG";
import JobPic from  "../assets/Job-Portal-website.PNG";
import terminal from "../assets/Ai-terminal-chatbot-2.PNG";
import netflix from "../assets/Netflix-clone-picture.PNG";
import spotify from "../assets/Spotify-clone-picture.PNG";
import landing from  "../assets/landing-page-image.PNG";

const Projects = () => {
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 animation projects' id='projects'>
        <h1 className='text-center font-semibold text-4xl lg:text-5xl'>Projects</h1>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 w-full justify-items-center'>
        <a href='https://hotelbookingwebiste.netlify.app' className='bg-white'>
          <img src={Hotelpic} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Hotel Booking Website</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://mellifluous-stroopwafel-8ab97d.netlify.app' className='bg-white'>
          <img src={foodpic} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Food Ordering Website</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://jobportalsite123.netlify.app' className='bg-white'>
          <img src={JobPic} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Job Portal Website</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://github.com/Wright-Moseti200/AI_chatbot.git' className='bg-white'>
          <img src={terminal} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Ai terminal chatbot</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://breakernefliux.netlify.app' className='bg-white'>
          <img src={netflix} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Netflix</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://spotifyclone12000.netlify.app' className='bg-white'>
          <img src={spotify} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Spotify</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
         <a href='https://educationalsite2.netlify.app' className='bg-white'>
          <img src={landing} className=' w-[400px] rounded'/>
          <h1 className='font-bold'>Landing page</h1>
          <p>React,Mongodb,Express & Node</p>
        </a>
        </div>
      </div>
    </>
  )
}

export default Projects