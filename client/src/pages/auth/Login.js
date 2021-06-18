import React, { useState, useEffect } from 'react';
import { toastr } from 'react-redux-toastr';

import FormControl from '../../components/Form/FormControl';

import {
  RegisterContainer,
  Btn,
  ButtonContainer,
  Box,
  RouterLink,
} from '../../styles';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userLoginGoogle } from '../../redux/actions/AuthActions';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { error, login, loginGoogle } = auth;

  useEffect(() => {
    if (login || loginGoogle) {
      if (login.role === 'subscriber') {
        history.push('/subscriber');
      }

      if (login.role === 'admin') {
        history.push('/admin');
      }
    }
  }, [history, login, loginGoogle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(userLogin(email, password));
    } catch (error) {
      toastr.error(error.message);
      console.log(error);
    }
  };

  const googleLogin = () => {
    dispatch(userLoginGoogle());
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <RegisterContainer>
      {error && <div>{toastr.error(error)}</div>}
      <form onSubmit={handleSubmit}>
        <FormControl
          value={email}
          label="Email"
          placeholder="Please add your Email..."
          type="email"
          onChange={handleChangeEmail}
        />

        <FormControl
          value={password}
          label="Password"
          placeholder="Please add your Password..."
          type="password"
          onChange={handleChangePassword}
        />

        <ButtonContainer>
          <Btn
            size="sm"
            color="green"
            type="submit"
            disabled={!email && !password}
          >
            Login Account
          </Btn>
        </ButtonContainer>
      </form>

      <Box mt={2} center>
        <Btn size="md" color="red" onClick={googleLogin}>
          <i className="fab fa-google"></i> Login With Google
        </Btn>
      </Box>

      <Box mt={2} center>
        <i className="fa fa-unlock"></i>{' '}
        <RouterLink to="/forgot-password">Forgot Password</RouterLink>
      </Box>
    </RegisterContainer>
  );
};

export default Login;
