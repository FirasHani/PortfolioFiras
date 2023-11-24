import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../actions/project'
import Title from './Title'

const initialState={projectName:'',projectDescription:''}
const CreateProject = () => {
    const [project,setProject]=useState(initialState)
    const dispatch=useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const handleSubmint =(e)=>{
        e.preventDefault();
        dispatch(createProject(project))
        window.location.reload(true)
     
    }
    const handleChange = (e) => setProject({ ...project,[e.target.name]:e.target.value})
  return (
    
    <>
    {
      user?.email==='firas_1767@yahoo.com' ?(
        <section
        id="contact"
        className="w-[100%] h-[1000px] py-20 border-b-[1px] border-b-black"
      >
        {/* <div className="flex justify-center items-center text-center">
         
        </div> */}
            <div className="flex justify-center items-center text-center">
          <Title
            title="Create Project"
            des="Create Project"
            
          />
          
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row  justify-center">
          
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmint} >
        
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                    project Name
                    </p>
                    <input
                     className='contactInput'
                    name="projectName"
                    type="text"
                     handleChange={handleChange}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                  project Description
                  </p>
                  <input
                  className='contactInput'
                    name="projectDescription"
                    type="text"
                    handleChange={handleChange}
                     onChange={handleChange}
                  />           
                </div>
                <div className="w-full">
                  <button
                    // onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Send Message
                  </button>
                </div>
   
              </form>
              {/* <button
                     onClick={navigatToLogin}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                  Login
                  </button> */}
            </div>
          </div>
        </div>
      </section>
      ):(
        <div>you have no access</div>
      )
  
    }
   
    </>
  )
}

export default CreateProject