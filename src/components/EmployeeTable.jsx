import { Card, Typography } from "@material-tailwind/react";
import SButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AddNewModal } from "./modals/AddNewModal";
import employeesData from "./data/employees.json";


export const EmployeeTable = () => {

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [employees, setEmployees] = useState(employeesData);
  const [employeeId, setEmployeeId] = useState(null);
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

  //show each employee in table 
  const TABLE_ROWS = employees.map((employee,index) => (
    <tr key={employee.id} 
    className={index % 2 === 0 ? 'bg-gray-100' : ''}
    >
      {TABLE_HEAD.map((head) => (
        <td key={head} className="p-2 border-b border-blue-gray-100">
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
      <td className="p-2 border-b border-blue-gray-100">
       
        {/* Edit Button  */}
       
        <SButton className="bg-amber-400" 
        
        onClick={() => {
          setMode('edit');
          setEmployeeId(employee.id);
          setOpen(true);
        }}>
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

      <Card className=" w-fit border-8 border-gray-500 ">
        <table className=" w-fit min-w-max table-auto text-left rounded-2xl ">
          <thead>
            <tr >
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className=" border-b border-gray-100 bg-gray-500 text-white p-4 text-center z-10"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
              <th className="  border-b border-gray-100 bg-gray-500 text-white p-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className=" h-36 overflow-auto">{TABLE_ROWS}</tbody>
        </table>
      </Card>
    </>
  );
};
