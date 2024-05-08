import { useState } from "react";
import "./App.css";
import { EmployeeTable } from "./components/EmployeeTable";
import { AddNewModal } from "./components/modals/AddNewModal";
import employeesData from "./components/data/employees.json";
function App() {
  const [open, setOpen] = useState(false);

  const [employees, setEmployees] = useState(employeesData);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewMode, setViewMode] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-950">Welcome User </h1>
      <AddNewModal
        open={open}
        setOpen={setOpen}
        employees={employees}
        setEmployees={setEmployees}
        editMode={editMode}
        setEditMode={setEditMode}
        editingId={editingId}
        setEditingId={setEditingId}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <EmployeeTable
        open={open}
        setOpen={setOpen}
        employees={employees}
        setEmployees={setEmployees}
        editMode={editMode}
        setEditMode={setEditMode}
        editingId={editingId}
        setEditingId={setEditingId}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
    </div>
  );
}

export default App;
