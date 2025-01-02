import User from "../components/User.jsx"
import Liveclock from "./Liveclock.jsx"
import Search from "./Search.jsx"
function Dashboard() {
  return (
    <div className="w-full py-5 flex flex-row gap-8">
        <div className="w-1/3 pl-5 flex flex-col items-center">
            <h2 className="text-5xl text-blue-800 font-bold p-4">Dashboard</h2>
            <Liveclock/>
        </div>
        <div className="w-full flex justify-center ">
           <Search/>
        </div>
     <div className="w-full pl-10  flex justify-center">
            <User />
     </div>
      
    </div>
  )
}

export default Dashboard
 