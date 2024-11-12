// input.jsx
import React from "react";

const Input = ({ id, type, value, placeholder, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
    />
  );
};

export { Input }; // Export the Input component correctly
