import React from 'react'

const Services = () => {
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 animation services' id='services'>
        <h1 className='text-center text-4xl lg:text-5xl font-semibold'>Services</h1>
        <div className='mt-14 flex flex-col lg:flex-row w-full items-center justify-around gap-8 lg:gap-0'>
          <div className='flex flex-col gap-5 p-10 rounded-sm border shadow-lg w-full sm:w-96 lg:w-auto'>
            <h1 className='font-bold text-xl'>Web design</h1>
            <p className='w-full lg:w-72'>Creating visually appealing and user-centric designs that focus on user experience and brand identity.</p>
            <p className='cursor-pointer text-blue-600 font-medium'>Read more</p>
          </div>
          <div className='flex flex-col gap-5 p-10 rounded-sm border shadow-lg w-full sm:w-96 lg:w-auto'>
            <h1 className='font-bold text-xl'>Frontend development</h1>
            <p className='w-full lg:w-72'>Building responsive and interactive user interfaces using modern technologies like React.js and Tailwind CSS.</p>
            <p className='cursor-pointer text-blue-600 font-medium'>Read more</p>
          </div>
          <div className='flex flex-col gap-5 p-10 rounded-sm border shadow-lg w-full sm:w-96 lg:w-auto'>
            <h1 className='font-bold text-xl'>System design</h1>
            <p className='w-full lg:w-72'>Designing scalable and efficient system architectures to ensure reliability and performance for complex applications.</p>
            <p className='cursor-pointer text-blue-600 font-medium'>Read more</p>
          </div>
          <div className='flex flex-col gap-5 p-10 rounded-sm border shadow-lg w-full sm:w-96 lg:w-auto'>
            <h1 className='font-bold text-xl'>Backend development</h1>
            <p className='w-full lg:w-72'>Developing robust server-side logic, APIs, and database schemas using Node.js, Express, and MongoDB.</p>
            <p className='cursor-pointer text-blue-600 font-medium'>Read more</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services