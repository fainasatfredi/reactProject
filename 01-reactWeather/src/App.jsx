
import { Formulario } from './components/WeatherForm'
import Navegador from './components/navegador'
import { Cartas } from './components/vistaTiempo'

export default function App() {

  return (
    <div >
      <body className='cuerpo d-block'>
        <Navegador/>
        <main>
          <Formulario></Formulario>
          <Cartas></Cartas>
        </main>
      </body>
    </div>
    
  )
}


