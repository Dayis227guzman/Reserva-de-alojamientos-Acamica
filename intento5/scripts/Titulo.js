//se crea una constante de formato moment para la vista de la fecha en el formato deseado
const dateFormat = (date) => `${moment(date).format('dddd')}, ${moment(date).format('D')} de ${moment(date).format('MMMM')} de ${moment(date).format('YYYY')}`

function Titulo({fromDate, finalDate,ciudad,precio, tamano}) {

//Seccion titulo, muestra el titulo y el resumen de los filtros, mediante condicionales de valores iniciales

    return (
      <section className="hero is-black is-bold">
        <div className="hero-body">
          <div className="container">
          <div className="title has-text-primary">
            <h1 className="level-item has-text-primary-centered">Reserva Hoteles</h1>
            <br/>
    
           <h2 className ="subtitle"> 
           
           <br/>
            {fromDate ? ` Su reserva va desde el  ${dateFormat(fromDate)}, ` : ''}
            <br/>
            {finalDate ? ` hasta el  ${dateFormat(finalDate)}` : ''}
            <br/>
            <br/>
            {ciudad!="0" ? ` En la ciudad de  ${(ciudad)}` : ''}
            <br/>
            {precio!="0" ? ` Precio por habitacion ${(precio)}` : ''}
            <br/>
            {tamano!="0" ? ` Cantidad habitaciones del hotel ${(tamano)}` : ''}
            
            </h2> 
            
            <br/>
            <h2></h2>
          </div>
          </div>
        </div>
      </section>
    );
  }
