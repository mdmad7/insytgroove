import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }
  componentWillMount() {
    const userAuth = JSON.parse(localStorage.getItem('user_auth'));
    if (
      userAuth !== null &&
      userAuth.username === 'esoko' &&
      userAuth.password === 'insyt'
    ) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    const { component: Component, ...props } = this.props;
    return (
      <Route
        {...props}
        render={props =>
          this.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
