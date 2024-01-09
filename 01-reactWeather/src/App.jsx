
import { Formulario } from './components/WeatherForm'
import { CartaPeque } from './components/cartaPequeña'
import Navegador from './components/navegador'
import { CartaGrande } from './components/cartaGrande'
import { useState } from 'react'

const WeatherPanel=()=>{

  let urlWeather="https://pro.openweathermap.org/data/2.5/forecast/hourly?appid=fab27ef47e62a91ab5f42b5be756e304&lang=es"
  let cityUrl="&q="
  const[weather,setWeahter]=useState([]);
  const[location,setLocation]=useState("");
  const[loading,setLoading]=useState(false);
  const[show,setShow]=useState(false);
  const getLocation=async(loc)=>{
    setLoading(true);
    setLocation(loc);

    urlWeather=urlWeather+ cityUrl+loc;
    await fetch(urlWeather).then((response)=>{
      if(!response.ok)throw{response}
      response.json();
    }).then((weatherData)=>{
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(error=>{
      console.log(error.response);
      setLoading(false)
      setShow(false)

    })
  }
  return(
  
  <Formulario
  
  newLocation={getLocation}
  />)
  
}
export default function App() {

  return (
    
      <body className='cuerpo d-block'>
        <Navegador/>
        <main>
          <WeatherPanel/>
          <CartaGrande></CartaGrande>
          <div className='d-flex container-fluid '>
            <CartaPeque></CartaPeque>
            <CartaPeque></CartaPeque>
            <CartaPeque></CartaPeque>
            <CartaPeque></CartaPeque>
          </div>
        </main>
      </body>

    
  )
}


