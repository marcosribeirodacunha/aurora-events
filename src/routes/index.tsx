import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Discover from '../pages/Discover';
import EventDetails from '../pages/EventDetails';
import Profile from '../pages/Profile';
import MyEvents from '../pages/MyEvents';
import EventCreate from '../pages/EventCreate';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/sign-in" />
        <Redirect from="/sign-out" to="sign-in" />

        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/discover/:id" component={EventDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/my-events" exact component={MyEvents} />
        <Route path="/my-events/create" component={EventCreate} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
