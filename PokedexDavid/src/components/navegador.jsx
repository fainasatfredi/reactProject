import React, { useState } from 'react';

export default function Navegador({setPokemon,setShiny,shiny}){
    const [buscar, setBuscar] = useState('');
    
    
    
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${buscar.toLowerCase()}`;
    
    const buscarPokemon = async () => {
        try {
            const response = await fetch(urlPokemon);
            if (response.ok) {
                const data = await response.json();
                setPokemon(data);
                console.log(data)
            } else {
                console.error(`Error fetching Pokemon data: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    const ponerShiny = () => {
        setShiny(!shiny);
    
    };
    
    console.log(shiny)

    return (
        <>
            <header className="sticky-top w-100">
                <nav className="navbar navbar-expand-lg bg-black  ">
                    <div className="container-fluid ">
                        <a className="navbar-brand text-white " href="#"><img src="src/assets/img/pokeball.png" className='navbar-toggler-icon ' alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <button className="nav-link text-white "><h3>Normal</h3></button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white " href="#"><h3>Joenn</h3></button>
                                </li>
                            </ul>
                            <button className="btn btn-outline-success me-3" onClick={ponerShiny} type="button">Shiny</button>
                            <form onSubmit={e=>{e.preventDefault();}} className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setBuscar(e.target.value)} />
                                <button className="btn btn-outline-success" onClick={buscarPokemon} type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
           
        </>
    );
}
