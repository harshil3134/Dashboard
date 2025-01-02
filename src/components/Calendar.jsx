import Navbar from "./Navbar"
import { CircleArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";

function Calendar() {
  return (
    <>
    <Navbar/>
    <div>
    <div className="w-8 h-8 ml-9 mt-9">
  <Link to='/dashboard'> <CircleArrowLeft className="h-full w-full  "/>   </Link>      
      </div>
      Calendar
    </div>
    </>
    
  )
}

export default Calendar
