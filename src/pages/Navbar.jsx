import React, { useState } from 'react'
import "../App.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex flex-col lg:flex-row justify-between lg:justify-around items-center transition-all duration-300 lg:h-14 lg:py-0 lg:px-0 lg:bg-white lg:border-none lg:shadow-none border shadow-lg overflow-hidden p-2 bg-white border-slate-200 shadow-slate-950/5 lg:overflow-visible`}>
        <div className="w-full lg:w-auto flex justify-between items-center">
          <h1 className='font-bold text-2xl lg:ml-0 ml-2'>Wright</h1>

          {/* Hamburger Button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-black hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none ml-auto grid lg:hidden cursor-pointer"
          >
            <svg strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 5H21 M3 12H21 M3 19H21"}></path>
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div className={`transition-all duration-300 ease-in-out w-full lg:w-1/3 flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0 lg:mt-0 lg:max-h-full lg:opacity-100 lg:overflow-visible ${isOpen ? 'max-h-96 opacity-100 mt-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
           <a href='/'><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-sm lg:text-base lg:font-normal text-current">Home</p></a>
           <a href='#about'><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-sm lg:text-base lg:font-normal text-current">About me</p></a>
           <a href='#work'><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-sm lg:text-base lg:font-normal text-current">Experience</p></a>
           <a href="#projects"><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-sm lg:text-base lg:font-normal text-current">Projects</p></a>

          {/* Mobile Connect Button */}
         <a href="#contact"><button className='lg:hidden border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime mt-2 mb-2'>Connect</button></a>
        </div>

        {/* Desktop Connect Button */}
        <a href="#contact"><button className='hidden lg:block border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime'>Connect</button></a>
      </nav>
    </>
  )
}

export default Navbar