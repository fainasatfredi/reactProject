

export function CartaGrande(){
  
    return(
      <div>
        <div className="card col-9 m-auto mt-5 bg-white bg-opacity-50  ">
            <div className="card-body">
              <div className="principal m-auto">
                <h1 className="blanco">LLUVIA</h1>
                <Imagenes/>
              </div>        
            </div>
        </div>
      </div>
    )

}
function Imagenes(){
  return(
      <div>
          <img src="src/assets/img/lluvia1.png" alt=" " className="lluvia opacity-100 "/>
      </div>
  )
}