import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faA,
  faAdd,
  faClose,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import SButton from "../Button";
import Title from "../Title";
import Input from "../Input";
import { customAlphabet } from "nanoid";

export function AddNewModal({
  open,
  setOpen,
  employees,
  setEmployees,
  mode,
  setMode,
  employeeId,
  setEmployeeId,
}) {
  const nanoid = customAlphabet("0123456789", 4);

  //for clear form and initial form state
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
  const [formData, setFormData] = useState(emptyForm);

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
  useEffect(() => {
    console.log("phone", formData);
    if (!open) {
      setEmployeeId(null);
      clearForm();
    }
    prepareForm();
  }, [employeeId, open]);

  //fill the data of the employee with the selected employee id , in the modal form
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
  //  to clear the form
  const clearForm = () => {
    setFormData(emptyForm);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //Save the Edits
  const handleChangeSave = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === employeeId ? { ...emp, ...formData } : emp
      )
    );
    clearForm();
    setOpen(false);
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
  //Save the new employee details
  const handleAddProfile = () => {
    createNewEmployee();
    handleOpen();
    clearForm();
  };

  return (
    <div className="flex items-center  justify-center ">
      <SButton
        onClick={() => {
          setMode("create");
          setOpen(true);
        }}
      >
        {" "}
        Create <FontAwesomeIcon icon={faAdd} />
      </SButton>
      <Dialog
        open={open}
        handler={handleOpen}
        className="  bg-transparent flex justify-center items-center h-5/6 p-20 shadow-none"
      >
        <Card className="mx-auto  my-10 border-2 bg-white  shadow-2xl p-5 w-full h-full overflow-scroll max-w-[24rem] ">
          <DialogHeader className="justify-between">
            <div className="flex justify-center  items-center  text-center ">
              {mode === "edit" ? (
                <Title className="text-c ">Edit Details</Title>
              ) : mode === "view" ? (
                <Title className="text-c ">View User</Title>
              ) : (
                <Title className="text-c ">Create New</Title>
              )}
            </div>

            <FontAwesomeIcon
              className=" cursor-pointer"
              icon={faClose}
              onClick={handleOpen}
            />
          </DialogHeader>
          <CardBody className="flex flex-col gap-4  ">
            <Input
              disabled={mode === "view"}
              label=" Name "
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label=" Email "
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  DOB "
              name="dob"
              value={formData.dob}
              type="date"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  Ctiy "
              name="city"
              value={formData.city}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  State "
              name="state"
              value={formData.state}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  Phone no."
              name="phone"
              value={formData.phone}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  Address"
              name="address"
              value={formData.address}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === "view"}
              label="  Profile Photo URL "
              name="profile_photo"
              value={formData.profile_photo}
              type="text"
              onChange={handleChange}
            />
            {mode === "edit" ? (
              <SButton onClick={handleChangeSave}>
                Save Changes <FontAwesomeIcon icon={faEdit} />
              </SButton>
            ) : mode === "view" ? (
              ""
            ) : (
              <SButton onClick={handleAddProfile}>
                Add <FontAwesomeIcon icon={faAdd} />
              </SButton>
            )}
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
}
