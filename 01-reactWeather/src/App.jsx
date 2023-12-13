
import { Formulario } from './components/WeatherForm'
import { Cartas } from './components/vistaTiempo'

export default function App() {

  return (
    <div >
      <body className='cuerpo'>
        <header>
          <nav></nav>
        </header>
        <main>
          <Formulario></Formulario>
          <Cartas></Cartas>
        </main>
      </body>
    </div>
    
  )
}


