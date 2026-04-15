import React from 'react'
import profileimage from "../assets/MVIMG_20250828_111751.jpg"
import TiltedCard from '@/component/TiltedCard'

const Hero = () => {
  return (
    <>
      <div className='w-full h-auto lg:h-[600px] flex flex-col lg:flex-row justify-around items-center mt-14 gap-10 lg:gap-5 px-4 lg:px-0'>
        <div className='flex flex-col items-center lg:items-baseline justify-center lg:justify-end h-auto lg:h-[600px] text-center lg:text-left'>
          <h1 className='text-4xl lg:text-8xl w-full lg:w-32 leading-tight lg:leading-normal font-semibold'>Fullstack Web Developer</h1>
        </div>
        <div className='flex flex-col h-auto lg:h-[600px] justify-around items-center lg:items-start gap-8 lg:gap-0'>
          <TiltedCard
  imageSrc={profileimage}
  altText="Wright Gichana"
  captionText="Wright Gichana - Fullstack Developer"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="350px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
/>
          <p className='w-full lg:w-40 text-center lg:text-left text-pretty font-semibold'>Hi, i`m Wright Gichana, A Fullstack web developer
            creating intuitive digital experiences
          </p>
        </div>
      </div>
      <div className='mt-10 lg:mt-20'>
        <marquee className="flex w-full gap-5" width="">
          <div className='flex w-full gap-10 items-center'>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>HTML</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>CSS</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>JAVASCRIPT</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>REACT JS</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>EXPRESS JS</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>NODE JS</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>MONGODB</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>SQL</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>DATABASE DESIGN</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>USER INTERFACE DESIGN</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>API INTERGRATION</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>GIT & GITHUB</p>
            <p className='bg-gray-300 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>RESPONSIVE WEB DESIGN</p>
          </div>
        </marquee>
      </div>
    </>
  )
}

export default Hero