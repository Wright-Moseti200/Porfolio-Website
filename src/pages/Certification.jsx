import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import fullstackCert from '../assets/Fullstack development.png';
import ibmCert from '../assets/Nodejs and mongodb.png';
import aiCert from '../assets/Introduction to ai.png';
import techCert from '../assets/Technical fundamentals.png';

const certList = [
  {
    title: 'Full-Stack Development',
    issuer: 'Mimo',
    date: 'August 20, 2025',
    image: fullstackCert,
    desc: 'Covered HTML, CSS, JavaScript, React, Data structures, Algorithms, Node.js, Express.js, and SQL.',
    link: 'https://www.virtualbadge.io/certificate-validator?credential=01cce887-65df-43ee-bf45-737535068374'
  },
  {
    title: 'Node.js & MongoDB: Developing Back-end Database Applications',
    issuer: 'IBM',
    date: 'January 13, 2026',
    image: ibmCert,
    desc: 'Completed an online course authorized by IBM focusing on robust backend development and MongoDB.',
    link: 'https://coursera.org/verify/VN9YJ2U1AP5X'
  },
  {
    title: 'Introduction to AI',
    issuer: 'Google',
    date: 'November 10, 2025',
    image: aiCert,
    desc: 'Completed an online course authorized by Google covering fundamental concepts in Artificial Intelligence.',
    link: 'https://coursera.org/verify/2F14D9ALF5F6'
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'December 11, 2025',
    image: techCert,
    desc: 'Completed an online course authorized by Google covering the fundamentals of Technical Support.',
    link: 'https://coursera.org/verify/CPBRKC1PLVBM'
  }
];

const Certification = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className='mt-14 px-4 lg:px-0 certifications mb-20' id='certifications'>
      <h1 className='text-center font-semibold text-4xl lg:text-5xl text-black mb-12' data-aos="fade-down">
        Certifications
      </h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center max-w-7xl mx-auto'>
        {certList.map((cert, index) => (
          <div 
            key={index} 
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col bg-white border border-black rounded-sm overflow-hidden w-full max-w-[400px] transition-all duration-300"
          >
            {/* Image Placeholder - Auto displays image if available */}
            <div className="h-64 w-full border-b border-black overflow-hidden flex items-center justify-center relative group bg-gray-50">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain object-center p-2 border-none" />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="text-sm font-medium">Image Placeholder</span>
                </div>
              )}
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="font-semibold text-xl text-black mb-1">{cert.title}</h2>
              <h3 className="text-sm font-bold text-gray-500 mb-4 tracking-wide">{cert.issuer}</h3>
              <p className="text-black text-base lg:text-sm mb-6 flex-grow">{cert.desc}</p>
              
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-black">
                <span className="text-xs font-semibold text-gray-600">{cert.date}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm hover:underline flex items-center gap-1 group">
                  Verify credential
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certification;
