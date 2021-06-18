import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import Subscriber from './pages/Subscriber';
import Admin from './pages/Admin';
import UpdateAdmin from './pages/UpdateAdmin';
import UpdateSubscriber from './pages/UpdateSubscriber';

import AdminPrivateRoute from './components/PrivateRoutes/Admin';
import SubscriberPrivateRoute from './components/PrivateRoutes/Subscriber';

import { useDispatch } from 'react-redux';
import { getUser } from './redux/actions/AuthActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/register-complete"
              component={RegisterComplete}
            />
            <Route exact path="/forgot-password" component={ForgotPassword} />

            {/* Private Route */}
            <AdminPrivateRoute exact path="/admin" component={Admin} />
            <AdminPrivateRoute
              exact
              path="/update-admin"
              component={UpdateAdmin}
            />
            <SubscriberPrivateRoute
              exact
              path="/subscriber"
              component={Subscriber}
            />
            <SubscriberPrivateRoute
              exact
              path="/update-subscriber"
              component={UpdateSubscriber}
            />
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
