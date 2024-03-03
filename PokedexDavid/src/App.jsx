import { useState } from 'react';
import './App.css';
import Navegador from './components/Navegador';
import CartasPokemon from './components/cartasPokemon';
import CartaBusqueda from './components/CartaBusqueda';

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);
  const [cartaAbierta, setCartaAbierta] = useState(true);

  return (
    <div className='container-fluid p-0'>
      <Navegador setPokemon={setPokemon} setShiny={setShiny} shiny={shiny} />
      {pokemon && <CartaBusqueda pokemon={pokemon} shiny={shiny}  setPokemon={setPokemon} />}
      <CartasPokemon shiny={shiny} setPokemon={setPokemon} setCartaAbierta={setCartaAbierta} cartaAbierta={cartaAbierta} />
    </div>
  );
}
