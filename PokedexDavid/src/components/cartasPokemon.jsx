import React, { useEffect, useState } from 'react';

export default function CartasPokemon({pokemon}) {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const [listaPokemon, setListaPokemon] = useState([]);

    useEffect(() => {
        const getListaPokemons = async () => {
            try {
                const respuesta = await fetch(urlPokemon);
                const data = await respuesta.json();
                const pokemons = data.results;
                const imagenes= pokemons.map(async(imagen)=>{
                    const response= await fetch(imagen.url)
                    const ima=await response.json()
                    return{
                        id:ima.id,
                        name:ima.name,
                        img:ima.sprites.other.dream_world.front_default
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
                            <div className="card w-75  h-100 m-auto">
                                <div className="card-body text-center ">
                                    <h5 className="card-title  ">{pokemon.name}</h5>
                                    <img  className="w-50 " src={pokemon.img} alt="" />
                                    <h5 className="card-title">{pokemon.id}</h5>
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
  