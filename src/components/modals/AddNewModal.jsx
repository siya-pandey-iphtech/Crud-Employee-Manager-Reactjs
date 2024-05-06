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

export function AddNewModal({ employees ,setEmployees }) {
  const nanoid = customAlphabet('0123456789', 4);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
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
  const handleOpen = () => setOpen(!open);
  const clearForm=()=>{
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
    <div className="flex items-center justify-center">
      <SButton onClick={handleOpen}>  Create <FontAwesomeIcon icon={faAdd} /></SButton>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >


        <Card className="mx-auto border-2 bg-white  shadow-2xl p-5 w-full max-w-[24rem]">
          <DialogHeader className="justify-between">
            <div className="flex justify-center items-center text-center">
              <Title className="text-center">User Details </Title>
            </div>
            
              <FontAwesomeIcon className=" cursor-pointer" icon={faClose} onClick={handleOpen}/>
            
          </DialogHeader>
          <CardBody className="flex flex-col gap-4 ">

            <Input
              label="Enter Name "
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
            />
            <Input
              label="Enter Email "
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
            />
            <Input
              label="Enter DOB "
              name="dob"
              value={formData.dob}
              type="date"
              onChange={handleChange}
            />
            <Input
              label="Enter Ctiy "
              name="city"
              value={formData.city}
              type="text"
              onChange={handleChange}
            />
            <Input
              label="Enter State "
              name="state"
              value={formData.state}
              type="text"
              onChange={handleChange}
            />
            <Input
              label="Enter Phone no."
              name="phone"
              value={formData.phone}
              type="number"
              onChange={handleChange}
            />
            <Input
              label="Enter Address"
              name="address"
              value={formData.address}
              type="text"
              onChange={handleChange}
            />
            <Input
              label="Enter Profile Photo URL "
              name="profile_photo"
              value={formData.profile_photo}
              type="text"
              onChange={handleChange}
            />
            <SButton onClick={handleAddProfile}>Add <FontAwesomeIcon icon={faAdd}/></SButton>

          </CardBody>

        </Card>

      </Dialog>
    </div>
  );
}