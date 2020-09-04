//Vista informacion de Hotel
function Hotel(props) {
  return (

    // tarjeta de como se ve la info de cada hotel
    <div className="card-content">
      
      <div className="subtitle">
         <p className="has-text-primary">{props.title}</p>
      </div>

      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.photo} alt={props.title} />
        </figure>
      </div>

      <div className="card-content">
                
        <p>{props.description}</p>
        <br/>        
        <p> Este Hotel tiene un maximo de: {props.rooms}  habitaciones </p>
        <p>Precio: {props.price}</p>
        <p>{props.city},{props.country}</p>
                
      </div>
      <div className="card-footer">
        <button
          className="card-footer-item has-background-primary has-text-white 
                    has-text-weight-bold"
                    onClick={() => { alert('Reserva Realizada' ) }}
        >
          RESERVAR
        </button>
      </div>
    </div>
  );
}
