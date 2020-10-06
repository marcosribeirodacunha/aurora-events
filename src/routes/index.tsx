import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import useAuth from '../hooks/useAuth';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Discover from '../pages/Discover';
import EventDetails from '../pages/EventDetails';
import Profile from '../pages/Profile';
import MyEvents from '../pages/MyEvents';
import EventCreate from '../pages/EventCreate';

const Routes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/discover" />
        <Redirect from="/signout" to="/signin" />

        <Route path="/signup" component={SignUp} isAuth />
        <Route path="/signin" component={SignIn} isAuth />

        <Route path="/discover" exact component={Discover} />
        <Route path="/discover/:id" component={EventDetails} />

        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/myevents" exact component={MyEvents} isPrivate />
        <Route path="/myevents/create" component={EventCreate} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
