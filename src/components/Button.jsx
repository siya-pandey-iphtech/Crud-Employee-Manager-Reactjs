import React from 'react'
import { Button } from '@material-tailwind/react'
const SButton = ({onClick,children,className}) => {
  return (
    <Button className={`m-5 text-nowrap w-fit py-2 px-6 text-white  bg-blue-500 shadow-lg rounded-lg hover:bg-blue-300 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed ${className}`} onClick={onClick} >
      {children}
    </Button>
  )
}

export default SButton
