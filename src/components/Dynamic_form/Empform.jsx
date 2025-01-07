import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import { CircleArrowLeft } from "lucide-react"
import Input from "./Input"
function Empform() {
  return (
    <div className="h-full w-full">
      <Navbar/>

      
      <div className="w-full h-full flex flex-col pl-72 ml-8">
        <div className="w-8 h-8 ml-4 mt-2">
          <Link to="/dashboard" className="">
            <CircleArrowLeft className="h-full w-full  " />
          </Link>
        </div>

        <div className="bg-gray-100 w-3/4 h-2/3 min-h-60 mx-auto my-20 rounded-xl p-6 pl-16">

    <Input label="Name" value="John " />
        </div>

      </div>
    </div>

  )
}

export default Empform
