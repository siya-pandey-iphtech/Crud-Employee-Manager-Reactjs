import "./App.css";
import { EmployeeTable } from "./components/EmployeeTable";
const Page=()=> {
  

  
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-950">Welcome User </h1>  
     
     
      <EmployeeTable  />
    </div>
  );
}

export default Page;
