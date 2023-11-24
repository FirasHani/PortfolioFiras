import React,{useState} from 'react'
import Form from './Form';
import Title from './Title';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contact';
import faceID from '../imgs/faceID.png'
const  initialState = { name: '', email: '',subject: '',message:'',phoneNumber:''};

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formData,setFormData] =useState()
  const dispatch=useDispatch()

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsg("name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    }  else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${name.name}, Your Messages has been sent Successfully!`
      );
      dispatch(createContact(formData))  
      setErrMsg("");
      setName({name:''});
      setPhoneNumber({phoneNumber:''});
      setEmail({email:''});
      setSubject({subject:''});
      setMessage({message:''});
    }

  };
  const onChange =(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value,})
    setName({...name,[e.target.name]: e.target.value})
    setEmail({...email,[e.target.name]: e.target.value})
    setPhoneNumber({...phoneNumber,[e.target.name]: e.target.value})
    setSubject({...subject,[e.target.name]: e.target.value})
    setMessage({...message,[e.target.name]: e.target.value})
  }

  return (
    <section
    id="contact"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
       <div className="flex justify-center items-center text-center">
      <Title
        title="Send Me a Message"
        des="Contact With Me"
        
      />
    </div>
    <div className="w-full">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <Form />
        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
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
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                />
              </div>
              <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </p>
                <input
                // onClick={}
                name="phoneNumber"
                onChange={
                onChange
              }
                value={phoneNumber.phoneNumber}
                className={`${
                  errMsg === "Please give your Email!" &&
                  "outline-designColor"
                } contactInput`}
                type="number"
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
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </p>
              <input
                // onClick={}
                name="subject"
                onChange={
                onChange
              }
                value={subject.subject}
                className={`${
                  errMsg === "Please give your Email!" &&
                  "outline-designColor"
                } contactInput`}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </p>
              <textarea
                       // onClick={}
                       name="message"
                       onChange={
                       onChange
                     }
                       value={message.message}
                       className={`${
                         errMsg === "Please give your Email!" &&
                         "outline-designColor"
                       } contactInput`}
                       type="text"
              >


              </textarea>
            </div>
            <div className="w-full">
              <button
                onClick={handleSend}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Send Message
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
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact