import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Personajes from './componentes/personajes';
import Config from './config'
import Operaciones from './e6.js'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {datos:Config}
  }
  render() {

    let sum = new Operaciones(20,10)
    return (
      <div className="App">
        <Personajes lista={this.state.datos}/>
        <h4>{sum.suma()}</h4>
        
      </div>
    );
  }
}

export default App;
