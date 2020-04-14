import React from "react";

const Checkbox = ({ checked, ...props }) => (
  <input type="checkbox" {...props} />
);

export default Checkbox;
