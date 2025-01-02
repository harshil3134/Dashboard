import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { CircleArrowLeft } from 'lucide-react';

function Payroll() {
  return (
    <>
      <Navbar />

      <div>
      <div className="w-8 h-8 ml-9 mt-9">
  <Link to='/dashboard'> <CircleArrowLeft className="h-full w-full  "/>   </Link>      
      </div>
      Payroll
    </div>
    </>

  )
}

export default Payroll
