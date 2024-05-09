import { Card, Typography } from "@material-tailwind/react";
import SButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { AddNewModal } from "./modals/AddNewModal";
import employeesData from "./data/employees.json";
import Searchbar from "./Searchbar";

export const EmployeeTable = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [employees, setEmployees] = useState(employeesData);
  const [employeeId, setEmployeeId] = useState(null);
  const [searchQuery,setSearchQuery]=useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);

  // console.log(employeeId)

  
  const TABLE_HEAD = [
    "profile_photo",
    "id",
    "name",
    "email",
    "dob",
    "city",
    "state",
    "phone",
    "address",
  ];
const handleSearchChange=(e)=>{
  setSearchQuery(e.target.value)
}

useEffect(() => {
  setFilteredEmployees(
    employees.filter((data) => TABLE_HEAD.some((param) => data[param].toString().toLowerCase().includes(searchQuery)))
  );
}, [searchQuery, employees]);
  //show each employee in table
  const TABLE_ROWS = filteredEmployees.map((employee, index) => (
    <tr key={employee.id} className={index % 2 === 0 ? " bg-blue-50" : ""}>
      {TABLE_HEAD.map((head) => (
        <td
          key={head}
          className="p-2 border-b border-blue-gray-100 text-left  text-gray-600 text-nowrap "
        >
          {head === "profile_photo" ? (
            <img
              className="rounded-xl w-20 h-24"
              src={employee[head]}
              alt={employee.name}
            />
          ) : (
            employee[head]
          )}
        </td>
      ))}
      <td className=" py-5 flex items-center justify-center border-b  border-blue-gray-100 ">
        {/* Edit Button  */}

        <SButton
          className="bg-amber-400 "
          onClick={() => {
            setMode("edit");
            setEmployeeId(employee.id);
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </SButton>

        {/* View Button  */}

        <SButton
          className="bg-blue-400"
          onClick={() => {
            setMode("view");
            setEmployeeId(employee.id);
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faEye} />
        </SButton>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="flex text-nowrap justify-between items-center">
        <SButton
          className=""
          onClick={() => {
            setMode("create");
            setOpen(true);
          }}
        >
          Create <FontAwesomeIcon icon={faAdd} />
        </SButton>

        <Searchbar handleSearch={handleSearchChange}/>
      </div>

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

      <Card 
      
            className=" w-full  shadow-2xl  border-8  overflow-auto border-blue-400 ">
        <table className=" table-auto text-left rounded-2xl">
          <thead className="sticky top-0">
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className=" border-b border-gray-100 bg-blue-400 text-white   p-4 text-left z-10"
                >
                  <Typography
                    variant="large"
                    className="font-bold  text-lg  leading-none  "
                  >
                    {head}
                  </Typography>
                </th>
              ))}
              <th className="  border-b border-gray-100 bg-blue-400 text-white p-4 text-center">
                <Typography
                  variant="large"
                  className="font-bold  text-lg  leading-none  "
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className=" h-36 overflow-scroll">{TABLE_ROWS}</tbody>
        </table>
      </Card>
    </>
  );
};
