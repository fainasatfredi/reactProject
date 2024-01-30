import React, { useEffect, useState } from 'react';

export default function CartasPokemon({ pokemon }) {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const [listaPokemon, setListaPokemon] = useState([]);

    useEffect(() => {
        const getListaPokemons = async () => {
            try {
                const respuesta = await fetch(urlPokemon);
                const data = await respuesta.json();
                const pokemons = data.results;
                const imagenes = pokemons.map(async (imagen) => {
                    const response = await fetch(imagen.url)
                    const ima = await response.json()
                    return {
                        id: ima.id,
                        name: ima.name,
                        img: ima.sprites.other.dream_world.front_default
                    }


                })
                setListaPokemon(await Promise.all(imagenes));
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        }

        getListaPokemons();
    }, [urlPokemon]);

    return (
        <main className='container-fluid mt-5 w-100'>
            <div className=" row row-cols-1 row-cols-md-3 g-4">
                {listaPokemon && listaPokemon.length > 0 ? (
                    listaPokemon.map((pokemon, index) => (
                        <div key={index} className="  mt-5">
                            <div className="card text-center m-auto d-flex" style={{ width: '30rem', height: "30rem" }} >
                                <div className="card-body "style={{alignItems:"flex-end"}}>
                                        <h5 className="card-title  ">{pokemon.name}</h5>
                                        <div className='w-75 mx-auto my-5 ' style={{width:"60%",height:"50%"}} >
                                            <img className="" style={{ width: '10rem', height: "10rem" }} src={pokemon.img} alt="" />
                                        </div>
                                        <h5 className="card-title mx-auto " style={{border:"solid 2px black",marginTop:"4em"}}>{pokemon.id}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
}
