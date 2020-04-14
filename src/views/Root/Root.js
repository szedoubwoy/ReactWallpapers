import React from "react";

import Store from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Wallpapers from "../../components/Wallpapers/Wallpapers";
import Routes from "../../routes/routes";

function Root() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Navbar />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
