import ProjectCard from './ProjectCard';
import Title from '../Title';
import Capture from '../../imgs/Capture.png'
import projectTest from '../../imgs/projectTest.png'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getProject } from '../../actions/project';
import { useNavigate } from 'react-router-dom';


const Projects = () =>  {
  const [id,setId]=useState('')
  const navigate=useNavigate()
    const dispatch=useDispatch()
 
   const  data = useSelector((state) => state.project)
  
    const nav= (id) => {
    navigate(`/project/${id}`)
  }

  useEffect(() => {
   dispatch(getProject())
  },[]);



  return (
  
    <section
      id="projects"
      className=" py-20 "
    >
      <div className="flex justify-center items-center text-center">
        <Title
        title="Click TO View"
        des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      {
  data.map((e) => (
    <div key={e._id}>

          <ProjectCard
           title={e.projectName}
           des={e.projectDescription}
           src={projectTest} 
           ID={e._id}
         />

   
     
    </div>
  ))
}
      </div>
    </section>
  );
}

export default Projects