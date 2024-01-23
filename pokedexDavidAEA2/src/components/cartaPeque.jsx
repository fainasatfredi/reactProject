import { useEffect, useState } from "react"
import PokemonCard from "./pokemonCard";

export default function CartasPokedex() {
    const [listaPokemon, setListaPokemon] = useState([]);
    useEffect(() => {
        const fetchPokemonList = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            setListaPokemon(data.results);
          } catch (error) {
            console.error('Error fetching Pokemon data:', error);
          }
        };
    
        fetchPokemonList();
      }, []);

    return(
        <div >
            <div className="row ">
                {listaPokemon.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>

        </div>
    )

}