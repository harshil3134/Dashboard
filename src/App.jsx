
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from "./components/Dashboard.jsx"
import Tasks from './components/Tasks.jsx'
import Calendar from './components/calendar.jsx'

function App() {


  return (
   <>

  <div className='flex flex-row'>
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/payroll' element={<Tasks />} />       
      </Routes>
    </BrowserRouter>
  </div>
 
   </>
  )
}

export default App
