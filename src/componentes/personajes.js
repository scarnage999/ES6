import React, { Component } from 'react';

class Personajes extends Component {



  render() {

    return (
      <div className="App">
        <ul>
        {
              this.props.lista.map((personaje)=>{
              return <li key={personaje.id}>{personaje.name}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Personajes;