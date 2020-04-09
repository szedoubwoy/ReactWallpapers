import React from "react";

const Button = ({ children, ...props }) => (
  <a href="/" className="btn btn-outline-warning" {...props}>
    {children}
  </a>
);

export default Button;
