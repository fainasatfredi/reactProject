// CartasPokemon.js
import React, { useEffect, useState } from 'react';

const CartasPokemon = ({ shiny, setPokemon, setCartaAbierta, cartaAbierta }) => {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [listaPokemon, setListaPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const abrirCarta = (pokemon) => {
    setCartaAbierta(true);
    setPokemon(pokemon);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getListaPokemons = async () => {
      try {
        const respuesta = await fetch(urlPokemon);
        const data = await respuesta.json();
        const pokemons = data.results;
        const lista = await Promise.all(
          pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokeData = await response.json();
            return pokeData;
          })
        );

        setListaPokemon(lista);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getListaPokemons();
  }, []);

  if (loading) {
    return <img className="mx-auto d-block w-25 mt-5" src="cargaPagina.gif" alt="Loading" />;
  }

  return (
    <main className="container-fluid mt-5 w-100">
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {listaPokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className={`col mt-5 puntero ${cartaAbierta ? '' : 'd-none'}`}
            onClick={() => abrirCarta(pokemon)}
          >
            <div className="card text-center mx-auto rounded-5 ">
              <div className="card-body ">
                <h5 className="card-title text-truncate">{pokemon.name}</h5>
                <div className="w-75 mx-auto my-5" style={{ width: '60%', height: '50%' }}>
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    src={shiny ? pokemon.sprites.other['official-artwork'].front_shiny : pokemon.sprites.other['official-artwork'].front_default}
                    alt=""
                  />
                  <h5 className="card-title text-truncate">{pokemon.types.map((type) => type.type.name).join(', ')}</h5>
                  <h5 className="card-title">{pokemon.id}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CartasPokemon;
