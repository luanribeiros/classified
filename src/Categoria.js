import React, { Component } from 'react'

// https://mercadodev-867c6.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22esportes-e-lazer%22

class Categoria extends Component {
  render() {
    return (
      <h1> Categoria: {JSON.stringify(props.match.params.urlCategoria)} </h1>
    );
  }
}
export default Categoria
