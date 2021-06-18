import React, { useState, useEffect } from 'react';
import { toastr } from 'react-redux-toastr';

import FormControl from '../../components/Form/FormControl';
import { Text, RegisterContainer, Btn, ButtonContainer } from '../../styles';

import { useDispatch } from 'react-redux';
import { userRegisterComplete } from '../../redux/actions/AuthActions';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const link = window.location.href;

  useEffect(() => {
    setEmail(window.localStorage.getItem('EmailRegistration'));
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      toastr.error('Email and password is required!');
      return;
    }

    if (password.length < 6) {
      toastr.error('Password must be at leat 6 characters!');
      return;
    }

    dispatch(userRegisterComplete(email, password, link));

    history.push('/login');
  };

  return (
    <RegisterContainer>
      <Text fontSize={3} fontWeight={5} mb={3}>
        Complete Your Register
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl
          htmlFor="email"
          id="email"
          name="email"
          value={email}
          label="Email"
          placeholder="Please add your Email..."
          type="email"
          onChange={handleEmailChange}
        />

        <FormControl
          htmlFor="password"
          id="password"
          name="password"
          value={password}
          label="Password"
          placeholder="Please add your Password..."
          type="password"
          onChange={handlePasswordChange}
        />

        <ButtonContainer>
          <Btn
            type="submit"
            size="sm"
            color="green"
            disabled={!email && !password}
          >
            Complete Register
          </Btn>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default RegisterComplete;
