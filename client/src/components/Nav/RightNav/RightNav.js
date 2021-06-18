import React from 'react';
import { toastr } from 'react-redux-toastr';
import { Ul, RouterLink } from '../../../styles';

import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../../redux/actions/AuthActions';

const RightNav = ({ open }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  const handleLogoutClick = () => {
    dispatch(userLogout());
    toastr.info("You're logout.");

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <>
      <Ul open={open}>
        {!login && (
          <RouterLink to="/register">
            <li>Register</li>
          </RouterLink>
        )}

        {!login && (
          <RouterLink to="/login">
            <li>Login</li>
          </RouterLink>
        )}

        {login && login.role === 'subscriber' && (
          <RouterLink to="/subscriber">
            <li>Subscriber</li>
          </RouterLink>
        )}

        {login && login.role === 'subscriber' && (
          <RouterLink to="/update-subscriber">
            <li>
              <i className="fas fa-user"></i>{' '}
              {login.email && login.email.split('@')[0]}
            </li>
          </RouterLink>
        )}

        {login && login.role === 'admin' && (
          <RouterLink to="/admin">
            <li>Admin</li>
          </RouterLink>
        )}

        {login && login.role === 'admin' && (
          <RouterLink to="/update-admin">
            <li>
              <i className="fa fa-user-plus"></i>{' '}
              {login.email && login.email.split('@')[0]}
            </li>
          </RouterLink>
        )}

        {login && (
          <li>
            <div onClick={handleLogoutClick}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </div>
          </li>
        )}
      </Ul>
    </>
  );
};

export default RightNav;
