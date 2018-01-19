import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../HOC/PrivateRoute';

import Home from './Home';
import Post from './Post';
import Landing from '../containers/Landing';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <PrivateRoute path="/profile" component={Home} />
      <PrivateRoute path="/post/:id" component={Post} />
    </Switch>
  );
};

export default App;
