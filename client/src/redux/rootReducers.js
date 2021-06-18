import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './reducers/AuthReducers';

const rootReducers = combineReducers({
  auth: authReducer,
  toastr: toastrReducer,
});

export default rootReducers;
