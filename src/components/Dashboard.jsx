import User from "../components/User.jsx"
import Liveclock from "./Liveclock.jsx"
import Search from "./Search.jsx"
import Navbar from "./Navbar.jsx"
import { ArrowLeftToLine,ArrowRightToLine } from 'lucide-react';
import { Bar } from "react-chartjs-2";
import {Chart as ChartJs} from 'chart.js/auto';

function Dashboard() {
  return (<>
      <Navbar className="h-full" />
      
    <div className="w-full h-full flex flex-col pl-72 ml-6">

   
          <div className="w-full py-5 flex flex-row gap-8">
              <div className="w-1/3 pl-5 pt-4 flex flex-col items-center">
                  <h2 className="text-5xl text-blue-800 font-bold font-serif p-4">Dashboard</h2>
                  <Liveclock/>
              </div>
              <div className="w-full flex justify-center ">
                <Search/>
              </div>
               <div className="w-full pl-10  flex justify-center">
                  <User />
               </div>
            
          </div>

          <div className="flex ">
              <div className="w-3/5 ml-5">
                 <div className="p-4 m-4  bg-gray-100 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-800">Good to see you, Annie 👋</h4>
                    <h4 className="text-lg text-gray-600">You came 15 minutes early today</h4>
                  </div>

              </div>

              <div className="w-2/5 flex flex-row  justify-center mr-5 items-center ">
                  <div className="flex  w-1/4 gap-2">
                          <div className="max-h-14 w-9 ">
                          <ArrowLeftToLine className="text-green-500 h-full w-full bg-green-200 p-1"/>
                          </div>
                      
                          <div className="font-serif pl-2">
                            <h4 className="font-semibold">7:15 AM</h4>  
                            <h4>Punch in</h4>
                          </div>
                 
                  </div>
                  <div className="flex w-1/4 flex-row gap-2">
                          <div className="max-h-14 w-9">
                          <ArrowRightToLine className="text-red-500 h-full w-full bg-red-200 p-1"/>
                          </div>
                          
                          <div className=" font-serif pl-2">
                            <h4 className="font-semibold">4:50 AM</h4>
                            <h4>Punch Out</h4>
                          </div>
                 
                  </div>
              </div>
          </div>

          <div className="flex flex-row mx-4 my-8">
              <div className="border-r-2 border-gray-300 w-1/6 flex flex-col  items-center  ">
                <div >
                    <h3 className="font-semibold text-xl text-gray-600">Working days </h3>
                    <h4 className="font-normal text-3xl  text-blue-800 mt-1 " >34</h4>
                </div>
              
              </div>

              <div className="border-r-2 border-gray-300 w-1/6 flex flex-col items-center ">
                <div>
                  <h3  className="font-semibold text-xl text-gray-600">Incomplete </h3>
                  <h4 className="font-normal text-3xl   text-blue-800 mt-1">20</h4>
                  </div>
              </div>

              <div className="border-r-2 border-gray-300 w-1/6 flex flex-col items-center ">
                <div>
                  <h3 className="font-semibold text-xl text-gray-600">Absent </h3>
                  <h4 className="font-normal text-3xl   text-blue-800 mt-1">14</h4>
                </div>
              </div>

              
              <div className="border-r-2 border-gray-300 w-1/6 flex flex-col items-center ">
                <div>
                  <h3 className="font-semibold text-xl text-gray-600">No Attendance </h3>
                  <h4 className="font-normal text-3xl   text-blue-800 mt-1">6</h4>
                  </div>
              </div>

              
              <div className="border-r-2 border-gray-300 w-1/6 flex flex-col items-center ">
                  <div>
                  <h3 className="font-semibold text-xl text-gray-600">Days off </h3>
                  <h4 className="font-normal text-3xl   text-blue-800 mt-1">12</h4>
                  </div>
              
              </div>

              <div className=" w-1/6 flex flex-col items-center ">
                  <div>
                  <h3 className="font-semibold text-xl text-gray-600">Unscheduled</h3>
                  <h4 className="font-normal text-3xl   text-blue-800 mt-1">15</h4>
                  </div>
            
              </div>
              
          </div>
       
      
          <div className="flex flex-row mx-8 my-9 items-start">
                <div className="border-r-2 border-gray-300 w-1/3 flex flex-col pl-12  ">
                  <div>
                      <h3 className="font-semibold text-xl text-gray-600">Your balance </h3>
                      <h4 className="font-normal text-2xl  text-blue-800  mt-1" >21 Days</h4>
                  </div>
                
                </div>

                <div className="border-r-2 border-gray-300 w-1/3 flex flex-col  pl-12 ">
                  <div>
                      <h3 className="font-semibold text-xl text-gray-600">Available to use </h3>
                      <h4 className="font-normal text-2xl  text-blue-800 mt-1 " >10 Days</h4>
                  </div>
                
                </div>

                <div className=" w-1/3 flex flex-col  pl-12 ">
                  <div>
                      <h3 className="font-semibold text-xl text-gray-600">Used </h3>
                      <h4 className="font-normal text-2xl  text-blue-800 mt-1" >1 Days</h4>
                  </div>
                
                </div>

           </div>

         <div className="flex flex-row mx-8 my-9">
          <div className="w-2/5 h-48">
          <Bar 
            data={{
              labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
              datasets:[
              {
                label:"Tasks Completed",
                data:[12,19,3,5,2,3,4],
                borderWidth: 1
              }
              ],
            }
            }/>
          </div>
        

           
          </div> 

    </div>
    </>
  )
}

export default Dashboard
 