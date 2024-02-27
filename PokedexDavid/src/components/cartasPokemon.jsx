import React, { useEffect, useState } from 'react';

export default function CartasPokemon({ shiny, setPokemon }) {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const [listaPokemon, setListaPokemon] = useState([]);

    function abrirCarta(pokemon) {
        setPokemon(pokemon)
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const getListaPokemons = async () => {
            try {
                const respuesta = await fetch(urlPokemon);
                const data = await respuesta.json();
                const pokemons = data.results;
                const lista = pokemons.map(async (imagen) => {
                    const response = await fetch(imagen.url)
                    const poke = await response.json()
                    return poke

                })
                const listaConseguida = await Promise.allSettled(lista).then(results => results.map((result) => {
                    if (result.status == "fulfilled") {
                        return result.value
                    }
                }))
                setListaPokemon(listaConseguida);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        }
        getListaPokemons();
    }, []);
    console.log(listaPokemon)
    return (
        <main className="container-fluid mt-5 w-100">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {listaPokemon.map((pokemon) => {
                    console.log(pokemon)
                    return (
                        <>
                            <div onClick={() => abrirCarta(pokemon)} key={pokemon.id} className="col mt-5">
                                <div className="card text-center mx-auto" style={{ width: '28rem', height: '28rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{pokemon.name}</h5>
                                        <div className="w-75 mx-auto my-5" style={{ width: '60%', height: '50%' }}>
                                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={ shiny ? pokemon.sprites.other['official-artwork'].front_shiny : pokemon.sprites.other['official-artwork'].front_default} alt="" />
                                            <h5 className="card-title text-truncate">{pokemon.types.map(type => type.type.name).join(', ')}</h5>
                                            <h5 className="card-title">{pokemon.id}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div>
        </main>
    );

}
