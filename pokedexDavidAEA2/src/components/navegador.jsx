import { useEffect, useState } from "react";

function atras(){


}

export default function Navegador(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };
    
      const handleSearch = (e) => {
        if(e.key === 'Enter'){      
          setBuscar(e.target.value)
        }
      }
      
    return(
      <div className="fixed-top "> 
    <header>
    <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
            <img src="scr/assets/img/pokeball.png" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button  className="bg-black">
                            <h3>Kanto</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button   className="bg-black">
                            <h3>Johto</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button   className="bg-black">
                            <h3>Hoenn</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="bg-black">
                            <h3>Sinnoh</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button   className="bg-black">
                            <h3>Unova</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button   className="bg-black">
                            <h3>Kalos</h3>
                        </button>
                    </li>
                </ul>
                <div className="w-50 d-flex "> 
                <button className="bg-white border-black circulo " onClick={toggleFormulario}><img src="src/assets/img/search.svg" alt="" /></button>
                {mostrarFormulario && (
                <form className="w-100 medio " >
                <input type="text" id={handleSearch} name="campoTexto" className="inform ms-3 "/>
                </form>
            )}
            </div>
            </div>
        </div>
    </nav>
    </header>
    </div>

    )
}