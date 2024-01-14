
import { useEffect, useState } from 'react';
import Imagenes from './assets/imagenes';
import Navegador from './components/navegador';

export default function App() {
  
  const apiKey = 'fab27ef47e62a91ab5f42b5be756e304';
  const [buscar, setBuscar] = useState('madrid');
  const [values, setValues] = useState('')
  const [imagen, setImagen] = useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${buscar}&lang=es&units=metric&appid=`+apiKey;

  const getData = async () => {
    await fetch(URL)
      .then(response => {return response.json()})
      .then( data => {
        if(data.cod >= 400) {
          setValues(false)
        }else{         
          setImagen(data.weather[0].main)
          setValues(data)
        }        
      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleSearch = (e) => {
    if(e.key === 'Enter'){      
      setBuscar(e.target.value)
    }
  }
  useEffect(()=>{
    getData()
  },[buscar]) 
  
  return (
    <body className='cuerpo d-block '>
      <Navegador></Navegador>
      <div className="container">
        <div className='row'>
          <input 
            onKeyDown={handleSearch}
            type="text"          
            autoFocus
          />
        </div>
      </div>

      <div className='card mt-4 w-75 m-auto '>
        {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='imagen' src={Imagenes(imagen)} alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              <p>{values.wind.speed}</p>
            </div>
          </div>
          
          
        ) : (
          <h1>{"City not found"}</h1>
        )}

      </div>
      <div className='d-flex w-75 m-auto'>
      <div className='card mt-4 col-3 '>

      {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='w-25' src={Imagenes(imagen)} alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              <p>{values.wind.speed}</p>
            </div>
          </div>
          
          
        ) : (
          <h1>{"City not found"}</h1>
        )}
      </div>
      <div className='card mt-4 col-3 '>

      {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='w-25  ' src={Imagenes(imagen)} alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              <p>{values.wind.speed}</p>
            </div>
          </div>
          
          
        ) : (
          <h1>{"City not found"}</h1>
        )}
      </div>
      <div className='card mt-4 col-3 '>

      {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='w-25' src={Imagenes(imagen)} alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              <p>{values.wind.speed}</p>
            </div>
          </div>
          
          
        ) : (
          <h1>{"City not found"}</h1>
        )}
      </div>
      <div className='card mt-4 col-3 '>

      {(values) ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='w-25' src={Imagenes(imagen)} alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              <p>{values.wind.speed}</p>
            </div>
          </div>
          
          
        ) : (
          <h1>{"City not found"}</h1>
        )}
      </div>
      </div>
    </body>  
  )
}

