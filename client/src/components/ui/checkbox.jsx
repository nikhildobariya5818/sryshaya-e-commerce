// checkbox.jsx
import React from "react";

const Checkbox = ({ id }) => {
  return (
    <input
      id={id}
      type="checkbox"
      className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    />
  );
};

export { Checkbox }; // Export the Checkbox component correctly
