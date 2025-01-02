
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Dashboard from "./components/Dashboard.jsx"
import Tasks from './components/Tasks.jsx'
import Calendar from './components/calendar.jsx'
import Landing from './components/Landing.jsx'
import Payroll from './components/Payroll.jsx'

function App() {


  return (
   <>

  <div className='flex flex-row'>
    <BrowserRouter>

      <Routes>  
        <Route exact path='/' element={<Landing />} /> 
        <Route path='dashboard' >
                <Route path='' element={<Dashboard />} />
                <Route path='tasks' element={<Tasks />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='payroll' element={<Payroll />} />   
        </Route>
        
      </Routes>
    </BrowserRouter>
  </div>
 
   </>
  )
}

export default App
