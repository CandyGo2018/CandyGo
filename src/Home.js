import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Login from '/Login';
import GetCandy from './GetCandy';
import Bonbondex from './Bonbondex';

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
 
  render() {
    return (
              <div>
                <NavLink exact to="/" activeClassName="selected"> Index </NavLink>
                <NavLink to="/GetCandy" activeClassName="selected"> GetCandy </NavLink>
              </div>
    );
  }
}

export default Home;
