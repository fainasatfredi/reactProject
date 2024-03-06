
const Imagenes = (imagen) => {
    switch (imagen) {
        case 'Thunderstorm':
            imagen='src/assets/img/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;    
        case 'Drizzle':
            imagen='src/assets/img/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            imagen='src/assets/img/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            imagen='src/assets/img/snowy.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            imagen='src/assets/img/soleadoDespejado.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            imagen='src/assets/img/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            imagen='src/assets/img/fog.svg'
            console.log('NUBES');
            break;  
        case 'Fog':
            imagen='src/assets/img/fog.svg'
            console.log('NUBES');
            break;    
        case 'Haze':
            imagen='src/assets/img/haze.svg'
            console.log('BRUMAS');
            break;   
        case 'Smoke':
            imagen='src/assets/img/smoke.svg'
            console.log('HUMO');
            break;      
        default:
            imagen='src/assets/img/soleadoDespejado.svg'
            console.log('LIMPIO');    
    }
  return imagen

}
export default Imagenes