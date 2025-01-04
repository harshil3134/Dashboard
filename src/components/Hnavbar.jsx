import { Gauge,ListTodo,CalendarDays,CircleDollarSign,ReceiptText  } from 'lucide-react';
import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../App';

function Hnavbar() {
  const {isAuthenticated,login,logout}=useContext(AuthContext)

  return (
<nav className="bg-nav_bg w-full  h-24 pt-5 text-xl flex flex-row fixed  ">
<div className='h-14 w-20 mx-3 mb-9 ml-8 '>
    <img src={logo} className='h-full w-full ' alt='logo'></img>
</div>
    <ul className="flex flex-row h-1/2 ml-12 ">

    {!isAuthenticated?<Link to='/login' className='px-8 py-2 hover:bg-blue-800 hover:text-white'>Login</Link>:
    <li className="px-8 py-2 hover:bg-blue-800 hover:text-white  " ><Link to='/dashboard'> <Gauge className='inline h-5 mb-1 mr-2'/>  Dashboard</Link> </li> 
    }
        <li className="px-8 py-2 hover:bg-blue-800  hover:text-white"> <Link to='/dashboard/tasks'> <ListTodo className='inline h-5 mb-1 mr-2'/> Tasks</Link> </li>
        <li className="px-8 py-2 hover:bg-blue-800  hover:text-white">  <Link to='/dashboard/calendar'>  <CalendarDays className='inline h-5 mb-1 mr-2'/> Calendar</Link></li>
        <li className="px-8 py-2 hover:bg-blue-800  hover:text-white">  <Link to='/dashboard/payroll'>   <CircleDollarSign className='inline h-5 mb-1 mr-2' />Payroll</Link></li>
        <li className="px-8 py-2 hover:bg-blue-800  hover:text-white"><Link to='/dashboard/invoice'>  <ReceiptText  className='inline h-5 mb-1 mr-2'/> Invoice</Link></li>
        
    </ul>
</nav>
  )
}

export default Hnavbar
