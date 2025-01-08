import { CircleArrowLeft } from "lucide-react";

import { useEffect, useState } from "react";
import Err_display from "./validation/Err_display.jsx";
import axios from "axios";

function AddEmployeeEdit({data,serverId,setIsPopup}) {
  const [Formdata, setFormData] = useState({
    id:0,
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    marital_status: "Single",
    hobby: [],
    file: null,
  });

  const [err, setErr] = useState({});
const [doSubmit,setDoSubmit]=useState(false)
const [idcount,setIdCount]=useState(0)


  const submitform =async(e) => {
    e.preventDefault();
    setErr({});

 validatonforsubmit();

    setDoSubmit(true);
  };

  const sendreq=async()=>{
  const id=serverId
 console.log("form submitted")
 const url = `http://localhost:3000/form_data/${id}`;
 fetch(url, {
   method: "PUT",
   headers: {
     "Content-Type": "application/json",
   },
   body:JSON.stringify({id:{id},data:Formdata})
 })
   .then((res) => {
     return res.json();
   })
   .then((res) => console.log(res))
   
   .catch((err) => console.log(err));
    
  }

  const validatonforsubmit = () => {
   
    if (Formdata.name == "") {
      setErr((err) => ({ ...err, name: "Please Enter the Name" }));
    }
    if (Formdata.email == "") {
      setErr((err) => ({ ...err, email: "Please Enter the Email" }));
    }
    if (Formdata.password == "") {
      setErr((err) => ({ ...err, password: "Please Enter the Password" }));
    }
    if (Formdata.hobby.length == 0) {
      setErr((err) => ({ ...err, hobby: "Please Select a Hobby" }));
    }
    if (Formdata.dob == "") {
      setErr((err) => ({ ...err, dob: "Please Enter a Date" }));
    }
    if (Formdata.file == null) {
      setErr((err) => ({ ...err, file: "Please Upload a File" }));
    }
    if (Formdata.gender == "") {
      setErr((err) => ({ ...err, gender: "Please Select a Gender" }));
    }
   
  };

  const handlecheckbox = (e) => {
    // onChange={(e) => setFormData((Formdata)=>({...Formdata,hobby:([...Formdata.hobby,e.target.value])}))}
    let ele = e.target.value;

    setFormData((Formdata) => {
      let arr = Formdata.hobby;
      if (arr.includes(ele)) {
        arr = arr.filter((items) => items != ele);
      } else {
        arr = [...arr, ele];
      }
    
      return {
        ...Formdata,
        hobby: arr,
      };
    });
  };

  const namevalidation = (value, name) => {

    //returns true if character is between 3 and 20 characters
    const regex1 = /^[a-zA-Z\s][a-zA-Z0-9!@#$%^&*(),.?":{}|<>+-=_\s]{3,20}$/;


    //return true if character in the field
    const regex = /[^a-z\sA-z]/;

    const iscorrlen = regex1.test(value);
    const ischar = regex.test(value);
  
    if (!iscorrlen) {
      setErr((err) => ({
        ...err,
        [name]: "Name length should be between 4 and 21 characters",
      }));
   
    } else if (ischar) {
      setErr((err) => ({ ...err, [name]: "Name should have only characters" }));
    
    } else if (iscorrlen && !ischar) {
      setErr((err) => delete err.name);
    }
  };

  const passwordvalidation = (value, key) => {

    const regex1 = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*(),.?":{}|<>+-=_]{7,23}$/;
    const regex2 = /[a-zA-Z]/;
    const regex3 = /[!@#$%^&*(),.?:{}|<>+-=_]/;
    const regex4 = /[0-9]/;

    const islen = regex1.test(value);
    const ischar = regex2.test(value);
    const isspecialchar = regex3.test(value);
    const isnum = regex4.test(value);

    if (!islen) {
      setErr((err) => ({
        ...err,
        [key]: "Password length should be between 8 to 24 characters",
      }));
    } else if (!ischar) {
      setErr((err) => ({
        ...err,
        [key]: "Password should contain atleast one characters",
      }));
    } else if (!isspecialchar) {
      setErr((err) => ({
        ...err,
        [key]: "Password should contain atleast one special character",
      }));
    } else if (!isnum) {
      setErr((err) => ({
        ...err,
        [key]: "Password should contain atleast one number",
      }));
    }
    if (islen && ischar && isspecialchar && isnum) {
      setErr((err) => delete err.key);
    }
  };

  const emailvalidaion = (value, key) => {
  
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = regex.test(value);
    if (!isvalid) {
      setErr((err) => ({ ...err, [key]: "enter a valid email" }));
    }
    if (isvalid) {
      setErr((err) => delete err.key);
    }
  };

  useEffect(() => {
   
    if (Formdata?.name) {
      namevalidation(Formdata.name, "name");
    } 
     if (Formdata?.email) {
      emailvalidaion(Formdata.email, "email");
    }
    if (Formdata?.password) {
      passwordvalidation(Formdata.password, "password");
    } 
    console.log("form",Formdata)
   
  }, [Formdata]);

useEffect(()=>{
Object.keys(data).map((item)=>{

  if(item=="hobby")
  {
    const arr=data.hobby.map((ele)=>ele)
setFormData((Formdata)=>({...Formdata,hobby:arr}))
  }
  else{
  setFormData((Formdata)=>({...Formdata,[item]:data[item]}))
  }
})
},[])

useEffect(()=>{
if(doSubmit)
  {
    if(Object.keys(err).length==0)
    {
      sendreq()
    }
    setDoSubmit(false)
  }
},[err])

  return (
    <div className="fixed inset-0  backdrop-blur-sm h-full">
   

      <div className="w-full h-full flex flex-col pl-72 ml-8">
        <div className="w-8 h-8 ml-4 mt-2">
      
            <CircleArrowLeft className="h-full w-full  "  onClick={()=>setIsPopup(false)}/>

        </div>
        <form
          className="bg-gray-100 w-1/2 h-2/3 min-h-60 mx-auto my-20 rounded-xl p-6 pl-16"
          onSubmit={submitform}
          
        >
          <h3 className="text-3xl font-semibold font-sans mt-5">
            Add Employee
          </h3>
          <div className="flex flex-row mt-6">
            <div className="flex flex-col  gap-3 w-1/2  ">
              <div className="flex flex-col w-3/4  ">
                <label className="my-1 text-xl ">Name</label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-100 p-3 border-b-2"
                  value={Formdata.name}
                  onChange={(e) =>
                    setFormData({ ...Formdata, name: e.target.value })
                  }
                  // onChange={(e) => {handleonChange(e); namevalidation(e);}}
                  placeholder="John James"
                />
                <div className="h-5 text-red-500 mt-1 leading-tight">
                  <Err_display errobj={err} errkey="name" />
                </div>
              </div>

              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Password</label>
                <input
                  type="password"
                  className="bg-gray-100 p-3 border-b-2"
                  name="password"
                  value={Formdata.password}
                  onChange={(e) =>
                    setFormData({ ...Formdata, password: e.target.value })
                  }
                  placeholder="password"
                />
                <div className="h-5 text-red-500 mt-1 leading-tight">
                  <Err_display errobj={err} errkey="password" />
                </div>
              </div>
              <div className="flex flex-col w-3/4 ">
                <label className="my-1 text-xl ">Gender</label>
                <div className="flex flex-row pt-2 b-3">
                  <div className="border-2 w-1/2 py-2  rounded-md mr-2 flex justify-center">
                    <label htmlFor="male" className="px-3 flex">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={Formdata.gender === "male"}
                      onChange={(e) =>
                        setFormData({ ...Formdata, gender: e.target.value })
                      }
                      className="bg-gray-100 p-2 border-b-2 default:text-blue-500 "
                    />
                  </div>

                  <div className="border-2  w-1/2 py-2  rounded-md flex justify-center ">
                    <label className="px-3 flex" htmlFor="female">
                      Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={Formdata.gender === "female"}
                      onChange={(e) =>
                        setFormData({ ...Formdata, gender: e.target.value })
                      }
                      className="bg-gray-100 p-2 border-b-2 "
                    />
                  </div>
                </div>
                <div className="h-5 text-red-500 mt-1 ">
                  <Err_display errobj={err} errkey="gender" />
                </div>
              </div>
              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Hobby</label>
                <div className="flex flex-row">
                  <div className=" w-1/2 py-2  rounded-md flex justify-center mr-3">
                    <label className="px-2 flex" htmlFor="Football">
                      Football
                    </label>
                    <input
                      type="checkbox"
                      name="hobby"
                      id="Football"
                      value="Football"
                      className=" "
                      checked={Formdata.hobby.includes('Football')}
                      onChange={(e) => handlecheckbox(e)}
                    />
                  </div>

                  <div className=" w-1/2 py-2  rounded-md flex justify-center mr-3 ">
                    <label className="px-2 flex" htmlFor="Reading">
                      Reading
                    </label>
                    <input
                      type="checkbox"
                      name="hobby"
                      id="Reading"
                      value="Reading"
                      className=" "
                      checked={Formdata.hobby.includes('Reading')}
                      onChange={(e) => handlecheckbox(e)}
                    />
                  </div>
                  <div className=" w-1/2 py-2  rounded-md flex justify-center ">
                    <label className="px-2 flex" htmlFor="Gamming">
                      Gamming
                    </label>
                    <input
                      type="checkbox"
                      name="hobby"
                      id="Gamming"
                      value="Gamming"
                      className=" "
                      checked={Formdata.hobby.includes('Gamming')}
                      onChange={(e) => handlecheckbox(e)}
                    />
                  </div>
                </div>
                <div className="h-5 text-red-500 ">
                  <Err_display errobj={err} errkey="hobby" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-1/2">
              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Email</label>
                <input
                  type="text"
                  className="bg-gray-100 p-3 border-b-2"
                  name="email"
                  value={Formdata.email}
                  onChange={(e) =>
                    setFormData({ ...Formdata, email: e.target.value })
                  }
                  placeholder="abc@gmail.com"
                />
                <div className="h-5 text-red-500 mt-1 ">
                  <Err_display errobj={err} errkey="email" />
                </div>
              </div>

              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Dob</label>
                <input
                  type="date"
                  name="dob"
                  className="bg-gray-100 p-3 border-b-2"
                  value={Formdata.dob}
                  onChange={(e) =>
                    setFormData({ ...Formdata, dob: e.target.value })
                  }
                />
                <div className="h-5 text-red-500 mt-1">
                  <Err_display errobj={err} errkey="dob" />
                  <h3 className="hidden" id="dobv1">
                    Please Select a date
                  </h3>
                </div>
              </div>
              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Marital Status</label>

                <select
                  id="marital_status"
                  name="marital_status"
                  value={Formdata.marital_status}
                  onChange={(e) =>
                    setFormData({ ...Formdata, marital_status: e.target.value })
                  }
                  type="text"
                  className="bg-gray-100 p-3 border-b-2"
                  placeholder="abc@gmail.com"
                >
                  <option key="" value="Single">
                    Single
                  </option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                </select>
                <div className="h-5 text-red-500 mt-1"></div>
              </div>
              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Profile picture</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setFormData((Formdata) => ({
                      ...Formdata,
                      file: e.target.files[0],
                    }))
                  }
                  className="bg-gray-100 p-3 border-b-2"
                  placeholder="abc@gmail.com"
                />
                <div className="h-5 text-red-500 mt-1">
                  <Err_display errobj={err} errkey="file" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <button
              className="bg-gray-400 w-1/4 py-2 mb-4 rounded-xl "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeEdit;
