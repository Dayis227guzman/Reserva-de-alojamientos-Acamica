class App extends React.Component {
  //inicializar estados
  state = {
      hotels: hotelsData,
      ifromDate: moment(), 
      ifinalDate: moment(),
      iCuidad: "0",
      iPrecio: "0",
      iTamano: "0"
  };

  // cambio de estados

  handleFromDateChange = e => {
    let fromDate = moment(e.target.value);
    this.setState({
      ifromDate:fromDate
    });
 
  }; 

  handleFinalDateChange = e => {
    let finalDate = moment(e.target.value);
    this.setState({
      ifinalDate: finalDate
    });
  }; 

  handleCiudadChange = e => {
    let ciudad = e.target.value;
    this.setState({
      iCuidad: ciudad
    });
  };

  handlePrecioChange = e => {
    let precio = e.target.value;
    this.setState({
      iPrecio: precio
    });
  };

  handleTamanoChange = e => {
    let tamano = e.target.value;
    this.setState({
      iTamano: tamano
    });
  };

  render() {
    return (
      //a cada componente hijo se envian datos con los que va a trabajar
      <div>
        
        <Titulo   
            fromDate={this.state.ifromDate}
            finalDate={this.state.ifinalDate}
            ciudad={this.state.iCuidad}
            precio={this.state.iPrecio}
            tamano ={this.state.iTamano}

        />
  
       <Filtros
         
          changeFromdate={this.handleFromDateChange}
          changeFinalDate={this.handleFinalDateChange}
          changeCiudad={this.handleCiudadChange}
          changePrecio = {this.handlePrecioChange }
          changeTamano = {this.handleTamanoChange }
          />  

       <CarHoteles 
          hotels={this.state.hotels} 
          fromDate={this.state.ifromDate}
          finalDate={this.state.ifinalDate}
          ciudad={this.state.iCuidad}
          precio={this.state.iPrecio}
          tamano ={this.state.iTamano}
          /> 
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
