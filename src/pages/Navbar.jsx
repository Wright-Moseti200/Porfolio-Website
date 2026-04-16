import React, { useState } from 'react'
import "../App.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex flex-col lg:flex-row justify-between lg:justify-around items-center transition-all duration-300 lg:h-14 lg:py-0 lg:px-0 lg:bg-white lg:border-none lg:shadow-none border shadow-lg overflow-hidden p-2 bg-white border-slate-200 shadow-slate-950/5 lg:overflow-visible`}>
        <div className="w-full lg:w-auto flex justify-between items-center">
          <h1 onClick={scrollToTop} className='font-bold text-2xl lg:ml-0 ml-2 cursor-pointer'>Wright Gichana</h1>

          {/* Mobile Connect area */}
          <div className="flex items-center lg:hidden ml-auto mr-4 gap-4">
            <a href="https://www.linkedin.com/in/wright-gichana-84976131b" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-black hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/Wright-Moseti200" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 text-black hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>

          {/* Hamburger Button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-black hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none grid lg:hidden cursor-pointer"
          >
            <svg strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 5H21 M3 12H21 M3 19H21"}></path>
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div className={`transition-all duration-300 ease-in-out w-full lg:w-auto lg:gap-8 flex flex-col lg:flex-row justify-around items-center gap-4 lg:mt-0 lg:max-h-full lg:opacity-100 lg:overflow-visible ${isOpen ? 'max-h-96 opacity-100 mt-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
           <a href='/' onClick={scrollToTop}><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-base lg:text-lg lg:font-normal text-current">Home</p></a>
           <a href='#about' onClick={() => setIsOpen(false)}><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-base lg:text-lg lg:font-normal text-current">About me</p></a>
           <a href='#work' onClick={() => setIsOpen(false)}><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-base lg:text-lg lg:font-normal text-current">Experience</p></a>
           <a href="#projects" onClick={() => setIsOpen(false)}><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-base lg:text-lg lg:font-normal text-current">Projects</p></a>
           <a href="#certifications" onClick={() => setIsOpen(false)}><p className="cursor-pointer hover:text-gray-600 font-sans antialiased text-base lg:text-lg lg:font-normal text-current">Certifications</p></a>

          {/* Mobile Connect Button */}
         <a href="#contact" onClick={() => setIsOpen(false)}><button className='lg:hidden border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime mb-2'>Connect</button></a>
        </div>

        {/* Desktop Socials & Connect Button */}
        <div className="hidden lg:flex items-center gap-5 lg:mr-2">
          <a href="https://www.linkedin.com/in/wright-gichana-84976131b" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-black hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="https://github.com/Wright-Moseti200" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-black hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a href="#contact"><button className='border bg-white p-2 pl-4 pr-4 rounded-full border-black button-anime'>Connect</button></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar