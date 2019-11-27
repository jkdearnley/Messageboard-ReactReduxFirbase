import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import DiscussionDetails from './components/discussions/DiscussionDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateDiscussion from './components/discussions/CreateDiscussion'
import './index.css'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <h1>Message Board</h1>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
