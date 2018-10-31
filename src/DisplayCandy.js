import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';

class DisplayCandy extends Component {
  constructor() {
    super()
    this.state = {
        candyOne: undefined,
        candyTwo: undefined,
    }
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  getCandy=()=> {
  let number1 = this.getRandomInt(1,11)
  let number2 = this.getRandomInt(11,22)
  axios('http://localhost:8000/bonbons').then(res => {
        const candy1 = res.data[number1].name
        const candy2 = res.data[number2].name
        //console.log(candy1)
        //console.log(candy2)
        this.setState({
            candyOne: candy1,
            candyTwo: candy2,
        })
    });
    
  }
  render() {
    return (
      <div className="App">
      <Navbar name={this.props.location.state.name}/>
       <button onClick={this.getCandy}>Get Candy</button>
        <p>{this.state.candyOne}</p>
        <p>{this.state.candyTwo}</p>
      </div>
    );
  }
}

export default DisplayCandy;
