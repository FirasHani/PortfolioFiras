import React from 'react'
import logo from'../imgs/tawilwindimgs.png'
import { useEffect,useState  } from 'react'
import {  useLocation ,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'

import Fimg from '../imgs/Fimg.png'
import * as actionType from '../../src/constants/actionTypes';


import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../components/constants';



const  initialState = { name: '', email: '', password: '',};

  const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [showMenu, setShowMenu]=useState(false)
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    navigate('/');
  };
  useEffect(() => {
 
  }, []);

  const handleClick = () => {
    navigate('/auth');
}
const goHome = () => {
  navigate('/')
}
const CreateProject = () => {
  navigate('/CreateProject')
}
  return (
    <>
  {
    window.location.pathname ==='/auth' || window.location.pathname==='/Re' || window.location.pathname==='/CreateProject'  || window.location.pathname !==`/` ?(
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
      <img className=' float-left rounded-full w-[80px] h-[80px]'  src={Fimg} alt='my face'></img>
      </div>
      <div>
        
        <div className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">

     
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            {
            user?.name?  (
           <div className='flex flex-row gap-[30px]'> welecome:  { user.name}   </div>  
            ):(
              <p>
              
              </p>
            )
           }
            </li>


        </ul>
  
   </div>
 
       <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" onClick={goHome}> Home </button>
       
      </div>
    </div>
    ):(
      
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
      <img className=' float-left rounded-full w-[80px] h-[80px]'  src={Fimg} alt='my face'></img>
      </div>
      <div>
        
        <div className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">

     
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            {
            user?.name?  (
           <div> welecome:  { user.name}   </div>  
            ):(
              <p>
              
              </p>
            )
           }
            </li>


        </ul>
       
          {
            user?.email==='firas_1767@yahoo.com'?(
              <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              <button onClick={CreateProject}> CreateProject </button>
              </li>
          
          
          
          
                </ul>
            ):(
                <p></p>

            )
   
          } 
    
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              // key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
                         {
                user?.name ?  (
                   
                  <button onClick={logout} >Logout</button>
                  ):(
                    <button onClick={handleClick}> sign in</button>
                  )
                 
                }
        </ul>
   </div>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">

              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                {
            user?.email==='firas_1767@yahoo.com'?(
  
              <button onClick={CreateProject}> CreateProject </button>
  
            ):(
                <p> </p>

            )
   
          } 
                </li>
                <li>
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            {
            user?.name?  (
           <div> welecome:  { user.name}   </div>  
            ):(
              <p>
              
              </p>
            )
           }
            </li>
                </li>
                {
                user?.name ?  (
                   
                  <button onClick={logout} >Logout</button>
                  ):(
                    <button onClick={handleClick}> sign in</button>
                  )
                 
                }
              </ul>
              <div className="flex flex-col gap-4">

   
              </div>
              
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
                
              </span>
              
            </div>
          </div>
        )}
   
      </div>
    </div>
    )
 
    
 }
    </>
    
    
  )
}

export default NavBar
