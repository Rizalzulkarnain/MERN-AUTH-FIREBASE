import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store from './redux/store';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={true}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr}
      transitionIn="bounceIn"
      transitionOut="bounceOut"
      progressBar={false}
      closeOnToastrClick
    />
    <App />
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
