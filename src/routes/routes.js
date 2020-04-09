import React from "react";
import { Switch, Route } from "react-router-dom";

import WallpapersView from "../WallpapersView/WallpapersView";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WallpapersView} />
  </Switch>

  // <Switch>
  //     <Route exact path="/" component={Main} />
  //     <Route exact path="/movie" component={() => <Popular type={'movie'} />} />
  //     <Route exact path="/tv" component={() => <Popular type={'tv'} />} />
  //     <Route exact path="/person" component={() => <Popular type={'person'} />} />
  //     <Route exact path="/movie/:id" component={SingleMovie} />
  //     <Route exact path="/tv/:id" component={SingleTv} />
  //     <Route exact path="/person/:id" component={SinglePerson} />
  //     <Route exact path="/random" component={RandomMovie} />
  // </Switch>
);

export default Routes;
