function CarHoteles({hotels,fromDate, finalDate,ciudad,precio, tamano}) {
// seccion car hoteles , realiza el map segun la informacion de los filtros 
 
  let hotelesEstado = hotels.filter((x) => moment(x.availabilityFrom).isSameOrBefore(fromDate, 'day')
  && moment(x.availabilityTo).isSameOrAfter(finalDate, 'day'))
  .filter(x => ciudad != "0"? x.country === ciudad: x)
  .filter(x => precio != "0"? x.price === parseInt(precio): x)
  .filter(x => tamano != "0"? (tamano > 20 ? x.rooms > 20: x.rooms <= tamano && x.rooms > tamano - 10): x);
  

    return (
      <section className="hero is-black">
        <div className="container">
           <div className="columns is-multiline is-centered">
         {hotelesEstado.length ?(
            hotelesEstado.map((hotel, i) => (
                <div className="column is-one-third is-black " key={hotel.slug}>
                  <Hotel
                    title={hotel.name}
                    photo={hotel.photo}
                    slug={hotel.slug}
                    description={hotel.description}
                    rooms={hotel.rooms}
                    city={hotel.city}
                    cuntry={hotel.cuntry}
                    price={hotel.price}
                    key={i}
                  />
                </div>
              ))
            ) : (
              <article className="message is-warning">
                <div className="message-body">
                  No hay hoteles que coincidan con los filtros.
                </div>
              </article>
            )}
          </div> 
        </div>
      </section>
    );
  }

