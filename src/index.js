import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./views/Root/Root";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  rootElement
);
