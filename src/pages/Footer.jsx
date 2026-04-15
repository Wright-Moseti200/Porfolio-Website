import React from 'react'
import "../App.css"
const Footer = () => {
  let date = new Date();
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 mt-10">
      <div className="flex w-full flex-col lg:flex-row justify-around items-center p-8 h-auto lg:h-40 gap-6 lg:gap-0">

        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className='font-bold text-3xl'>Wright</h1>
          <p className="text-sm text-gray-400 mt-2">© {date.getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col lg:flex-row w-full lg:w-1/3 justify-around items-center gap-4 lg:gap-0 font-medium text-gray-300'>
          <p className="cursor-pointer hover:text-white transition-colors">Home</p>
          <p className="cursor-pointer hover:text-white transition-colors">About me</p>
          <p className="cursor-pointer hover:text-white transition-colors">Services</p>
          <p className="cursor-pointer hover:text-white transition-colors">Projects</p>
        </div>

        {/* Right Section / Connect */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-2">Get in touch</p>
          <button className='border bg-white text-black font-medium p-2 pl-6 pr-6 rounded-full hover:bg-gray-200 transition-all'>
            Contact Me
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer