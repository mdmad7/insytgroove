import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Home from '../containers/Home';
import Profile from '../containers/Profile';

const HomeLayout = props => {
  return (
    <div>
      <nav className="uk-navbar-container uk-margin" data-uk-navbar>
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to={'/profile'}>
            Insyt Groove
          </Link>
        </div>
        <div className="uk-navbar-right">
          <a
            href=""
            className="uk-navbar-item uk-logo"
            uk-icon="icon: sign-out; ratio: 2"
            uk-toggle="target: #modal-log-out"
          />
        </div>
      </nav>

      <div className=" uk-container uk-container-small uk-flex uk-flex-center">
        <Switch>
          <Route exact path="/profile" component={Home} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </div>

      <div id="modal-log-out" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />
          <h2 className="uk-modal-title">Log Out</h2>
          <p>Are you sure you want to log out?</p>
          <p className="uk-text-right">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button">
              Cancel
            </button>
            <button
              className="uk-button uk-button-danger uk-modal-close"
              type="button"
              onClick={() => {
                localStorage.removeItem('user_auth');
                props.history.push('/');
              }}>
              Logout
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HomeLayout);
