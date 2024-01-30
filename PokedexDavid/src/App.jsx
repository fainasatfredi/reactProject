import { useState } from 'react'
import './App.css'
import Navegador from './components/navegador'
import CartasPokemon from './components/cartasPokemon'

export default function App() {
  return (
    <>
      <div className=' container-fluid p-0'>
        <Navegador></Navegador>
        <CartasPokemon></CartasPokemon>
   
        
      </div>

    </>
  )
}