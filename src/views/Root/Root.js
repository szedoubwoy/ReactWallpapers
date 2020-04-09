import React from "react";

import Store from "../../store/store";
import { Provider } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Wallpapers from "../../components/Wallpapers/Wallpapers";

function Root() {
  return (
    <Provider store={Store}>
      <Navbar />
      <Wallpapers />
    </Provider>
  );
}

export default Root;
