import React from "react";

const Input = ({ disabled,label, name, value, type, onChange, className }) => {
  return (
    <div className="relative   m-2">
      <label htmlFor={name} className="absolute top-0 -mt-3 px-2 bg-white text-gray-500 rounded-full text-md">{label}</label>
      <input
      disabled={disabled}
        className={` w-full p-3 m-0
        border-2 border-blue-400 rounded-lg    disabled:cursor-not-allowed ${className}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;