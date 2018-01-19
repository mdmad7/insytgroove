import React, { Component } from 'react';

import SignUp from '../components/signup';
import Login from '../components/login';

class Landing extends Component {
  componentWillMount() {
    const userAuth = JSON.parse(localStorage.getItem('user_auth'));
    if (
      userAuth !== null &&
      userAuth.username === 'esoko' &&
      userAuth.password === 'insyt'
    ) {
      this.props.history.push('/profile');
    }
  }
  render() {
    return (
      <div
        className="uk-child-width-1-3@s uk-text-center uk-flex uk-flex-center uk-flex-middle"
        data-uk-grid
        style={{ minHeight: '100vh' }}>
        <div>
          <ul className="uk-flex-center" uk-tab="animation: uk-animation-fade">
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Signup</a>
            </li>
          </ul>

          <ul className="uk-switcher uk-margin">
            <li>
              <div className="uk-card uk-card-default uk-card-body">
                <Login />
              </div>
            </li>
            <li>
              <div className="uk-card uk-card-default uk-card-body">
                <SignUp />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
