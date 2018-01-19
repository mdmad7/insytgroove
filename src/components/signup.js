import React, { Component } from 'react';
import axios from 'axios';
import UIkit from 'uikit';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      },
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, username, email, password } = this.state;

    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
        name,
        username,
        email,
        password,
      },
    })
      .then(response => {
        console.log(response);
        this.setState({
          name: '',
          username: '',
          email: '',
          password: '',
        });

        UIkit.notification({
          message: "<span uk-icon='icon: check'></span> User created!!!",
          status: 'success',
        });
      })
      .catch(error => {
        return error;
      });
  };
  render() {
    return (
      <form className="uk-form-stacked" onSubmit={this.handleSubmit}>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Signup Form</legend>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user" />
              <input
                className="uk-input"
                type="text"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="enter username"
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: users" />
              <input
                className="uk-input"
                type="text"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="enter full name"
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: mail" />
              <input
                className="uk-input"
                type="email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="esoko@esoko.com"
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock" />
              <input
                className="uk-input"
                type="password"
                name="password"
                required
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="********"
              />
            </div>
          </div>
          <button
            className="uk-button uk-button-secondary uk-width-1-1"
            onClick={this.handleSubmit}>
            Sign Up
          </button>
        </fieldset>
      </form>
    );
  }
}

export default SignUp;
