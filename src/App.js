import React, { Component } from 'react';
import './App.css';
import TriangleForm from './Components/TriangleForm'
import LoginForm from './Components/LoginForm'
import { Route } from'react-router-dom'


class App extends Component {

  render(){

    return (
        <div className="Router">
          <Route
            exact
            path="/"
            render={() => <LoginForm />}/>
          <Route
              exact
              path="/triangle"
              render={() => <TriangleForm />}/>
        </div>
    );
  }
}

export default (App);