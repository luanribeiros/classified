import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3> Últimos Anúncios </h3>
          <div className="row">
            <AnuncioHome />
            <AnuncioHome />
            <AnuncioHome />
          </div>
          <h3> Categorias </h3>
          <div className="row">
          <LinkCategoria categoria={ { categoria: 'Carros', icon: 'fa-lightbulb-o' } } />
          <LinkCategoria categoria={ { categoria: 'Carros', icon: 'fa-lightbulb-o' } } />
          <LinkCategoria categoria={ { categoria: 'Carros', icon: 'fa-lightbulb-o' } } />
          <LinkCategoria categoria={ { categoria: 'Carros', icon: 'fa-lightbulb-o' } } />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
