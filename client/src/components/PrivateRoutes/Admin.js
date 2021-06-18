import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import RedirectLoading from './RedirectLoading';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAdmin } from '../../redux/actions/AuthActions';

const AdminPrivateRoute = ({ children, ...rest }) => {
  const [ok, setOk] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { login } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    if (login && login.token && login.role === 'admin') {
      dispatch(getUserAdmin(login.token));
      setOk(true);
    }
  }, [dispatch, login]);

  return ok ? <Route {...rest} /> : <RedirectLoading />;
};

export default AdminPrivateRoute;
