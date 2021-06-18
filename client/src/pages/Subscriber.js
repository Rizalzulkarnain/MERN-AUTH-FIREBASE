import React, { useEffect } from 'react';
import { Box, Text } from '../styles';

import { useSelector } from 'react-redux';

const Subscriber = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  useEffect(() => {
    if (login && login.token && login.role === 'subscriber')
      history.push('/subscriber');
  }, [login, history]);

  return (
    <div>
      <Box mt={3} center>
        <Text fontSize={4} fontWeight={4} textAlign={'center'}>
          SUBSCRIBER
        </Text>
      </Box>
    </div>
  );
};

export default Subscriber;
