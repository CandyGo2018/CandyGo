import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class GiveMeCandy extends Component {
  constructor() {
    super()
    this.state = {
        candyOne: undefined,
        candyTwo: undefined,
        numRue: undefined,
        nbCandy: undefined,
        num: 0,
        res: undefined,
    }
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  giveMeCandy=()=> {
    let num = this.state.num
    axios('https://api-adresse.data.gouv.fr/search/?q=lyon&postcode=69002&type=street&limit=100').then(res1 => {
            this.setState({
                numRue: this.getRandomInt(1,35),
                num: num +1,
                res: res1.data.features[num].properties.label,
            })  
        });

    let number1 = this.getRandomInt(1,11)
    let number2 = this.getRandomInt(11,22)
    axios('http://localhost:8000/bonbons').then(res2 => {
            const candy1 = res2.data[number1].name
            const candy2 = res2.data[number2].name
            //console.log(candy1)
            //console.log(candy2)
            this.setState({
                nbCandy1: this.getRandomInt(1, 5) + " x",
                nbCandy2: this.getRandomInt(1, 5) + " x",
                candyOne: candy1,
                candyTwo: candy2,
            })
        });
  }
  render() {
    return (
      <div className="App">
       <button onClick={this.giveMeCandy}>Get Candy</button>
        <p>{this.state.numRue} {this.state.res}</p>
        <p>{this.state.nbCandy1} {this.state.candyOne}</p>
        <p>{this.state.nbCandy2} {this.state.candyTwo}</p>
      </div>
    );
  }
}

export default GiveMeCandy;