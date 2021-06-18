import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';

import { auth, googleAuthProvider } from '../../firebase';

import * as constant from '../constants/Authentication';
import * as API from '../../API/API';

export const userRegister = (email) => async (dispatch) => {
  try {
    dispatch({
      type: constant.REGISTER_USER_REQUEST,
    });

    const config = {
      url: process.env.REACT_APP_REGISTER_COMPLETE,
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    dispatch({
      type: constant.REGISTER_USER_SUCCESS,
    });

    //save to local-storage
    window.localStorage.setItem('EmailRegistration', email);
  } catch (error) {
    dispatch({
      type: constant.REGISTER_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegisterComplete =
  (email, password, link = window.location.href) =>
  async (dispatch) => {
    try {
      dispatch({
        type: constant.REGISTER_COMPLETE_REQUEST,
      });

      const result = await auth.signInWithEmailLink(email, link);
      if (result.user.emailVerified) {
        window.localStorage.removeItem('EmailRegistration');

        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        const { data } = await API.createOrUpdateUser(idTokenResult.token);
        dispatch({
          type: constant.REGISTER_COMPLETE_SUCCESS,
          payload: {
            _id: data.data._id,
            email: data.data.email,
            role: data.data.role,
            token: idTokenResult.token,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: constant.REGISTER_COMPLETE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constant.LOGGED_IN_USER_REQUEST,
    });

    const result = await auth.signInWithEmailAndPassword(email, password);
    const { user } = result;
    const idTokenResult = await user.getIdTokenResult();
    const { data } = await API.createOrUpdateUser(idTokenResult.token);
    dispatch({
      type: constant.LOGGED_IN_USER_SUCCESS,
      payload: {
        _id: data.data._id,
        email: data.data.email,
        role: data.data.role,
        token: idTokenResult.token,
      },
    });
  } catch (error) {
    dispatch({
      type: constant.LOGGED_IN_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLoginGoogle = () => async (dispatch) => {
  try {
    dispatch({
      type: constant.LOGIN_GOOGLE_REQUEST,
    });

    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      const { data } = await API.createOrUpdateUser(idTokenResult.token);
      dispatch({
        type: constant.LOGIN_GOOGLE_SUCCESS,
        payload: {
          _id: data.data._id,
          email: data.data.email,
          role: data.data.role,
          token: idTokenResult.token,
        },
      });
    });
  } catch (error) {
    dispatch({
      type: constant.LOGIN_GOOGLE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: constant.GET_USER_REQUEST,
    });

    const unSubscribe = await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const res = await API.currentUser(idTokenResult.token);
        console.log(res.data);

        dispatch({
          type: constant.GET_USER_SUCCESS,
          payload: res.data.data,
        });
      }
    });
    return () => unSubscribe();
  } catch (error) {
    dispatch({
      type: constant.GET_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserAdmin = (authToken) => async (dispatch) => {
  try {
    dispatch({
      type: constant.GET_ADMIN_REQUEST,
    });

    const { data } = await API.currentAdmin(authToken);
    dispatch({
      type: constant.GET_ADMIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: constant.GET_ADMIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: constant.LOGOUT_REQUEST,
    });

    await firebase.auth().signOut();
    dispatch({
      type: constant.LOGOUT_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({
      type: constant.LOGOUT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: constant.FORGOT_PASSWORD_USER_REQUEST,
    });

    const config = {
      url: process.env.REACT_APP_LOGIN,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        dispatch({
          type: constant.FORGOT_PASSWORD_USER_SUCCESS,
        });
        toastr.success(
          'Check Your Inbox!',
          `Link Forgot Password: "${email}" is send to your Email, Please check your inbox !`
        );
      })
      .catch((error) => {
        dispatch({
          type: constant.FORGOT_PASSWORD_USER_ERROR,
        });
        toastr.error(error.message);
        console.log(error);
      });
  } catch (error) {
    dispatch({
      type: constant.FORGOT_PASSWORD_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
