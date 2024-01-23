import { useEffect, useState } from "react";

function atras(){


}

export default function Navegador(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };
    const [buscar,setBuscar]=useState('');
    const URL="https://pokeapi.co/api/v2/pokemon/"+buscar;
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
    return( 
    <div className="fixed-top bg-black">
        <header className="d-flex">
            <div className="w-75">  
                <button className=" text-start " >
                  <h3>Kanto</h3>
                </button>
                <button className="  text-start " >
                  <h3>Johto</h3>
                </button>
                <button className="  text-start " >
                  <h3>Hoenn</h3>
                </button>
                <button className=" text-start " >
                  <h3>Sinnoh</h3>
                </button>
                <button className="  text-start " >
                  <h3>Unova</h3>
                </button>
                <button className="  text-start " >
                  <h3>Kalos</h3>
                </button>
            </div> 
            <div className="w-50 d-flex "> 
                <button className="bg-white border-black circulo " onClick={toggleFormulario}><img src="src/assets/img/search.svg" alt="" /></button>
                {mostrarFormulario && (
                <form className="w-100 medio ">
                <input type="text" id={handleSearch} name="campoTexto" className="inform ms-3 "/>
                </form>
            )}
            </div>
       </header>
    </div>
    )
}