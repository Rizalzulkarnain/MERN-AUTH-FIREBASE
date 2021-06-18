import React, { useEffect } from 'react';
import { Box, Text } from '../styles';

import { useSelector } from 'react-redux';

const Admin = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  useEffect(() => {
    if (login && login.role === 'admin') history.push('/admin');
  }, [login, history]);

  return (
    <div>
      <Box mt={3}>
        <Text fontSize={4} fontWeight={4} textAlign={'center'}>
          ADMIN
        </Text>
      </Box>
    </div>
  );
};

export default Admin;
