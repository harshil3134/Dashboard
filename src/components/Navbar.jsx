import { Gauge,ListTodo,CalendarDays,CircleDollarSign,ReceiptText  } from 'lucide-react';
import logo from "../assets/logo.jpg"
import {Link} from "react-router-dom"

function Navbar() {
  return (
<nav className="bg-nav_bg w-2/12 h-screen pt-5 text-xl  ">
<div className='h-14 w-20 mx-3 mb-9 ml-8'>
    <img src={logo} className='h-full w-full' alt='logo'></img>
</div>
    <ul className="flex flex-col h-1/2  ">
    <li className="pl-8 py-2 hover:bg-blue-800 hover:text-white  " ><Link to='/'> <Gauge className='inline h-5 mb-1 mr-2'/>  Dashboard</Link> </li>
        <li className="pl-8 py-2 hover:bg-blue-800  hover:text-white"> <Link to='/tasks'> <ListTodo className='inline h-5 mb-1 mr-2'/> Tasks</Link> </li>
        <li className="pl-8 py-2 hover:bg-blue-800  hover:text-white">  <Link to='/calendar'>  <CalendarDays className='inline h-5 mb-1 mr-2'/> Calendar</Link></li>
        <li className="pl-8 py-2 hover:bg-blue-800  hover:text-white">  <Link to='/payroll'>   <CircleDollarSign className='inline h-5 mb-1 mr-2' />Payroll</Link></li>
        <li className="pl-8 py-2 hover:bg-blue-800  hover:text-white"><Link to='/invoice'>  <ReceiptText  className='inline h-5 mb-1 mr-2'/> Invoice</Link></li>
        
    </ul>
</nav>
  )
}

export default Navbar