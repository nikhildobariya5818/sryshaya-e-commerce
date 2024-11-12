// button.jsx
import React from "react";

const Button = ({ children, onClick, className, variant }) => {
  const buttonClasses = `py-2 px-4 rounded focus:outline-none ${className}`;

  return (
    <button
      className={variant === "secondary" ? `bg-gray-200 ${buttonClasses}` : `bg-black text-white ${buttonClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button }; // Export the Button component correctly
