/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClose, faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogHeader,
  Card,
  CardBody,
  DialogFooter,
} from "@material-tailwind/react";
import SButton from "../Button";
import Title from "../Title";
import Input from "../Input";

export function AddNewModal({
  open,
  mode,
  employeeId,
  setEmployeeId,
  handleChangeSave,
  handleOpen,
  prepareForm,
  createNewEmployee,
  formData,
  clearForm,
  handleChange,
}) {
  useEffect(() => {
    
    if (!open) {
      setEmployeeId(null);
      clearForm();
    }
    prepareForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeId, open]);

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
        className="  bg-transparent flex justify-center items-center h-screen p-5 sm:p-20 shadow-none"
      >
        <Card className="mx-auto  my-10 border-2 bg-white  shadow-2xl p-1 sm:p-5 w-full sm:w-fit h-full overflow-auto  ">
          <DialogHeader className="justify-between  bg-white   sticky top-0 z-10">
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

          <CardBody className="grid  sm:grid-cols-2 gap-4  ">
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
              <SButton
                onClick={handleAddProfile}
                className=" w-full col-span-2"
              >
                Add <FontAwesomeIcon icon={faAdd} />
              </SButton>
            )}
          </DialogFooter>
        </Card>
      </Dialog>
    </div>
  );
}
