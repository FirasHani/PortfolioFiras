import React from 'react'
import Body from '../components/Body'
import faceID from '../imgs/faceID.png'
import Project from './Projects/Project' 
import Skills from './Skills'
import Contact from './Contact'
import Title from './Title'


//
 const RightBody = () => {
  return (
    <>
     
     <section
    id="home"
  >


    <div className="  flex flex-col lgl:flex-row justify-between  ">
    <Body />
   
            <div className=' w-[400px] lgl:w-[500px] h-[680px] pt-[30px]    '>
            { <img   src={faceID} alt='my face'></img> }  
            </div>
       
   
    </div>
    <Skills/>
     <Project />
      <Contact />
     </section>
    </>
   
    
  )
}

export default RightBody