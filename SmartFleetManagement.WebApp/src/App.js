import React from 'react';
import { Route, Switch } from "react-router";
import Login from './components/Login/Login';
import Private from './shared/ui/Private/Private';
import Landing from './components/Landing/Landing';
import Layout from './shared/ui/Layout/Layout';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />

      <Private>
        <Layout>
        <Route exact path="/" component={Landing} />
        </Layout>
      </Private>
    </Switch>
  );
}

export default App;
