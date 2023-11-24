import React,{useEffect, useState} from 'react'
import Title from './Title';
import {useDispatch} from 'react-redux'
import { signin } from '../actions/auth';
import { Link, useHistory, useLocation,useNavigate } from 'react-router-dom';
import Skills from './Skills';
const  initialState = { name: '', email: '', password: '',};
const  initialState2 = {  email: '',};
const  initialState3 = {  name: '',};
const  initialState4 = {  password: '',};



const RegisterUser = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

   const [formData,setFormData] =useState(initialState)
  const[isSignup,setIsSignup]=useState(true)
  const [name, setName] = useState(initialState3);
  const [email, setEmail] = useState(initialState2);
  const [password, setPassword] = useState(initialState4)
  // const [username, setUsername] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmint=async(e)=>{
    
    e.preventDefault()
      if (name === "") {
      setErrMsg("Username is required!");
    } 
     else if (email === "") {
      setErrMsg("Please give your Email!");
    }
       else if(!user) {
      setSuccessMsg( `Thank you dear ${name.name}, Your Messages has been sent Successfully!`);
     // console.log("email"+formData.name)
   await  dispatch(signin(formData))
      window.location.reload(true)
    
      // window.location.reload(true)
      setErrMsg("");
      setName(initialState3);
      setEmail(initialState2);
      setPassword(initialState4)
      // window.location.reload(true)
     
    }
    console.log("hi")
}
const switchMode=()=>{
  setIsSignup((test)=>!test)
}
useEffect (()=>{
 // window.location.reload(true)
  if(user){
   // window.location.reload(true)
    navigate('/')
    
  }
},[])
const navigatToLogin=()=>{
  navigate('/Re')
}


const onChange =(e)=>{
  setFormData({...formData,[e.target.name]: e.target.value,})
  setName({...name,[e.target.name]: e.target.value})
  setEmail({...email,[e.target.name]: e.target.value})
  setPassword({...password,[e.target.name]: e.target.value})

  //console.log(name)
}
  return (
   
    <section
      id="contact"
      className="w-full h-[1000px] py-20 border-b-[1px] border-b-black"
    >
      {/* <div className="flex justify-center items-center text-center">
       
      </div> */}
          <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Login"
          
        />
        
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row  justify-center">
        
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmint} >
              {errMsg && ( 
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )} 
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                  name="name"
                  type="text"
                  onChange={
                    onChange
                    
                  }
                  value={name.name}
                  // handleChange={(e)=>setFormData(name)}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                 
                    
                  
                  
                    
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  // onClick={}
                  name="email"
                  onChange={
                  onChange
                }
                  value={email.email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />           
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  password
                </p>
                <input 
                name="password"
                onChange={
                onChange
              }
                  
                  type='password'
                  value={password.password}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}

                />
              </div>
       
     
              <div className="w-full">
                <button
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                 Login
                </button>
              </div>
            {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
            <button
                   onClick={navigatToLogin}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                Dont have an Account ??
                </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterUser