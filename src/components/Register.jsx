import { useState } from "react";
import Hnavbar from "./Hnavbar.jsx"
import { Link, useNavigate } from "react-router-dom"
;


function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    

const handleChange=(e,fieldname)=>{
    fieldname=="email"?setEmail(e.target.value):setPassword(e.target.value)
}

    const addUser=(e,email,password)=>{
        e.preventDefault();
        localStorage.setItem(email,JSON.stringify(password));
        console.log(localStorage)
        navigate('/login')
    }
  return (
    <div className='w-full h-screen '>
        <Hnavbar/>

    <div className="h-full w-full m-0 p-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-40">
    <div className="h-2/3 w-1/4 bg-gray-100 mx-auto rounded-xl mt-8 ">
           <form className="flex flex-col items-center  text-gray-800 text-xl pt-5 w-full" onSubmit={(e)=>addUser(e,email,password)}>
               <h3 className="text-4xl font-bold font-sans mt-5">Register</h3>
               <div className="flex flex-col mt-10 w-3/4">
                   <label className="my-1 text-xl ">Email</label>
                   <input type="text" className="bg-gray-100 p-3 border-b-2"  placeholder="abc@gmail.com" value={email} onChange={(e)=>handleChange(e,"email")} required/>
               </div>
               <div className="flex flex-col mt-6 w-3/4">
                   <label  className="my-1 ">Password</label>
                   <input type="text" className="bg-gray-100 p-3 border-b-2"   placeholder="Password" value={password} onChange={(e)=>handleChange(e,"password")} required/>
               </div>
               <button className="w-4/5 py-2 my-9 mx-6   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-3xl font-bold text-white " >
                  Register
               </button>
               
               <Link to="/login">Login</Link>
               </form>
       </div>
     
      
       </div>
       </div>
  )
}

export default Register



