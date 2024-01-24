<div>
    <button className="bg-white border-bottom text-start " onClick={atras}> <img src="src/assets/img/atras.svg" alt="" className="start-0 " /></button>
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="scr/assets/img/pokeball.png" alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button >
                            <h3>Kanto</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button  >
                            <h3>Johto</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button  >
                            <h3>Hoenn</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className=" text-start " >
                            <h3>Sinnoh</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button  >
                            <h3>Unova</h3>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button  >
                            <h3>Kalos</h3>
                        </button>
                    </li>
                </ul>
                <div className="w-50 d-flex "> 
                <button className="bg-white border-black circulo " onClick={toggleFormulario}><img src="src/assets/img/search.svg" alt="" /></button>
                {mostrarFormulario && (
                <form className="w-100 medio ">
                <input type="text" id={handleSearch} name="campoTexto" className="inform ms-3 "/>
                </form>
            )}
            </div>
            </div>
        </div>
    </nav>
    </header>













    
    <div className="fixed-top bg-black">
      
        <header className="d-flex">
            <div className="w-75">  
                <li className="nav-item"><button >
                  <h3>Kanto</h3>
                </button></li>
                <li className="nav-item"><button  >
                  <h3>Johto</h3>
                </button></li>
                <li className="nav-item"><button  >
                  <h3>Hoenn</h3>
                </button></li>
                <li className="nav-item"><button className=" text-start " >
                  <h3>Sinnoh</h3>
                </button></li>
                <li className="nav-item"><button  >
                  <h3>Unova</h3>
                </button></li>
                <li className="nav-item"><button  >
                  <h3>Kalos</h3>
                </button></li>
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
</div> 