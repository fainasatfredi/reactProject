import { useState } from 'react'
import './App.css'
import Navegador from './components/navegador'
import CartasPokemon from './components/cartasPokemon'

export default function App() {
  return (
    <>
      <div className=' container-fluid w-100'>
        <Navegador></Navegador>
        <CartasPokemon></CartasPokemon>
   
        
      </div>

    </>
  )
}