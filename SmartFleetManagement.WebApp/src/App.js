import React from 'react';
import { Route, Switch, Redirect } from "react-router";
import Login from './components/Login/Login';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to='/login' />} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
