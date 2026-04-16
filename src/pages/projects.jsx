import React,{useEffect} from 'react'
import Hotelpic from "../assets/Hotel-booking-website-picture.PNG";
import foodpic from "../assets/Food-ordering-website-picture.PNG";
import JobPic from  "../assets/Job-Portal-website.PNG";
import terminal from "../assets/Ai-terminal-chatbot-2.PNG";
import netflix from "../assets/Netflix-clone-picture.PNG";
import spotify from "../assets/Spotify-clone-picture.PNG";
import landing from  "../assets/landing-page-image.PNG";
import eccomerce from "../assets/Eccomerce website.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectList = [
  {
    title: 'Ecommerce website',
    image: eccomerce,
    desc: 'A complete e-commerce platform with cart and checkout built with React, MongoDB, Express & Node.',
    live: 'https://eccomercewebsite123.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Eccomerce.git'
  },
  {
    title: 'Hotel booking website',
    image: Hotelpic,
    desc: 'A full-featured hotel reservation system allowing users to find and book rooms easily.',
    live: 'https://hotelbookingwebiste.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Hotel-booking.git'
  },
  {
    title: 'Food ordering website',
    image: foodpic,
    desc: 'An intuitive food delivery application crafted with the MERN stack for seamless orders.',
    live: 'https://mellifluous-stroopwafel-8ab97d.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Food-delivery-site.git'
  },
  {
    title: 'Job portal website',
    image: JobPic,
    desc: 'A dynamic job board designed to connect applicants with opportunities using React and Node.',
    live: 'https://jobportalsite123.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Job-Portal-Managemant.git'
  },
  {
    title: 'Ai terminal chatbot',
    image: terminal,
    desc: 'A powerful command line interface AI chatbot powered by Node, Express, and the Gemini API.',
    live: '#',
    github: 'https://github.com/Wright-Moseti200/AI_chatbot.git'
  },
  {
    title: 'Netflix clone',
    image: netflix,
    desc: 'A frontend clone of Netflix using React and Firebase, fetching movies via the TMDB API.',
    live: 'https://breakernefliux.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Netflix_clone.git'
  },
  {
    title: 'Spotify clone',
    image: spotify,
    desc: 'A beautiful Spotify web player interface clone constructed with pure JavaScript and React.',
    live: 'https://spotifyclone12000.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Spotifyclone.git'
  },
  {
    title: 'Landing page',
    image: landing,
    desc: 'A responsive and elegant promotional landing page using modern web development practices.',
    live: 'https://educationalsite2.netlify.app',
    github: 'https://github.com/Wright-Moseti200/Educationalsite.git'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
        once: false,
    });
  }, []);

  return (
    <>
      <div className='mt-14 px-4 lg:px-0 projects mb-20' id='projects'>
        
        <h1 className='text-center font-semibold text-4xl lg:text-5xl text-black mb-12' data-aos="fade-up">Projects</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center max-w-7xl mx-auto'>
          {projectList.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col bg-white border border-black rounded-sm overflow-hidden w-full max-w-[400px] transition-all duration-300">
              
              <div className="h-52 w-full border-b border-black overflow-hidden bg-white">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover border-none" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="font-semibold text-xl text-black mb-2">{project.title}</h2>
                <p className="text-black text-base lg:text-sm mb-6 flex-grow">{project.desc}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-black">
                  {project.live !== '#' ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm hover:underline flex items-center gap-1 group">
                      Live Site
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ) : (
                    <span className="text-gray-500 font-semibold text-sm flex items-center gap-1">
                      CLI Only
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                  )}
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects