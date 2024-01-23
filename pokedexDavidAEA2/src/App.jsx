import './App.css'
import CartasPokedex from './components/cartaPeque'

import Navegador from './components/navegador'
<link rel="stylesheet" href="App.css" />

function App() {
  return (
    <body className=''>
      <Navegador></Navegador>
      <main className='mt-5'>
        <CartasPokedex></CartasPokedex>
      </main>
    </body>
      
  )
}

export default App
