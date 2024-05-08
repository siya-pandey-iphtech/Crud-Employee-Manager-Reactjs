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
console.log(employeeId)
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

  const toggleEditMode = (id) => {
    setOpen(true);
  };
  const handleExitEditMode = () => {
    setOpen(false);
  };
  
  const TABLE_ROWS = employees.map((employee) => (
    <tr key={employee.id}>
      {TABLE_HEAD.map((head) => (
        <td key={head} className="p-4 border-b border-blue-gray-100">
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
      <td className="p-4 border-b border-blue-gray-100">
        {/* Edit Button  */}
        <SButton className="bg-amber-400" onClick={() => {}}>
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
  // console.log("HEADING", TABLE_HEAD);
  // console.log("ROWS", TABLE_ROWS);
  return (
    <>
      <SButton
        onClick={() => {
          setMode("create");
          setOpen(true);
        }}
      >
        {" "}
        Create <FontAwesomeIcon icon={faAdd} />
      </SButton>

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

      <Card className="h-full w-fit overflow-scroll">
        <table className="w-fit min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
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
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
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
          <tbody>{TABLE_ROWS}</tbody>
        </table>
      </Card>
    </>
  );
};
