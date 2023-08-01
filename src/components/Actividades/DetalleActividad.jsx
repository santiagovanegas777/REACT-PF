import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnLoQuiero from '../Profile/BtnLoQuiero';
import '../../styles/Actividades/DetalleActividades.css';

const DetalleActividad = () => {
    const tipoProducto = 'activity';
    const { idActividad } = useParams();
    const [activity, setActivity] = useState(undefined);
  
    const getDataAPI = async ( ) => {
  
      // const findDestination = await axios.get(`https://api-node-viajes.vercel.app/destinations/id/${idactividad}`);
      const response = await fetch(`https://api-node-viajes.vercel.app/activities/id/${idActividad}`);
      const findActivity = await response.json();
  
      console.log(findActivity[0]);
      setActivity(findActivity[0]);
    };
  
    useEffect(() => {
      getDataAPI();
    }, []);
  
    if(activity){
      return (
        <>
      <div className="actividad-imageContainer">
            <img
              src={activity.activityImg}
              alt={activity.activityPlace}
              className="actividad-image"
            />
          </div>
  
          <div className="actividad-info">
            <h2 className="actividad-name">
              {activity.activityDate} ({activity.activityDescription})
            </h2>
            <p className="actividad-p1">Place:{activity.activityPlace}</p>
           <p className="actividad-p1">Date:{activity.activityDate}</p>
           <p className="actividad-p1">Place:{activity.activityTime}</p>
            <p className="actividad-p2">Precio:{activity.activityPrice}€</p>
          </div> 
            <BtnLoQuiero tipoProducto = {tipoProducto} idProducto={idActividad} />
        </>
      );
  
    }
    
  
  
  
  };
export default DetalleActividad