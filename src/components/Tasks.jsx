import Navbar from "./Navbar"
import { CircleArrowLeft } from 'lucide-react';
import {Link} from "react-router-dom"

function Tasks() {
  return (
    <>
    <Navbar/>
    <div className="w-full bg-red-100">
      <div className="w-8 h-8 ml-9 mt-9">
  <Link to='/dashboard'> <CircleArrowLeft className="h-full w-full  "/>   </Link>      
      </div>
    
     
    </div>
    </>
   
  )
}

export default Tasks
