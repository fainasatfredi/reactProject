
import { Formulario } from './components/WeatherForm'
import Navegador from './components/navegador'
import { Cartas } from './components/vistaTiempo'

export default function App() {

  return (
    <div >
      <body className='cuerpo'>
        <Navegador/>
        <main className='d-block'>
          <Formulario></Formulario>
          <Cartas></Cartas>
        </main>
      </body>
    </div>
    
  )
}


