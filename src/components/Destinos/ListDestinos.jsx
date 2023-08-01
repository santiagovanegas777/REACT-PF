import React from 'react'
import '../../styles/Destinos/ListDestinos.css'
import { Link } from 'react-router-dom';

const renderDestinations = (destinations) =>{
    return destinations.map((destination,i) => (
        <Link to={`./${destination._id}`}style={{textDecoration: 'none'}} key={i}>
      <li key={destination.id} className="destino">
        <div className="destino-imageContainer">
          <img
            src={destination.destinationImg[0]}
            alt={destination.destinationPlace}
            className="destino-image"
          />
        </div>
        <div className="destino-info">
          <h2 className="destino-name">
            {destination.destinationPlace} ({destination.destinationDescription})
          </h2>
          <p className="destino-p1">Hotel: {destination.destinationHotel.hotelName}</p>
          <p className="destino-p2">Precio:{destination.destinationPrice}€</p>

        </div>
      </li>
      </Link>
    ));

}
const ListDestinos = ({destinations}) => {

  return (
    <section>{renderDestinations(destinations)}</section>
  )
}

export default ListDestinos