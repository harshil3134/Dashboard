import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function AddEmployee() {
  const [Formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "male",
    marital_status: "Single",
    hobby: [],
    file: null,
  });

  const filechange = (e) => {
    setFormData((Formdata) => ({ ...Formdata, file: e.target.files[0] }));
  };

  const submitform = (e) => {
    e.preventDefault();
   validator();
  };
  const validator = () => {
    validatonforsubmit();
  };

  const validatonforsubmit = () => {
       console.log("call performed")
    if (Formdata.name == "") {
      
      document.getElementById("namev1").style.display = "block";
    }
    if (Formdata.email == "") {
     
      document.getElementById("emailv1").style.display = "block";
    }
    if (Formdata.password == "") {
     
      document.getElementById("passwordv1").style.display = "block";
    }
    if (Formdata.hobby == "") {
      
      document.getElementById("hobbyv1").style.display = "block";
    }
    if (Formdata.dob == "") {
      
       document.getElementById("dobv1").style.display = "block";
     }
     if (Formdata.file == null) {
      
       document.getElementById("filev1").style.display = "block";
     }
     
     
  };
  const removevalidation = () => {
       console.log("print",Formdata.name)
       if (Formdata.name != "") {
         
         document.getElementById("namev1").style.display = "hidden";
       }
       if (Formdata.email != "") {
        
         document.getElementById("emailv1").style.display = "hidden";
       }
       if (Formdata.password != "") {
        
         document.getElementById("passwordv1").style.display = "hidden";
       }
       if (Formdata.hobby != "") {
         
         document.getElementById("hobbyv1").style.display = "hidden";
       }
       if (Formdata.dob != "") {
         
          document.getElementById("dobv1").style.display = "hidden";
        }
        if (Formdata.file != null) {
         
          document.getElementById("filev1").style.display = "hidden";
        }
        
        
     };

  const handleonChange = (e) => {
    const key = e.target.name;

    if (
      key == "name" ||
      key == "email" ||
      key == "password" ||
      key == "gender" ||
      key == "dob" ||
      key == "marital_status"
    ) {
      setFormData((Formdata) => ({ ...Formdata, [key]: e.target.value }));
      console.log("e.target.value printed", Formdata.key);
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
      console.log("arr outside", arr);
      return {
        ...Formdata,
        hobby: arr,
      };
    });

  };
  useEffect(() => {
    console.log(Formdata);
  }, [Formdata]);

  return (
    <div className="h-full w-full">
      <Navbar />

      <div className="w-full h-full flex flex-col pl-72 ml-8">
        <div className="w-8 h-8 ml-4 mt-2">
          <Link to="/dashboard" className="">
            <CircleArrowLeft className="h-full w-full  " />
          </Link>
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
                  onChange={(e) => handleonChange(e)}
                  placeholder="John James"
                />
                <div className="h-5 text-red-500 mt-1">
                  <h3 className="hidden" id="namev1">
                    Please Enter the Name
                  </h3>
                </div>
              </div>

              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Password</label>
                <input
                  type="password"
                  className="bg-gray-100 p-3 border-b-2"
                  name="password"
                  value={Formdata.password}
                  onChange={(e) => handleonChange(e)}
                  placeholder="password"
                />
                <div className="h-5 text-red-500 mt-1">
                  <h3 className="hidden" id="passwordv1">
                    Please Enter the Password
                  </h3>
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
                      onChange={(e) => handleonChange(e)}
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
                      onChange={(e) => handleonChange(e)}
                      className="bg-gray-100 p-2 border-b-2 "
                    />
                  </div>
                </div>
                <div className="h-5 text-red-500 mt-1"></div>
              </div>
              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Hobby</label>
                <div className="flex flex-row">
                  <div className=" w-1/2 py-2  rounded-md flex justify-center mr-3">
                    <label className="px-2 flex" htmlFor="football">
                      Football
                    </label>
                    <input
                      type="checkbox"
                      name="hobby"
                      id="football"
                      value="football"
                      className=" "
                      // checked={Formdata.hobby[0] == true}
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
                      //checked={Formdata.hobby[1] == true}
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
                      //checked={Formdata.hobby[2] == true}
                      onChange={(e) => handlecheckbox(e)}
                    />
                  </div>
                </div>
                <div className="h-5 text-red-500 ">
                  <h3 className="hidden" id="hobbyv1">
                    Please select atleast one checkbox
                  </h3>
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
                  onChange={(e) => handleonChange(e)}
                  placeholder="abc@gmail.com"
                />
                <div className="h-5 text-red-500 mt-1 ">
                  <h3 className="hidden" id="emailv1">
                    Please enter Email
                  </h3>
                </div>
              </div>

              <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">Dob</label>
                <input
                  type="date"
                  name="dob"
                  className="bg-gray-100 p-3 border-b-2"
                  value={Formdata.dob}
                  onChange={(e) => handleonChange(e)}
                />
                <div className="h-5 text-red-500 mt-1">
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
                  onChange={(e) => handleonChange(e)}
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
                  onChange={(e) => filechange(e)}
                  className="bg-gray-100 p-3 border-b-2"
                  placeholder="abc@gmail.com"
                />
                <div className="h-5 text-red-500 mt-1">
                  <h3 className="hidden" id="filev1">
                    Please upload a file
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <button
              className="bg-gray-400 w-1/4 py-2 rounded-xl "
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

export default AddEmployee;
