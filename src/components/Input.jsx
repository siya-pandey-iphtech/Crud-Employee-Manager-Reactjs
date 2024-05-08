import React from "react";

const Input = ({ disabled,label, name, value, type, onChange, className }) => {
  return (
    <div className="relative border-2 rounded-lg border-blue-400 p-2 m-2">
      <label htmlFor={name} className="absolute top-0 -mt-3 px-2 bg-white text-gray-500 rounded-full text-md">{label}</label>
      <input
      disabled={disabled}
        className={`block w-full p-1  disabled:cursor-not-allowed ${className}`}
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