import { produce } from 'immer';
import * as constant from '../constants/Authentication';

const authState = {
  loading: false,
  register: null,
  login: null,
  loginGoogle: null,
  logout: null,
  forgotPass: null,
  error: null,
};

const authReducer = produce((draft, action) => {
  switch (action.type) {
    case constant.REGISTER_USER_REQUEST:
      draft.loading = true;
      draft.register = null;
      draft.error = null;
      return;

    case constant.REGISTER_USER_SUCCESS:
      draft.loading = false;
      draft.register = action.payload;
      draft.error = null;
      return;

    case constant.REGISTER_USER_ERROR:
      draft.loading = false;
      draft.register = null;
      draft.error = action.payload;
      return;

    case constant.LOGGED_IN_USER_REQUEST:
      draft.loading = true;
      draft.login = null;
      draft.error = null;
      return;

    case constant.LOGGED_IN_USER_SUCCESS:
      draft.loading = false;
      draft.login = action.payload;
      draft.error = null;
      return;

    case constant.LOGGED_IN_USER_ERROR:
      draft.loading = false;
      draft.login = null;
      draft.error = action.payload;
      return;

    case constant.LOGIN_GOOGLE_REQUEST:
      draft.loading = true;
      draft.loginGoogle = null;
      draft.error = null;
      return;

    case constant.LOGIN_GOOGLE_SUCCESS:
      draft.loading = false;
      draft.loginGoogle = action.payload;
      draft.error = null;
      return;

    case constant.LOGIN_GOOGLE_ERROR:
      draft.loading = false;
      draft.loginGoogle = null;
      draft.error = action.payload;
      return;

    case constant.GET_USER_REQUEST:
      draft.loading = true;
      draft.login = null;
      draft.error = null;
      return;

    case constant.GET_USER_SUCCESS:
      draft.loading = false;
      draft.login = action.payload;
      draft.error = null;
      return;

    case constant.GET_USER_ERROR:
      draft.loading = false;
      draft.login = null;
      draft.error = action.payload;
      return;

    case constant.GET_ADMIN_REQUEST:
      draft.loading = true;
      draft.login = null;
      draft.error = null;
      return;

    case constant.GET_ADMIN_SUCCESS:
      draft.loading = false;
      draft.login = action.payload;
      draft.error = null;
      return;

    case constant.GET_ADMIN_ERROR:
      draft.loading = false;
      draft.login = null;
      draft.error = action.payload;
      return;

    case constant.LOGOUT_REQUEST:
      draft.loading = true;
      draft.logout = null;
      draft.error = null;
      return;

    case constant.LOGOUT_SUCCESS:
      draft.loading = false;
      draft.logout = action.payload;
      draft.error = null;
      return;

    case constant.LOGOUT_ERROR:
      draft.loading = false;
      draft.logout = null;
      draft.error = action.payload;
      return;

    case constant.FORGOT_PASSWORD_USER_REQUEST:
      draft.loading = true;
      draft.forgotPass = null;
      draft.error = null;
      return;

    case constant.FORGOT_PASSWORD_USER_SUCCESS:
      draft.loading = false;
      draft.forgotPass = action.payload;
      draft.error = null;
      return;

    case constant.FORGOT_PASSWORD_USER_ERROR:
      draft.loading = false;
      draft.forgotPass = null;
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, authState);

export default authReducer;
