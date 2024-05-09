import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import SButton from "./components/Button";
import { EmployeeTable } from "./components/EmployeeTable";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
const Page = () => {
  return (
    <div className=" flex flex-col h-screen p-10 ">
      <h1 className="m-5 mb-0 font-bold text-6xl text-blue-500 font-lobster">Welcome User !</h1>
    
      <EmployeeTable />
    </div>
  );
};

export default Page;
