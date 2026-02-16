import React from 'react'
import { Timeline } from "@/components/ui/timeline";

const Services = () => {
  const data = [
    {
      title:"2026",
      content:(
        <div className='border p-5 border-black rounded-sm'>
          <div className=' flex justify-between'>
            <div>
              <h1 className='text-lg font-bold'>IT attache</h1>
              <p>Kenya Revenue Authority</p>
            </div>
            <div>
            <div className='bg-black text-white text-center h-0'>January - March</div>
            </div>
          </div>

          <ul className='mt-2 text-black' >
            <li>Support high-availability digital revenue infrastructure serving Kenya's tax collection system</li>
            <li>Provide end-user technical support and troubleshoot critical hardware/software issues for government operations</li>
            <li>Assist in maintaining cybersecurity protocols and system integrity for sensitive financial data.</li>
            <li>Collaborate with cross-functional teams to ensure optimal performance of enterprise IT systems.</li>
            <li>Gain hands-on experience with cloud-based government services and digital infrastructure management</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <div className='mt-14 px-4 lg:px-0 animation services' id='work'>
        <h1  className='text-center text-4xl lg:text-5xl font-semibold'>Work Experinece</h1>
         <Timeline data={data} />
      </div>
    </>
  )
}

export default Services