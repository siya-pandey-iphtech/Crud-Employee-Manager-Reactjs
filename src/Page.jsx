import "./App.css";
import { EmployeeTable } from "./components/EmployeeTable";
const Page = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className=" m-5 mb-0 font-bold text-4xl text-gray-800">Welcome User </h1>

      <EmployeeTable />
    </div>
  );
};

export default Page;
