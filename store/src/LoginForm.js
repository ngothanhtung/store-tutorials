import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: {
        username: '',
        password: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = JSON.stringify(this.state.user);
    console.log(data);
    // url (required), options (optional)
    fetch('http://localhost:3000/api/authenticate', {
      method: 'POST',
      body: data,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data);
    }).catch(function (err) {
      // Error :(
      console.log(err);
    });
  }

  handleChange(field, event) {
    var object = this.state.user;
    object[field] = event.target.value;
    this.setState({ user: object });
  }


  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" className="input form-control" value={this.state.user.username} onChange={this.handleChange.bind(this, 'username')} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="text" className="input form-control" value={this.state.user.password} onChange={this.handleChange.bind(this, 'password')} />
          </div>

          <div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default LoginForm;
