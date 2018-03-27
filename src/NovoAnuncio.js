import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import base from './base'

class NovoAnuncio extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const novoAnuncio = {
      nome: this.nome.value,
      descricao: this.descricao.value,
      preco: this.preco.value,
      telefone: this.telefone.value,
      vendedor: this.vendedor.value,
      foto: 'http://placehold.it/200x140'
    };
    base.push('anuncios', {
      data: novoAnuncio
    }, (err) => {
      if(err) {

      }else {

      }
    })
    console.log(NovoAnuncio);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <HeaderInterno />
        <div className='container' style={{ paddingTop: '120px'}}>
          <h1>Novo Anúncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' placeholder='Nome'
                     ref={ (ref) => this.nome = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Descrição</label>
              <input type='text' className='form-control' id='descricao' placeholder='Descrição'
                     ref={ (ref) => this.descricao = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Preço</label>
              <input type='text' className='form-control' id='preco' placeholder='Preço'
                     ref={ (ref) => this.preco = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Telefone</label>
              <input type='text' className='form-control' id='telefone' placeholder='Telefone'
                     ref={ (ref) => this.telefone = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Vendedor</label>
              <input type='text' className='form-control' id='vendedor' placeholder='Vendedor'
                     ref={ (ref) => this.vendedor = ref } />
            </div>
            <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NovoAnuncio
