import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Winner extends Component {
  constructor() {
    super()
    this.state = {
        winner1: undefined,
        winner2: undefined,
        winner3: undefined,
    }
  }
  getWinner=() => {
  axios('http://localhost:8000/api/winner').then(res => {
  //console.log(winner)
  this.setState({
    winner1 : res.data[0].name,
    winner2 : res.data[1].name,
    winner3 : res.data[2].name,
})
    });
    
  }
  render() {
    return (
    <div className="App">
      <p className="gagnant">Liste des gagnants</p>
      {this.getWinner()}
      <p>{this.state.winner1}</p>
      <p>{this.state.winner2}</p>
      <p>{this.state.winner3}</p>
    </div>
    );
  }
}

export default Winner;