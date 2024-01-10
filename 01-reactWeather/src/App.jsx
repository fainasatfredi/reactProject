
import { Formulario } from './components/WeatherForm'
import { CartaPeque } from './components/cartaPequeña'
import Navegador from './components/navegador'
import { CartaGrande } from './components/cartaGrande'
import { useState } from 'react'
import imagenes from "../assets/imagenes"

const WeatherPanel = () => {
  const apiKey = 'fab27ef47e62a91ab5f42b5be756e304';
  const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=&appid='+apiKey;

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);
    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+loc+'&appid='+apiKey;
    const urlWeather = apiUrl;
    try {
      const response = await fetch(urlWeather);

      if (!response.ok) {
        throw new Error('Error al obtener datos del clima');
      }

      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setShow(false);
    }
  }

  return (

    <Formulario

      newLocation={getLocation}
    />)

}
export default function App() {

  return (
    <body className='cuerpo d-block container-fluid '>
      <Navegador />
      <main>
        <WeatherPanel />
        <CartaGrande></CartaGrande>
        <div className='d-flex container-fluid '>
          <CartaPeque ></CartaPeque>
          <CartaPeque></CartaPeque>
          <CartaPeque></CartaPeque>
          <CartaPeque></CartaPeque>
        </div>
      </main>
    </body>
  )
}

