import { useState } from "react";

function atras(){


}
export default function Navegador(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };
    return( 
    <div className="fixed-top ">
        <header className="d-flex">
            <div className="w-50 border-bottom">  
                <button className="bg-white border-bottom text-start " onClick={atras}> <img src="src/assets/img/atras.svg" alt="" className="start-0 " /></button>
            </div> 
            <div className="w-50 d-flex "> 
                <button className="bg-white align-middle " onClick={toggleFormulario}><img src="src/assets/img/search.svg" alt="" /></button>
                {mostrarFormulario && (
                <form className="w-100 align-middle ">
                <input type="text" id="campoTexto" name="campoTexto" className="align-middle w-100"/>
                </form>
            )}
            </div>
       </header>
    </div>
    )
}