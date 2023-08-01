import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnLoQuiero from '../Profile/BtnLoQuiero';
import '../../styles/Destinos/DetalleDestino.css';


const DetalleDestino = () => {
  const tipoProducto = 'destination';
  const { idDestino } = useParams();
  const [destination, setDestination] = useState(undefined);

  const getDataAPI = async ( ) => {

    // const findDestination = await axios.get(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
    const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
    const findDestination = await response.json();

    console.log(findDestination[0]);
    setDestination(findDestination[0]);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  if(destination){
    return (
      <>
    <div className="destino-imageContainer">
          <img
            src={destination.destinationImg[0]}
            alt={destination.destinationPlace}
            className="destino-image"
          />
          <div className="small-images">
          <img
            src={destination.destinationImg[1]}
            alt={destination.destinationPlace}
            className="destino-image"
          />
          <img
            src={destination.destinationImg[2]}
            alt={destination.destinationPlace}
            className="destino-image"
          />
          <img
            src={destination.destinationImg[3]}
            alt={destination.destinationPlace}
            className="destino-image"
          />
          </div>
        </div>

        <div className="destino-info">
          <h2 className="destino-name">
            {destination.destinationDate} ({destination.destinationDescription})
          </h2>
          <p className="destino-p1">
            Hotel: {destination.destinationHotel.hotelName}
          </p>
          <p className="destino-p1">
            Categoría: {destination.destinationHotel.hotelCategory}
          </p>
          <p className="destino-p1">
            Emplazamiento: {destination.destinationHotel.hotelLocation}
          </p>
          <p className="destino-p2">Precio:{destination.destinationPrice}€</p>
        </div>
        <BtnLoQuiero tipoProducto = {tipoProducto} idProducto={idDestino} />
      </>
    );

  }
  



};

export default DetalleDestino;
