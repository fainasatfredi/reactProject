import React from "react"


export function Cartas(){
    return(
      <div>
        <div className="card col-9 m-auto mt-5">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="principal m-auto">
                <h1 className="card-title">LLUVIA</h1>
                <Imagenes/>
              </div>        
            </div>
        </div>
        
        <div class="row w-75 m-auto mt-5">
            <div class="col-sm-3 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                <h1 className="card-title">LLUVIA</h1>
                <Imagenes/>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h1 className="card-title">LLUVIA</h1>
                  <Imagenes/>
                </div>
              </div>
            </div>
          
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                <h1 className="card-title">LLUVIA</h1>
                <Imagenes/>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                <h1 className="card-title">LLUVIA</h1>
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
          <img src="lluvia.png" alt=" " className="lluvia"/>
      </div>
  )
}