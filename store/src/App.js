import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div>          
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
