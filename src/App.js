import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavigationBar'
import HomePage from './components/home'
import Login from './components/Login'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <BrowserRouter>
              <Switch>
                  <PrivateRoute exact path='/' component={HomePage} />
                  <Route path='/login' component={Login} />
              </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
