import { useState } from "react";
import "./App.css";
import { EmployeeTable } from "./components/EmployeeTable";
import { AddNewModal } from "./components/modals/AddNewModal";
import employeesData from "./components/data/employees.json";
function App() {
  const [open, setOpen] = useState(false);
const [mode,setMode]=useState('create');
  const [employees, setEmployees] = useState(employeesData);
  const [employeeId, setEmployeeId] = useState(null);
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-950">Welcome User </h1>
      <AddNewModal
        open={open}
        setOpen={setOpen}
        employees={employees}
        setEmployees={setEmployees}
        mode={mode}
        setMode={setMode}
        employeeId={employeeId}
        setEmployeeId={setEmployeeId}
      />
      <EmployeeTable
        open={open}
        setOpen={setOpen}
        employees={employees}
        setEmployees={setEmployees}
        mode={mode}
        setMode={setMode}
        employeeId={employeeId}
        setEmployeeId={setEmployeeId}
      />
    </div>
  );
}

export default App;
