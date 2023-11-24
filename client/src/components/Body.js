import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Skills from './Skills'
import {FaInstagram} from 'react-icons/fa'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const Body = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      }); 
    

  return (

     
    <div className='w-[600px] pr-20  border-l-sky-50 bg-bodyColor '>
       
        <div className=' flex flex-col gap-[10px] pl-[50px] text-[30px] pt-[30px]'>
              <h1 className='text-[40px] text-blue-200 '> my name is Firas Hussein </h1> 
                <div className= 'text-[30px] text-slate-500 felx flex gap-[20px]'>
                <h1> Iam  </h1> 
                <div className='text-green flex'>
                  {text}
            </div>
            <div className='border-b-green-400'> </div>
        </div>
        <div className=' text-blue 	text-[30px]'>
        𝙃𝙚𝙡𝙡𝙤, 𝙄'𝙢 𝙁𝙞𝙧𝙖𝙨 𝙃𝙪𝙨𝙨𝙚𝙞𝙣, 𝙖 𝙘𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙨𝙘𝙞𝙚𝙣𝙘𝙚 𝙨𝙩𝙪𝙙𝙚𝙣𝙩 𝙞𝙣 𝙢𝙮 4𝙩𝙝 𝙮𝙚𝙖𝙧 𝙖𝙩 𝘼𝙥𝙥𝙡𝙞𝙚𝙙 𝙎𝙘𝙞𝙚𝙣𝙘𝙚 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙐𝙣𝙞𝙫𝙚𝙧𝙨𝙞𝙩𝙮. 𝙄 𝙨𝙥𝙚𝙘𝙞𝙖𝙡𝙞𝙯𝙚 𝙞𝙣 𝙈𝙀𝙍𝙉 𝙨𝙩𝙖𝙘𝙠 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩. 𝙏𝙝𝙖𝙣𝙠𝙨 𝙛𝙤𝙧 𝙨𝙩𝙤𝙥𝙥𝙞𝙣𝙜 𝙗𝙮 𝙢𝙮 𝙥𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤!
         
        

        </div>
        
       
              <div className='text-[30px] text-stone-100 gap-[25px]	pt-[10px]'>
              Find Me 
              </div>
        </div>
        
        <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div className='flex flex-row gap-[20px]  pt-[40px]  '>
        <div className='bannerIcon'>
       
       <a href='https://www.linkedin.com/in/firas-hussein-621b00194/'> <IoLogoLinkedin /></a>
        </div>
        <div className='bannerIcon'>
       
        <a href='https://github.com/FirasHani'> <FaGithub /></a>
        </div>
        <div className='bannerIcon'>
        <FaInstagram />
        </div>
        </div>

        </div>
    
         
        
        </div>

      
  )
}

export default Body