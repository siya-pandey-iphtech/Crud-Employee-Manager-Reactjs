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
  DialogFooter,
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
      <Dialog
        open={open}
        handler={handleOpen}
        className="  bg-transparent flex justify-center items-center h-screen p-20 shadow-none"
      >
        <Card className="mx-auto  my-10 border-2 bg-white  shadow-2xl p-5 w-fit h-full overflow-auto  ">
          <DialogHeader className="justify-between  bg-white   sticky top-0">
            <div className="flex  w-full justify-center  items-center ">
              {mode === "edit" ? (
                <Title className="text-center text-blue-500 font-lobster font-bold text-3xl ">
                  Edit Details
                </Title>
              ) : mode === "view" ? (
                <Title className="text-center text-blue-500 font-lobster font-bold text-3xl">
                  View User
                </Title>
              ) : (
                <Title className="text-center text-blue-500 font-lobster font-bold text-3xl  ">
                  Create New{" "}
                </Title>
              )}
            </div>

            <FontAwesomeIcon
              className=" cursor-pointer"
              icon={faClose}
              onClick={handleOpen}
            />
          </DialogHeader>
          <div className="flex justify-center items-center border-2 rounded-lg border-blue-400 h-32 w-32 mx-auto my-4">
            <img
              src={
                formData.profile_photo ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="Profile"
              className="object-cover h-full rounded-lg w-full"
            />
          </div>

          <CardBody className="grid grid-cols-2 gap-4  ">
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
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </CardBody>
          <DialogFooter className=" flex  items-center p-0 justify-center  bg-white sticky bottom-0">
            {mode === "edit" ? (
              <SButton onClick={handleChangeSave} className="col-span-2">
                Save Changes <FontAwesomeIcon icon={faEdit} />
              </SButton>
            ) : mode === "view" ? (
              ""
            ) : (
              <SButton onClick={handleAddProfile} className=" w-full col-span-2">
                Add <FontAwesomeIcon icon={faAdd} />
              </SButton>
            )}
          </DialogFooter>
        </Card>
      </Dialog>
    </div>
  );
}
