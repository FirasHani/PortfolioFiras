import NavBar from './components/NavBar';
import RightBody from './components/RightBody';
// import Contact from './components/Contact';
// import Project from './components/Projects/Project';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from "react-router-dom";
import RegisterUser from './components/RegisterUser';  
import RegisterUserFirst from './components/RegisterUserFirst';
import CreateProject from './components/CreateProject';
import ProjectDetal from './components/ProjectDetales/ProjectDetal';



function App() {
  const navigate = useNavigate()
  const goToAuth = () => {
    navigate('/auth');
  };
  return (
   <> 
 
 <div className='w-full h-auto bg-bodyColor text-lightText px-4'> 
     <NavBar />
    <div className='w-full lgl:w-[2000px] max-w-screen-xl mx-auto overflow-hidden '>
    
    

     <Routes>
         <Route exact path="/" element={<RightBody/>} />
         <Route exact path='/auth' element={<RegisterUser/> } />
         <Route exact path='/Re' element={<RegisterUserFirst/> } />
         <Route exact path='/CreateProject' element={<CreateProject/>} />
         <Route exact path='/project/:id' element={<ProjectDetal/>} />
     </Routes>
    
 
    
    
   

      
      </div>
    
      </div>
   
 
   </>
  )
}
export default App