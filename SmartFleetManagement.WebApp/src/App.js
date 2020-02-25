import React from 'react';
import { Route, Switch } from "react-router";
import Login from './components/Login/Login';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={() => <div>login</div>} />
      <Route path="/register" component={() => <div>register</div>} />
    </Switch>
  );
}

export default App;
