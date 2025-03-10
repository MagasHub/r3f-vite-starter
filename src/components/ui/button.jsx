import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
