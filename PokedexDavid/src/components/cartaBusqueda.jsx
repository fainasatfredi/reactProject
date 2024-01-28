import React from 'react';

const CartaBusqueda = ({ pokemon }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        {/* Agrega aquí cualquier otra información que desees mostrar sobre el Pokémon */}
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default CartaBusqueda;
