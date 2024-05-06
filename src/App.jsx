import { useState } from 'react'

import './App.css'
import { EmployeeTable } from './components/EmployeeTable'
import { AddNewModal } from './components/modals/AddNewModal'
import employeesData from "./components/data/employees.json"
function App() {
  const [employees,setEmployees]=useState(employeesData)

  return (
    <div >
    <h1>Welcome User </h1>
    <AddNewModal employees={employees} setEmployees={setEmployees}/>
     <EmployeeTable employees={employees}/>
    </div>
  )
}

export default App
