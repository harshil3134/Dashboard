

function Register() {
  return (
    <div className="h-full w-full m-0 p-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-36">
    <div className="h-2/3 w-1/4 bg-gray-100 mx-auto rounded-xl mt-8 ">
           <form className="flex flex-col items-center  text-gray-800 text-xl pt-5 w-full">
               <h3 className="text-4xl font-bold font-sans mt-5">Register</h3>
               <div className="flex flex-col mt-10 w-3/4">
                   <label className="my-1 text-xl ">Email</label>
                   <input type="text" className="bg-gray-100 p-3 border-b-2"  placeholder="abc@gmail.com"/>
               </div>
               <div className="flex flex-col mt-6 w-3/4">
                   <label  className="my-1 ">Password</label>
                   <input type="text" className="bg-gray-100 p-3 border-b-2"   placeholder="Password"/>
               </div>
               <button className="w-4/5 py-2 my-9 mx-6   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-3xl font-bold text-white " >
                  Register
               </button>
               
               <button>Login</button>
               </form>
       </div>
     
      
       </div>
  )
}

export default Register



