export function CartaPeque(){
    return(
        
        <div className="container-fluid ">
            <div class="w-75 m-auto mt-5">
                <div class="col-sm-3 mb-3 mb-sm-0 w-100 ">
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
          <img src="src/assets/img/lluvia1.png" alt=" " className="lluvia opacity-100 "/>
      </div>
  )
}