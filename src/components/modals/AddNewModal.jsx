import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { customAlphabet } from 'nanoid';

export function AddNewModal({ open, setOpen, employees, setEmployees, mode, setMode, employeeId, setEmployeeId }) {
  const nanoid = customAlphabet('0123456789', 4);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    dob: '',
    city: '',
    state: '',
    phone:'' ,
    address: '',
    profile_photo: ''
  })
  const handleOpen = () => {
    prepareForm();
    setOpen(!open);
    if (!open) { clearForm(); }
  };
  const prepareForm = () => {
    if (mode === 'edit' || mode === 'view') {
      const employee = employees.find(emp => emp.id === employeeId)
      if (employee) {
        setFormData(employee);
      }
      else {
        clearForm();
      }
    }
  }
  const clearForm = () => {
    setFormData({
      id: '',
      name: '',
      email: '',
      dob: '',
      city: '',
      state: '',
      phone: '',
      address: '',
      profile_photo: ''
    })
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProfile = () => {

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
        profile_photo: formData.profile_photo
      }
    ]);
    handleOpen();
    clearForm();

  }

  return (
    <div className="flex items-c  justify-c ">

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >


        <Card className="mx-auto border-2 bg-white  shadow-2xl p-5 w-full max-w-[24rem]">
          <DialogHeader className="justify-between">
            <div className="flex justify-c  items-c  text-c ">
              {mode === 'edit' ? <Title className="text-c ">Edit Details</Title> : (mode === 'view' ? <Title className="text-c ">View User</Title> : <Title className="text-c ">Create New</Title>)}
            </div>

            <FontAwesomeIcon className=" cursor-pointer" icon={faClose} onClick={handleOpen} />

          </DialogHeader>
          <CardBody className="flex flex-col gap-4 ">

            <Input
              disabled={mode === 'view'}
              label=" Name "
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label=" Email "
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  DOB "
              name="dob"
              value={formData.dob}
              type="date"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  Ctiy "
              name="city"
              value={formData.city}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  State "
              name="state"
              value={formData.state}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  Phone no."
              name="phone"
              value={formData.phone}
              type="number"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  Address"
              name="address"
              value={formData.address}
              type="text"
              onChange={handleChange}
            />
            <Input
              disabled={mode === 'view'}

              label="  Profile Photo URL "
              name="profile_photo"
              value={formData.profile_photo}
              type="text"
              onChange={handleChange}
            />
            {mode === 'edit' ? <SButton>Save Changes <FontAwesomeIcon icon={faEdit} /></SButton> : (mode === 'view' ? '' : <SButton onClick={handleAddProfile}>Add <FontAwesomeIcon icon={faAdd} /></SButton>)}


          </CardBody>

        </Card>

      </Dialog>
    </div>
  );
}