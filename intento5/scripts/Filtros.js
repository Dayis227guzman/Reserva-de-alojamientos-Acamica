
// seccion de Filtros
function Filtros({

  changeFromdate,
  changeFinalDate,
  changeCiudad,
  changePrecio,
  changeTamano
}) {
  
  return (
      <section className="hero is-primary">
         <div className="hero-body">
                      <div className="container">
                        <div className="columns is-mobile">
  
                            <div className="column">
                              
                              <div className="FromDate">
                                <input
                                type="date"
                                onChange={changeFromdate}
                                
                                />
                  
                              </div>
                            </div>
            

                            <div className="column">
                                          
                              <div className="FinalDate">
                                <input
                                type="date"
                                onChange={changeFinalDate}
                              
                                />
                          
                              </div>
                            </div>

                            <div className="column">
                                              
                                <div className="Ciudad">

                                    <select
                                      onChange={changeCiudad}
                                    >
                                      <option value="0">Todos los países</option>
                                      <option value="Argentina">Argentina</option>
                                      <option value="Brasil">Brasil</option>
                                      <option value="Chile">Chile</option>
                                      <option value="Uruguay">Uruguay</option>
                                    </select>
                                </div>
                                
                              </div>
                            

                              <div className="column">
                                              
                                <div className="Precio">
                                  
                                    <select 
                                    onChange={changePrecio}
                                    >
                                      <option value="0">Cualquier precio</option>
                                      <option value="1">$</option>
                                      <option value="2">$$</option>
                                      <option value="3">$$$</option>
                                      <option value="4">$$$$</option>
                                    </select>
                                </div>
                                
                              </div>
                          

                              <div className="column">
                                              
                                <div className="Tamano">
                                  
                                    <select 
                                    onChange={changeTamano}
                                    >
                                      <option value="0">Cualquier tamaño</option>
                                      <option value="10">Hotel Pequeño</option>
                                      <option value="20">Hotel Mediano</option>
                                      <option value="30">Hotel Grande</option>
                                    </select>
                                  
                                
                                </div>
                              
                            </div>
                            </div>
                            </div>
                        </div>
                      </section>
  );
}
