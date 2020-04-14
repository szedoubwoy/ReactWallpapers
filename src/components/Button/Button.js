import React from "react";

const Button = ({ children, ...props }) => (
  <a href="/" className="btn btn-outline-success" {...props}>
    {children}
  </a>
);

export default Button;
