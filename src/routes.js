import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Direct from './pages/Direct';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Profile from './pages/Profile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/direct" component={Direct} />
    <Route path="/explore" component={Explore} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
export default Routes;
