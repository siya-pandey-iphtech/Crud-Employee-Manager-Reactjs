import SButton from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { AddNewModal } from "./modals/AddNewModal";
import employeesData from "./data/employees.json";
import Searchbar from "./Searchbar";
import { customAlphabet } from "nanoid";
import CustomTable from "./CustomTable";

export const EmployeeComponent = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [employees, setEmployees] = useState(employeesData);
  const [employeeId, setEmployeeId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);

  const emptyForm = {
    id: "",
    name: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    phone: "",
    address: "",
    profile_photo: "",
  };
  const nanoid = customAlphabet("0123456789", 4);
  const [formData, setFormData] = useState(emptyForm);
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
  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      // if the dialog is currently open, it's about to be closed
      clearForm();
    } else {
      // if the dialog is currently closed, it's about to be opened
      prepareForm();
    }
  };
  const handleChangeSave = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === employeeId ? { ...emp, ...formData } : emp
      )
    );
    clearForm();
    setOpen(false);
  };

  const prepareForm = () => {
    if (mode === "edit" || mode === "view") {
      const employee = employees.find((emp) => emp.id === employeeId);
      if (employee) {
        setFormData(employee);
      } else {
        clearForm();
      }
    }
  };
  // Create new employee
  const createNewEmployee = () => {
    setEmployees([
      ...employees,
      {
        id: nanoid(),
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        city: formData.city,
        state: formData.state,
        phone: formData.phone,
        address: formData.address,
        profile_photo: formData.profile_photo,
      },
    ]);
  };

  const clearForm = () => {
    setFormData(emptyForm);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((data) =>
        TABLE_HEAD.some((param) =>
          data[param].toString().toLowerCase().includes(searchQuery)
        )
      )
    );
  }, [searchQuery, employees]);
  //show each employee in table
  const TABLE_ROWS = filteredEmployees.map((employee, index) => (
    <tr key={employee.id} className={index % 2 === 0 ? " bg-blue-50" : ""}>
      {TABLE_HEAD.map((head) => (
        <td
          key={head}
          className="p-1.5 border-b border-blue-gray-100 text-left  text-gray-600 text-nowrap"
        >
          {head === "profile_photo" ? (
           <div className="flex justify-center">
            <img
              className="rounded-xl w-20 h-24"
              src={employee[head]}
              alt={employee.name}
            />
            </div>
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
      <div className="sm:flex   text-nowrap sm:justify-between  sm:items-center ">
       <div className="flex justify-center">
        <SButton
          className=""
          onClick={() => {
            setMode("create");
            setOpen(true);
          }}
        >
          Create <FontAwesomeIcon icon={faAdd} />
        </SButton>
</div>
 <div className=" sm:w-96 w-full flexitems-center justify-center">        <Searchbar handleSearch={handleSearchChange} />
        </div>
      </div>

      <AddNewModal
        open={open}
        mode={mode}
        employeeId={employeeId}
        setEmployeeId={setEmployeeId}
        handleChangeSave={handleChangeSave}
        handleOpen={handleOpen}
        prepareForm={prepareForm}
        createNewEmployee={createNewEmployee}
        formData={formData}
        setFormData={setFormData}
        clearForm={clearForm}
        handleChange={handleChange}
      />

      <CustomTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
    </>
  );
};
