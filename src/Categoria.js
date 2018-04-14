import React, { Component } from 'react'
import axios from 'axios'

class Categoria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anuncios: {}
    }

    this.loadAnuncios = this.loadAnuncios.bind(this);
    this.loadAnuncios();
  }

  loadAnuncios() {
    const url = `https://mercadodev-867c6.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${this.props.match.params.urlCategoria}%22`;
    axios
      .get(url)
      .then( data => {
        this.setState({ anuncios: data.data })
      })
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps)
  }

  render() {
    return (
      <div>
        <h1>
          Categoria:
          {JSON.stringify(this.props.match.params.urlCategoria)}
        </h1>
        <p>{JSON.stringify(this.state.anuncios)}</p>
      </div>
    );
  }
}
export default Categoria
