import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Login from './Login';
import NavBar from './Navbar';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="homePage">
        <NavBar />
        <div>

          <NavLink exact to="/" activeClassName="selected"></NavLink>
          <NavLink to="/GetCandy" activeClassName="selected"></NavLink>
          <Login />
        </div>
      </div>
    );
  }
}

export default Home;
