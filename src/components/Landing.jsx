import { useState } from "react"
import Hnavbar from "./Hnavbar"
import AddEmployeeEdit from "./AddEmployeeEdit"

      


function Landing() {
  const [view,setView]=useState(false)
  return (
    <div className='w-full h-screen '>
        <Hnavbar/>
      {/* <div className="mt-40">
      <button onClick={()=>setView(true)}>View on</button>
      </div>
      
<div>
{view&&<AddEmployeeEdit/>}
</div> */}

    </div>
  )
}

export default Landing
