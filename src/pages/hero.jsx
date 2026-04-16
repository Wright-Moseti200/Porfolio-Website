import React from 'react'
import profileimage from "../assets/MVIMG_20250828_111751.jpg"
import TiltedCard from '@/component/TiltedCard'
import {
  FileCode2, Palette, Code2, Atom, Server, Network, Database,
  PenTool, MonitorSmartphone, Plug, Github, Smartphone,
  Container, FileType2, DatabaseBackup, DatabaseZap
} from 'lucide-react';

const skills = [
  { name: 'HTML', Icon: FileCode2 },
  { name: 'CSS', Icon: Palette },
  { name: 'JAVASCRIPT', Icon: Code2 },
  { name: 'REACT JS', Icon: Atom },
  { name: 'EXPRESS JS', Icon: Server },
  { name: 'NODE JS', Icon: Network },
  { name: 'MONGODB', Icon: Database },
  { name: 'SQL', Icon: DatabaseZap },
  { name: 'DATABASE DESIGN', Icon: PenTool },
  { name: 'USER INTERFACE DESIGN', Icon: MonitorSmartphone },
  { name: 'API INTEGRATION', Icon: Plug },
  { name: 'GIT & GITHUB', Icon: Github },
  { name: 'RESPONSIVE WEB DESIGN', Icon: Smartphone },
  { name: 'REDIS', Icon: DatabaseBackup },
  { name: 'DOCKER', Icon: Container },
  { name: 'POSTGRESQL', Icon: Database },
  { name: 'TYPESCRIPT', Icon: FileType2 },
];

const Hero = () => {
  return (
    <>
      <div className='w-full h-auto lg:h-[600px] flex flex-col lg:flex-row justify-around items-center mt-14 gap-10 lg:gap-5 px-4 lg:px-0'>
        <div className='flex flex-col items-center lg:items-baseline justify-center lg:justify-end h-auto lg:h-[600px] text-center lg:text-left'>
          <h1 className='text-4xl lg:text-8xl w-full lg:w-32 leading-tight lg:leading-normal font-semibold'>Fullstack Web Developer</h1>
        </div>
        <div className='flex flex-col h-auto lg:h-[600px] justify-around items-center lg:items-start gap-8 lg:gap-0'>
          <TiltedCard
            imageSrc={profileimage}
            altText="Wright Gichana"
            captionText="Wright Gichana - Fullstack Developer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="350px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
          />
          <p className='w-full lg:w-40 text-center lg:text-left text-pretty font-semibold'>Hi, i`m Wright Gichana, A Fullstack web developer
            creating intuitive digital experiences
          </p>
        </div>
      </div>
      <div className='mt-10 lg:mt-20'>
        <marquee className="flex w-full gap-5" width="">
          <div className='flex w-full gap-10 items-center'>
            {skills.map((skill, index) => (
              <div key={index} className='bg-gray-300 flex items-center gap-2 font-bold p-2 pl-5 pr-5 rounded-full whitespace-nowrap'>
                <skill.Icon className="w-5 h-5 text-black" />
                <span className="text-black">{skill.name}</span>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </>
  )
}

export default Hero;