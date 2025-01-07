
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Dashboard from "./components/Dashboard.jsx"
import Tasks from './components/Tasks.jsx'
import Calendar from './components/calendar.jsx'
import Landing from './components/Landing.jsx'
import Payroll from './components/Payroll.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import { createContext, useEffect, useState } from 'react'
import AddEmployee from './components/AddEmployee.jsx'



export const AuthContext=createContext();

function App() {
const [isAuthenticated,setIsAuthenticated]=useState(false)
const [user,setuser]=useState({})

const login=()=>{

  localStorage.setItem("isLoggedIn",true)
  setIsAuthenticated(true)
  console.log("isauth",isAuthenticated)
}
const logout=()=>{
  setIsAuthenticated(false)
  localStorage.setItem("isLoggedIn",false)
}
const set_var=()=>{
  const user_email=localStorage.getItem("email")
  setuser((user)=>({...user,email:user_email}))
  
}

// useEffect(()=>{
//   set_var()
// },[isAuthenticated])

useEffect(()=>{
const user_state=JSON.parse(localStorage.getItem("isLoggedIn"))
setIsAuthenticated(user_state)
set_var()
},[])



  return (
   <>
<AuthContext.Provider value={{isAuthenticated,user,login,logout}}>


  <div className='flex flex-row'>
    <BrowserRouter>

      <Routes>  
        <Route exact path='/' element={<Landing />} /> 
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='dashboard' >
                <Route path='' element={<Dashboard />} />
                <Route path='tasks' element={<Tasks />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='payroll' element={<Payroll />} />  
                <Route path='add_employee' element={<AddEmployee />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </div>
  </AuthContext.Provider>
   </>
  )
}

export default App
