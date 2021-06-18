import React from 'react';

import Burger from '../Burger/Burger';
import { Nav, RouterLink } from '../../../styles';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  return (
    <Nav>
      <RouterLink to="/">
        <div className="logo">
          <i className="fa fa-home"></i> HOME
          {!login ? <div /> : `-${login.role.toUpperCase()}`}
        </div>
      </RouterLink>

      <Burger />
    </Nav>
  );
};

export default NavBar;
