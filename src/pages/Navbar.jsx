import React, { useState } from 'react'
import "../App.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='flex w-full h-auto lg:h-14 flex-col lg:flex-row justify-between lg:justify-around items-center py-4 lg:py-0 px-4 lg:px-0 bg-white border-b lg:border-none relative'>
        <div className="w-full lg:w-auto flex justify-between items-center">
          <h1 className='font-bold text-2xl'>Wright</h1>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible w-full lg:w-1/3 flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0 lg:mt-0 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}>
       <a href='/'><p className="cursor-pointer hover:text-gray-600">Home</p></a>
       <a href='#about'><p className="cursor-pointer hover:text-gray-600">About me</p></a>
       <a href='#services'><p className="cursor-pointer hover:text-gray-600">Services</p></a>
       <a href="#projects"><p className="cursor-pointer hover:text-gray-600">Projects</p></a>

          {/* Mobile Connect Button (Optional to show here or separate) */}
         <a href="#contact"><button className='lg:hidden border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime mt-2'>Connect</button></a>
        </div>

        {/* Desktop Connect Button */}
        <a href="#contact"><button className='hidden lg:block border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime'>Connect</button></a>
      </div>
    </>
  )
}

export default Navbar