export function Cartas(){
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
        
        <div class="row w-75 m-auto mt-5">
            <div class="col-sm-3 mb-3 mb-sm-0">
              <div class="card bg-white bg-opacity-50">
                <div class="card-body">
                <h1 className="blanco">LLUVIA</h1>
                <Imagenes/>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card bg-white bg-opacity-50  ">
                <div class="card-body">
                  <h1 className="blanco">LLUVIA</h1>
                  <Imagenes/>
                </div>
              </div>
            </div>
          
            <div class="col-sm-3">
              <div class="card bg-white bg-opacity-50">
                <div class="card-body">
                <h1 className=" blanco">LLUVIA</h1>
                <Imagenes/>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card bg-white bg-opacity-50">
                <div class="card-body">
                <h1 className="blanco">LLUVIA</h1>
                <Imagenes/>
                </div>
              </div>
            </div>
        </div>
      </div>
    )

}
function Imagenes(){
  return(
      <div>
          <img src="scr/assets/img/lluvia1.png" alt=" " className="lluvia opacity-100 "/>
      </div>
  )
}