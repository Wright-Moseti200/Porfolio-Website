import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css"



const Aboutme = () => {
  useEffect(() => {
            AOS.init({
                duration: 2000, // Animation duration in milliseconds
                once: false, // Whether animation should happen only once
            });
        }, []);
  return (
    <>
      <div className='mt-14 px-4 lg:px-0' id="about">
        <h1 className='text-center text-4xl lg:text-5xl font-semibold' data-aos="fade-down">About me & Services</h1>
        <div className=' flex flex-col lg:flex-row mt-20  justify-center items-center gap-5'>
          <div className='flex flex-col w-full max-w-sm lg:w-96 p-6 border border-black rounded-sm bg-white' data-aos="fade-up" data-aos-delay="100">
            <img src="https://img.icons8.com/?size=100&id=4kuCnjaqo47m&format=png&color=000000" alt='profile picture' className=' h-10 w-10' />
            <h1 className=' font-bold text-lg mt-2'>Who I Am</h1>
            <p className=' mt-2'>I am an experineced FullStack Developer with years of professional expertise.
              I specialize in building high-performance,accesible and scalable web applications
            </p>
            <p className=' mt-2'>My passion lies in bridging the gap between elegant design and robust engineering. I build
              systems
            </p>
            <hr className='  mt-2' />
            <div className=' flex justify-around mt-2'>
              <div className='flex flex-col'>
                <h1 className=' text-lg font-bold'>2+</h1>
                <p>Years</p>
              </div>
              <div className='flex flex-col'>
                <h1 className=' text-lg font-bold'>20+</h1>
                <p>Projects</p>
              </div>
              <div className='flex flex-col'>
                <h1 className=' text-lg font-bold'>100%</h1>
                <p>Success</p>
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className=' w-full lg:w-96 p-5 border rounded-sm border-black bg-white' data-aos="fade-up" data-aos-delay="200">
              <img src="https://img.icons8.com/?size=100&id=4i8EFdsgyQ2M&format=png&color=000000" alt='profile picture' className=' h-5 w-5' />
              <h1 className='text-lg font-bold mt-2'>Frontend Dev</h1>
              <p className='mt-2'>Building responsive and interactive user interfaces
                using modern technologies like React.js and Tailwind CSS
              </p>
            </div>
            <div className=' w-full lg:w-96 p-5 border rounded-sm border-black bg-white' data-aos="fade-up" data-aos-delay="300">
              <img src="https://img.icons8.com/?size=100&id=4i8EFdsgyQ2M&format=png&color=000000" alt='profile picture' className=' h-5 w-5' />
              <h1 className='text-lg font-bold mt-2'>Backend Dev</h1>
              <p className='mt-2'>
                Developing robust server-side logic, APIs and database schemas using Node.js,Express and Mongodb
              </p>
            </div>
            <div className=' w-full lg:w-96 p-5 border rounded-sm border-black bg-white' data-aos="fade-up" data-aos-delay="400">
              <img src="https://img.icons8.com/?size=100&id=j9aP1JRrdinu&format=png&color=000000" alt='profile picture' className=' h-5 w-5' />
              <h1 className='text-lg font-bold mt-2'>Web Design</h1>
              <p className='mt-2'>Creating visually appealing and user-centric designs that focus on user experience and brand identity
              </p>
            </div>
            <div className=' w-full lg:w-96 p-5 border rounded-sm border-black bg-white' data-aos="fade-up" data-aos-delay="500">
              <img src="https://img.icons8.com/?size=100&id=wVtm1JDKieWL&format=png&color=000000" alt='profile picture' className=' h-5 w-5' />
              <h1 className='text-lg font-bold mt-2'>System Design</h1>
              <p className='mt-2'>
                Designing scalable architectures to ensure reliability and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme