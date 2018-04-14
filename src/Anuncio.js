import React, { Component } from 'react'
import axios from 'axios'

class Anuncio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anuncio: {}
    }

    const id = this.props.match.params.idAnuncio;
    const url = `https://mercadodev-867c6.firebaseio.com/anuncios/${id}.json`;
    axios.get(url)
    .then(data => {
      this.setState({ anuncio: data.data });
    })

  }
  render() {
    return (
      <h1> Anuncio </h1>,
      <p> {JSON.stringify(this.state.anuncio)} </p>
    );
  }
}

export default Anuncio
