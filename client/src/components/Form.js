import React from 'react'
import faceID from '../imgs/faceID.png'
import {FaInstagram} from 'react-icons/fa'
 const Form = () => {
  return (
    <>
    <div className='   bg-bodyColor'>
    <div className="w-full lgl:w-[70%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={faceID}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Firas Hussein</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        𝙃𝙚𝙡𝙡𝙤, 𝙄'𝙢 𝙁𝙞𝙧𝙖𝙨 𝙃𝙪𝙨𝙨𝙚𝙞𝙣, 𝙖 𝙘𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙨𝙘𝙞𝙚𝙣𝙘𝙚 𝙨𝙩𝙪𝙙𝙚𝙣𝙩 𝙞𝙣 𝙢𝙮 
        4𝙩𝙝 𝙮𝙚𝙖𝙧 𝙖𝙩 𝘼𝙥𝙥𝙡𝙞𝙚𝙙 𝙎𝙘𝙞𝙚𝙣𝙘𝙚 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙐𝙣𝙞𝙫𝙚𝙧𝙨𝙞𝙩𝙮. 𝙄 𝙨𝙥𝙚𝙘𝙞𝙖𝙡𝙞𝙯𝙚 𝙞𝙣 𝙈𝙀𝙍𝙉 𝙨𝙩𝙖𝙘𝙠 
        𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩. 𝙏𝙝𝙖𝙣𝙠𝙨 𝙛𝙤𝙧 𝙨𝙩𝙤𝙥𝙥𝙞𝙣𝙜 𝙗𝙮 𝙢𝙮 𝙥𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤!

          
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+962 795067810</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">firas.dagulas@gmail.com</span>
        </p>
      </div>
    </div>
    </div>
    

     
    </>
   
  )
}
export default Form