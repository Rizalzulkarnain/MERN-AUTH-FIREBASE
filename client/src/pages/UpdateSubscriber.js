import React, { useEffect } from 'react';
import { Box, Text } from '../styles';

import { useSelector } from 'react-redux';

const UpdateSubscriber = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  useEffect(() => {
    if (login && login.token && login.role === 'subscriber')
      history.push('/update-subscriber');
  }, [login, history]);

  return (
    <div>
      <Box mt={3}>
        <Text fontSize={4} fontWeight={4} textAlign={'center'}>
          UPDATE USER SUBSCRIBER
        </Text>
      </Box>
    </div>
  );
};

export default UpdateSubscriber;
