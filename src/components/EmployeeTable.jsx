import { Card, Typography } from "@material-tailwind/react";
import SButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const EmployeeTable = ({ open, setOpen, employees , setEmployees, editMode,setEditMode,editingId,setEditingId ,viewMode,setViewMode }) => {

  
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
   setEditMode(!editMode)
    setEditingId(id);
    setOpen(true);
  };
  const handleExitEditMode = () => {
    setEditMode(!editMode);
    setEditingId(null);
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
        <SButton
          className="bg-amber-400"
          onClick={() => {
            toggleEditMode(employee.id);
            setEditMode(true);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </SButton>
        <SButton
          className="bg-blue-400"
          onClick={() => {
            setEditMode(false);
           setViewMode(true);
           setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faEye} />
        </SButton>
      </td>
    </tr>
  ));
  console.log("HEADING", TABLE_HEAD);
  console.log("ROWS", TABLE_ROWS);
  return (
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
  );
};
