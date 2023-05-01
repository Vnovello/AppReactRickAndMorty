import React from 'react'
import { Link, useParams } from 'react-router-dom'

import RickAndMortyService from '../../services/RickAndMorty.service';
import { useEffect } from 'react';
import { useState } from 'react';

export const Detail = () => {

  const [mascotas, setMascotas] = useState({});

  const {id} = useParams(); 


  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => setMascotas(data))
  },[])

  console.log(mascotas);


  
 const detailCard = {
  width: '80%',
  margin: 'auto',
  background: 'white'
 }

  return (
    <div className="card mb-3" style={{'background': 'gainsboro'}}>
    <div className="row g-0 mt-4 mb-4" style={detailCard}>
      <div className="col-md-3">
        <img src={mascotas.image} className="img-fluid rounded-start imgDetalle" alt="img del personaje"/>
      </div>
      <div className="col-md-8 detallePersonaje">
        <div className="card-body">
          <h5 className="card-title">{mascotas.name}</h5>
          <p className="card-text"><small className=""> Specie: {mascotas.species}</small></p>
          <p className="card-text"><small className=""> Status: {mascotas.status}</small></p>
          <p className="card-text"><small className=""> Gender: {mascotas.gender}</small></p>
          <p className="card-text"><small className=""> Created: {mascotas.created}</small></p>
        </div>
        <div className="btn-group" style={{'marginLeft': '15px'}}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={"/"} className="nav-link px-2 text-success">Inicio</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
  )
}