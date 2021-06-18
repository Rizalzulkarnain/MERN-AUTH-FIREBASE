import React, { useState, useEffect } from 'react';
import { toastr } from 'react-redux-toastr';

import FormControl from '../../components/Form/FormControl';

import { RegisterContainer, Btn, ButtonContainer } from '../../styles';

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/actions/AuthActions';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.login && auth.login.token) {
      history.push('/');
    }
  }, [auth, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegister(email));
    toastr.success(
      'Check Your Inbox!',
      `Link Complete Registration, "${email}" is send to your Email, Please complete your registration !`
    );

    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit}>
        <FormControl
          htmlFor="email"
          id="email"
          name="email"
          value={email}
          label="Register Account"
          placeholder="Please add your Email..."
          type="email"
          onChange={handleChange}
        />

        <ButtonContainer>
          <Btn size="sm" color="green" type="submit" disabled={!email}>
            Register Account
          </Btn>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};

export default Register;
