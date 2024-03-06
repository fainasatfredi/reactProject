import React, { useState, useEffect } from 'react';

const PokemonCard = ({ pokemonData }) => {
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <img
        src={isShiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <button onClick={handleClick}>Toggle Shiny</button>
    </div>
  );
};

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokémon Card App</h1>
      {pokemonData && <PokemonCard pokemonData={pokemonData} />}
    </div>
  );
};

export default App