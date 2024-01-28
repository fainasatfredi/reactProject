import React, { useState } from 'react';

import CartaBusqueda from './cartaBusqueda';

export default function Navegador() {
    const [buscar, setBuscar] = useState('');
    const [pokemon, setPokemon] = useState(null);

    const buscarPokemon = async () => {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${buscar.toLowerCase()}`;
        try {
            const response = await fetch(urlPokemon);
            if (response.ok) {
                const data = await response.json();
                setPokemon(data);
            } else {
                console.error(`Error fetching Pokemon data: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    return (
        <div>
            <header className="fixed-top ">
                <nav className="navbar navbar-expand-lg bg-black  ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white " href="#"><img src="src/assets/img/pokeball.png" className='navbar-toggler-icon ' alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <button className="nav-link text-white " href="#"><h3>Kanto</h3></button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white " href="#"><h3>Joenn</h3></button>
                                </li>
                            </ul>
                            <form onSubmit={e=>{e.preventDefault();}} className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setBuscar(e.target.value)} />
                                <button className="btn btn-outline-success" onClick={buscarPokemon} type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            {pokemon && <CartaBusqueda pokemon={pokemon} />}
        </div>
    );
}
