import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;

    const userLogin = {
      username,
      password,
    };

    localStorage.setItem('user_auth', JSON.stringify(userLogin));
    this.props.history.replace('/profile');
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Insyt Groove</legend>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user" />
              <input
                className="uk-input"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="esoko"
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock" />
              <input
                className="uk-input "
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="**********"
              />
            </div>
            {console.log(this.props)}
          </div>

          <button className="uk-button uk-button-primary uk-width-1-1">
            Log in
          </button>
        </fieldset>
      </form>
    );
  }
}

export default withRouter(Login);
