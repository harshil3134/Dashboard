import { useEffect,useState } from "react";

function Liveclock() {
    const [time,settime]=useState(new Date());

    useEffect(()=>{
const intervalId=setInterval(()=>{
    settime(new Date());
},1000);

return()=>clearInterval(intervalId);

    },[]);

    const options = {
        
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    const timeString=time.toLocaleTimeString();
    const dateString=time.toLocaleDateString(undefined,options);
  return (
    <div className="flex flex-row mx-6 font-medium font-serif text-blue-800">
       
        <div className="pr-6">
            <span>{timeString}</span>
        </div>
        <div>
            <span>{dateString}</span>
        </div>
    </div>
  )
}

export default Liveclock
