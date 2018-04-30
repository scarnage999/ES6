import React, { Component } from 'react';
import './App.css';
import Personajes from './componentes/personajes';
import Config from './config'
import {Operaciones,Extras} from './e6.js'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {datos:Config}
  }
  render() {

    let sum = new Operaciones(20,10)
    let extras = new Extras(40,50)
    return (
      <div className="App">
        <h1>Personajes</h1>
        <Personajes lista={this.state.datos}/>
        <h4>{sum.calcular()}</h4>
        <h4>{extras.calcular()}</h4>
        <h4>{extras.calcularIva()}</h4>
        <h4>{extras.calcularRetenciones()}</h4>
        <h4>Suma Numeros{extras.calcularNumeros()}</h4>
        <h4>Obtiene Libro: {extras.ObtenerLibro()}</h4>
        
      </div>
    );
  }
}

export default App;
