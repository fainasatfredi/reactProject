import Imagenes from "../assets/imagenes";


export function CartaGrande(){
  
    return(
      <div>
        <div className="card col-9 m-auto mt-5 bg-white bg-opacity-50  ">
            <div className="card-body">
              <div className="principal m-auto">
                <h1 className="blanco"></h1>
                <img src={Imagenes(imagen)} className="w-100"  />
              </div>        
            </div>
        </div>
      </div>
    )

}