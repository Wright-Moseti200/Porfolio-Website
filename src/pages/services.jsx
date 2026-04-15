import React,{useEffect} from 'react'
import { Timeline } from "@/components/ui/timeline";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  const data = [
    {
      title:"2026",
      content:(
        <div className='border p-3 md:p-5 border-black rounded-sm'>
          <div className=' flex flex-col md:flex-row md:justify-between gap-2 md:gap-0'>
            <div>
              <h1 className='text-lg md:text-xl font-bold'>IT attache</h1>
              <p className='text-base md:text-lg'>Kenya Revenue Authority</p>
            </div>
            <div>
            <div className='bg-black text-white text-center p-2 rounded-full text-sm md:text-base whitespace-nowrap'>January - March</div>
            </div>
          </div>
          <ul className='mt-2 text-black text-sm md:text-base list-disc list-inside space-y-2' >
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

  useEffect(() => {
            AOS.init({
                duration: 2000, // Animation duration in milliseconds
                once: true, // Whether animation should happen only once
            });
        }, []);
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 ' id='work' data-aos="fade-down"
    data-aos-once="false" 
    data-aos-mirror="true"
    data-aos-duration="1200">
        <h1  className='text-center text-4xl lg:text-5xl font-semibold'>Work experience</h1>
         <Timeline data={data} />
      </div>
    </>
  )
}

export default Services