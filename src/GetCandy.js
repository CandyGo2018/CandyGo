import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class GetCandy extends Component {
  constructor() {
    super()
    this.state = {
      numRue : undefined,
      num : 0,
      res: undefined,
    }
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  getAddress=() => {
    let num = this.state.num
  axios('https://api-adresse.data.gouv.fr/search/?q=lyon&postcode=69002&type=street&limit=100').then(res => {
        this.setState({
            numRue: this.getRandomInt(1,35),
            num: num +1,
            res: res.data.features[num].properties.label,
        })  
    });
    
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.getAddress}>Get Address</button>
        <p>{this.state.numRue} {this.state.res}</p>
        
      </div>
    );
  }
}

export default GetCandy;
