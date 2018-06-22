import React, { Component } from 'react';
import './App.css';

import AddQuestion from './components/addQuestion'
import NavBar from './components/NavigationBar'
import HomePage from './components/home'
import Login from './components/login'
import QuestionDetail from './components/questionDetail'
import NoMatch from './components/NoMatch'
import Leaderboard from './components/leaderboard'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">

          <BrowserRouter>
              <div>
                  <NavBar/>
                  <Switch>
                      <PrivateRoute exact path='/' component={HomePage} />
                      <PrivateRoute path='/add' component={AddQuestion} />
                      <PrivateRoute exact path='/question/:question_id' component={QuestionDetail} />
                      <PrivateRoute path='/leaderboard' component={Leaderboard} />
                      <Route path='/login' component={Login} />

                      <Route component={NoMatch} />
                  </Switch>
              </div>

          </BrowserRouter>

      </div>
    );
  }
}

export default App;
