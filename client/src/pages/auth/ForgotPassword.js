import React, { useState, useEffect } from 'react';

import FormControl from '../../components/Form/FormControl';

import { RegisterContainer, Btn, ButtonContainer } from '../../styles';

import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/actions/AuthActions';

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { login } = auth;

  useEffect(() => {
    if (login && login.token) {
      history.push('/');
    }
  }, [login, history]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit}>
        <FormControl
          htmlFor="email"
          id="email"
          name="email"
          value={email}
          label="Recover Your Account"
          placeholder="Please add your Email..."
          type="email"
          onChange={handleChange}
        />

        <ButtonContainer>
          <Btn size="sm" color="green" type="submit" disabled={!email}>
            Send Me Link
          </Btn>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default ForgotPassword;
