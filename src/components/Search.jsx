import { useState } from "react"

function Search() {
    const [svalue,setsvalue]=useState("")

    const handleSearch=(e)=>{
        setsvalue(e.target.value);
        console.log("fun called")
    }
  return (
    <form className="h-full w-full mt-14 ml-16 ">
      <input  className="border-2 w-full pl-3 py-2 rounded-md" type="text" value={svalue} placeholder="Search" onChange={handleSearch}/>
    </form>
  )
}
export default Search
