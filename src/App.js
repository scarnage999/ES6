import React, { Component } from 'react';
import './App.css';
import Personajes from './componentes/personajes';
import Config from './config'
import Op from './e6.js'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {datos:Config}
  }
  render() {

    let sum = new Op.Operaciones(20,10)
    let dolar = new Op.Extras(40,50)
    return (
      <div className="App">
        <Personajes lista={this.state.datos}/>
        <h4>{sum.calcular()}</h4>
        <h4>{dolar.calcular()}</h4>
        
      </div>
    );
  }
}

export default App;
