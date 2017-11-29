import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';

import createHistory from 'history/createBrowserHistory';
const history = createHistory({
	forceRefresh: true
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: APPCONFIG.brand,
      dataViewModel: {
        username: '',
        password: ''
      }
    };
  }

  // BINDING
	handleChange(field, event) {
		var object = this.state.dataViewModel;
		object[field] = event.target.value;
		this.setState({ dataViewModel: object });
	}

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state.dataViewModel;
    console.log({ username, password });
    //this.setState({ submittedName: username, submittedEmail: password })

    var data = JSON.stringify(this.state.dataViewModel);
    console.log(data);
    // url (required), options (optional)
    fetch('http://localhost:9000/api/authenticate', {
      method: 'POST',
      body: data,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (response) {
      return response.json()
    }).then(function (result) {
      console.log(result);
      if (result.success === true) {
        console.log("Login OK");
        //save token to sessionStorage        
        sessionStorage.setItem("token", result.token);

        // Use push, replace, and go to navigate around.
        // https://github.com/ReactTraining/history
        history.push('/#/app/dashboard');
        history.go(-1);        

      } else {
        sessionStorage.removeItem("token");
      }

    }).catch(function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">

            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form onSubmit={this.handleSubmit} className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField
                    name="username"
                    floatingLabelText="Username"
                    fullWidth
                    value={this.state.dataViewModel.username} onChange={this.handleChange.bind(this, 'username')}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="password"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth
                    value={this.state.dataViewModel.password} onChange={this.handleChange.bind(this, 'password')}
                  />
                </div>
              </fieldset>
              <div className="card-action no-border text-right">                
                <RaisedButton type="submit" label="Login" primary />
              </div>
            </form>
          </div>
        </div>
        <div className="additional-info">
          <a href="#/sign-up">Sign up</a>
          <span className="divider-h" />
          <a href="#/forgot-password">Forgot your password?</a>
        </div>

      </div>
    );
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Login />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;