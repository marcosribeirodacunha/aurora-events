import React from 'react';
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface IProps extends RouteProps {
  isPrivate?: boolean;
  isAuth?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate = false,
  isAuth = false,
  ...rest
}) => {
  const { signed } = useAuth();

  if (!signed && isPrivate) return <Redirect to="/sign-in" />;

  if (signed && isAuth) return <Redirect to="/discover" />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default RouteWrapper;
