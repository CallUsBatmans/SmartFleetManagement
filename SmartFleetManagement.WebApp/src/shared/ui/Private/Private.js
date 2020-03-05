import React from 'react';
import { userIsAuthenticated } from '../../../helpers/auth';
import { Redirect } from 'react-router-dom';

const Private = props => (
  <>
    {userIsAuthenticated() ? props.children : <Redirect to='/login' />}
  </>
);

export default Private;
