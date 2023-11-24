import React from 'react'
import Title from '../Title'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjectById } from '../../actions/project'
import {showMessage} from '../../actions/message'
import Capture from '../../imgs/Capture.png'
import projectTest from '../../imgs/projectTest.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { FETCH_ID,CREATE} from '../../constants/actionTypes'
import {DeleteMessage} from '../../actions/message'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import ProjectMessage from './ProjectMessage'
import NavBar from '../NavBar'


const ProjectDetal = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const dispatch2=useDispatch()
    const projectData = useSelector(state => state.project)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    let all=[]
  

    projectData.map((e)=>{
        for(let i=0;i<e.showMessage?.length;i++){
          all.push(e.showMessage[i])
        }
     
    })
    const Delete=(id)=>{
     dispatch(DeleteMessage(id)) 
     window.location.reload(true)
    }
    const num=()=>{
      for(let i=0;i<all.length;i++){
        // console.log(i)
        return (i+1)
      }
    }
    useEffect(() => {
      dispatch(getProjectById(id)) 
      // num()
        },[0]);
    
 
  return (
    <>
    <div className='h-100% pb-[100px]'>

    
        <div className="flex justify-center items-center text-center">
       
        <Title
        title="Click TO View"
        des="My Projects"
        />
    
        
      </div>
      <img
          className="w-full h-[700px] object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={projectTest}
          alt="src"
        />
      
      <div className='w-full h-[400px] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col '>

    {
      
  projectData.map((e) => (
    <div className="w-full mt-5  gap-6">
    <div>
        <div className='text-size[100px] className=" flex justify-center items-center text-center"'>
          {e.showProject?.projectName}
        </div>
      <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
        {e.showProject?.projectDescription}
      </p>
    </div>
  </div>
  ))
}


</div>
</div>
  
    
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Text</th>
              <th scope="col" class="px-6 py-4">Delete</th>
            </tr>
          </thead>
   {     
      all.map((e) => (
        <tbody>
        <tr class="border-b dark:border-neutral-500">
          <td class="whitespace-nowrap px-6 py-4 font-medium">{num()}</td>
          <td class="whitespace-nowrap px-6 py-4">{e.user?.name}</td>
          <td class="whitespace-nowrap px-6 py-4">{ e.text}</td>
          
          {
           
            user?._id==e.user?.id ?(
          <button onClick={()=>Delete(e._id)}><td class="whitespace-nowrap px-6 py-4">delete</td></button> 
            ):(
              <div></div>
            )
            
          }
        
        </tr>
      </tbody>
      ))
    }
        </table>
      </div>
    </div>
  </div>
</div>
<ProjectMessage id={id}/>
    </>
   
  )
}

export default ProjectDetal