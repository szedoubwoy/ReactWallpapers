import React from "react";
import { Switch, Route } from "react-router-dom";

import WallpapersView from "../views/WallpapersView/WallpapersView";
import FavouriteWallpapersView from "../views/FavouriteWallpapersView/FavouriteWallpapersView";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WallpapersView} />
    <Route path="/" component={FavouriteWallpapersView} />
  </Switch>
);

export default Routes;
