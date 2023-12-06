import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createMessage} from '../../actions/message'
const  initialState = { text:''}

const ProjectMessage = ({id}) => {
    const [messageForm,setMessageForm] =useState(initialState)
    const dispatch=useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const handleChange=(e)=>{
        setMessageForm({...messageForm,[e.target.name]: e.target.value,})
    }
    const handleSubmint=(e)=>{
         e.preventDefault()
        dispatch(createMessage(messageForm,id))
         console.log("hi")
       //  window.location.reload(true)
    }
  return (
    <>
        
  
            {
              user ? (
                <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmint} >
         
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Enter A Message 
                    </p>
                    <input
                    name="text"
                    type="text"
                    onChange={
                      handleChange
                      
                    }
                    className='
                       "Username is required!" 
                      "outline-designColor"
                    contactInput'
    
                    />
                  </div>
                </div>
                <button
                    // onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Send Message
                  </button>
              </form>
              ):(
                <p>NO USER </p>
              )

            }


    
    </>
    
  )
}

export default ProjectMessage