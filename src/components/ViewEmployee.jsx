import { Link } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import Navbar from "./Navbar.jsx";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import AddEmployeeEdit from "./AddEmployeeEdit.jsx";

function ViewEmployee() {
  const [data, setData] = useState({});
  const [fetchData,setFetchData]=useState(false)
  const [isPopup,setIsPopup]=useState(false)
  const [EditData,setEditData]=useState({})
const [serverId,setServerId]=useState('')

  const fetchdata = () => {
    fetch("http://localhost:3000/form_data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("err msg", err);
      });
  };

  const deleteField = (id) => {
    const ifaccept=confirm("Are you sure?")
    if(ifaccept)
    {

    
    const url = `http://localhost:3000/form_data/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res))
      .then(setFetchData(true))
      .catch((err) => console.log(err));
    }
  };

  const editField=(d,server_id)=>{
    console.log("edit data",d,"serverid",server_id)
    setEditData(d)
    setServerId(server_id)
setIsPopup(true);

   
  }

  useEffect(() => {
    fetchdata();
    setFetchData(false)
  }, [fetchData]);
  return (
    <div className="h-full w-full ">
      <div>
        <Navbar />
      </div>

      <div className="w-full h-full pl-72 ml-8 ">
        <div className="w-8 h-8 ml-4 mt-2">
          <Link to="/dashboard" className="">
            <CircleArrowLeft className="h-full w-full" />
          </Link>
        </div>
        <div className="bg-gray-100 h-full w-4/5 ml-16  p-11 my-20 rounded-xl mr-20 ">
        {isPopup&&<AddEmployeeEdit  data={EditData} serverId={serverId}  setIsPopup={setIsPopup}/>}
          <table className="w-full border-e-red-500 border-collapse mr-20 ">
            <tbody>
              <tr className="bg-gray-100 text-gray-700 border-b-2 border-gray-400 text-xl">
                <th className="py-2 border-b border-gray-400">Id</th>
                <th className="py-2 border-b border-gray-400">Name</th>
                <th className="py-2 border-b border-gray-400">Email</th>
                <th className="py-2 border-b border-gray-400">Password</th>
                <th className="py-2 border-b border-gray-400">Dob</th>
                <th className="py-2 border-b border-gray-400">Gender</th>
                <th className="py-2 border-b border-gray-400">
                  Marital_status
                </th>
                <th className="py-2 border-b border-gray-400">Hobby</th>
                <th className="py-2 border-b border-gray-400">Actions</th>
              </tr>
              {data
                ? Object.values(data).map((items, index) => {
                   
                    return (
                      <tr className="border-b-2 border-gray-400 " key={index}>
                        {Object.keys(items.data)
                          .filter((val) => val != "file")
                          .map((val, index) => {
                            return val == "hobby" ? (
                              <td className="py-3 text-center" key={index}>
                                {items.data.hobby.map((hobbyele, index) => {
                                  return (
                                    <span
                                      className="rounded-2xl p-2 bg-blue-200 mx-1 font-semibold"
                                      key={index}
                                    >
                                      {hobbyele}
                                    </span>
                                  );
                                })}
                              </td>
                            ) : (
                              <td className="py-3 text-center" key={index}>
                                {items.data[val]}
                              </td>
                            );
                          })}
                        <td className="py-3 text-center">
                          <Pencil key={index + 10} onClick={()=>editField(items.data,items.id)} className="inline mx-2 " />
                         
                          <Trash2
                            key={index}
                            value={index}
                            className="inline mx-2"
                            onClick={() => deleteField(items.id)}
                          />
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
