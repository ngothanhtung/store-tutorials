import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import UserList from './UserList';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div>          
          <ProductList />
          <hr />
          <LoginForm />
          <hr />
          <UserList />
         
         
        </div>
      </div>
    );
  }
}

export default App;
