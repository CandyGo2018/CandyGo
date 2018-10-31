import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Login from './Login';
import GetCandy from './GetCandy';
import Bonbondex from './Bonbondex';
import DisplayCandy from './DisplayCandy';
import Winner from './Winner';
import GiveMeCandy from './GiveMeCandy';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
 
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
        <NavLink to="/GetCandy" activeClassName="selected"> Get Candy </NavLink>
        <NavLink to="/Bonbondex" activeClassName="selected"> Bonbondex </NavLink>
        <NavLink to="/DisplayCandy" activeClassName="selected"> DisplayCandy </NavLink>
        <NavLink to="/Winner" activeClassName="selected"> Winner </NavLink>
        <NavLink to="/GiveMeCandy" activeClassName="selected"> GiveMeCandy </NavLink>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/GetCandy" component={GetCandy} />
          <Route path="/Bonbondex" component={Bonbondex} />
          <Route path="/DisplayCandy" component={DisplayCandy} />
          <Route path="/Winner" component={Winner} />
          <Route path="/GiveMeCandy" component={GiveMeCandy} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
