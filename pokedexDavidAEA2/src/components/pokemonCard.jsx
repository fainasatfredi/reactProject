import React, { useEffect, useState } from 'react';

export default function PokemonCard({ pokemon }) {
    
    return (
        <div className='mostrarCartas col-4 mt-5'>
            <div className="card mostrarCartas m-auto ">
                <div className="card-body ">
                    
                    <h3 className="card-title">{pokemon.name}</h3>
                    {/* Puedes agregar más detalles del Pokémon aquí */}
                </div>
            </div>
        </div>
    );

}

