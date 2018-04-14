import React from 'react'
import HeaderInterno from './HeaderInterno';
import { Link } from 'react-router-dom'

const Categorias = (props) => {
  return (
    <div>
      <HeaderInterno />
      <div className='container' style={{paddingTop: '120px'}}>
        <h1> Categorias </h1>
        <div className="row">
          <div className="col-lg-4">
            {props.categorias.map(
              cat => {
                return (
                  <li><Link to={`/categorias/${cat.url}`}> {cat.categoria} </Link></li>
                )
              }
            )}
            {JSON.stringify(props.categorias)}
          </div>
          <div className="col-lg-8">
          COnteudoooo
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias
