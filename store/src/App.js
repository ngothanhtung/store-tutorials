import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div>          
          <LoginForm />
          <hr />
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
