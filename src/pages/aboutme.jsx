import React from 'react'
import image from "../assets/MVIMG_20250828_111751.jpg"
import "../App.css"
const Aboutme = () => {
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 animation' id="about">
        <h1 className='text-center text-4xl lg:text-5xl font-semibold'>About me</h1>
        <div className='mt-10 flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20'>
          <img src={image} alt='' className='h-72 w-full lg:h-96 lg:w-auto object-cover rounded-md' />
          <div className='flex flex-col items-center lg:items-start'>
            <p className='w-full lg:w-[700px] text-center lg:text-left text-pretty px-2 lg:px-0'>I am a experienced Fullstack Developer with over a decade
              of professional expertise in the field.Throughtout my career,
              I have had the priviledge of collaborating with prestigous organizations
              ,contributing to their success and growth
            </p>
            <div className='mt-10 flex flex-col lg:flex-row gap-5 lg:gap-3 w-full lg:w-auto'>
              <div className='border p-5 pt-10 pb-10 rounded-sm shadow-lg w-full lg:w-auto text-center lg:text-left'>
                <h1 className='font-semibold'>Languages</h1>
                <p className='mt-2'>Html,Css,Javascript,Express js,Node js</p>
              </div>
              <div className='border p-5 pt-10 pb-10 rounded-sm shadow-lg w-full lg:w-auto text-center lg:text-left'>
                <h1 className='font-semibold'>Education</h1>
                <p className='mt-2'>Bachelor of Science information technolgy</p>
              </div>
              <div className='border p-5 pt-10 pb-10 rounded-sm shadow-lg w-full lg:w-auto text-center lg:text-left'>
                <h1 className='font-semibold'>Projects</h1>
                <p className='mt-2'>Built more than 4 projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme