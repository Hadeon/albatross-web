import React from 'react';
import {
  Route, 
  Redirect
} from 'react-router-dom';

// Integrate authentication with this token later on
const loginToken = true;

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      loginToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default AuthenticatedRoute;