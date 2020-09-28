import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/sign-in" />
        <Route path="/sign-in" component={SignIn} />
        {/* <Route path="discover" component={Discover} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
