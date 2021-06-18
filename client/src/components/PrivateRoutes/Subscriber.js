import React from 'react';
import { Route } from 'react-router-dom';
import RedirectLoading from './RedirectLoading';

import { useSelector } from 'react-redux';

const SubscriberPrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const { login } = auth;
  return login && login.token ? <Route {...rest} /> : <RedirectLoading />;
};

export default SubscriberPrivateRoute;
