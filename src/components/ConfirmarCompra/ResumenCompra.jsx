import React, { useEffect, useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';



const ResumenCompra = () => {

    const {user, userCero} = useContext(userContext);
    const [destinos, setDestinos] = useState([]);
    const [actividades, setActividades] = useState([]);
    let totalPagar = 0;
//----------------------------------------------------------------------------------------------------------
const getDataAPI_destinations = async (idDestino) => {
  const response = await fetch(`https://api-node-viajes.vercel.app/destinations/id/${idDestino}`);
  const findDestination = await response.json();
  return findDestination[0];
};
//----------------------------------------------------------------------------------------------------------
const getDataAPI_activities = async (idActividad) => {
  const response = await fetch(`https://api-node-viajes.vercel.app/activities/id/${idActividad}`);
  const findActivity = await response.json();
  return findActivity[0];
};
//----------------------------------------------------------------------------------------------------------
    const numeroDestinosComprados = userCero.destination.length;
    const numeroDestinosTotal = user.destination.length;
    const numeroDestinosCesta = numeroDestinosTotal - numeroDestinosComprados;


    const numeroActividadesCompradas = userCero.activity.length;
    const numeroActividadesTotal = user.activity.length;
    const numeroActividadesCesta = numeroActividadesTotal - numeroActividadesCompradas;
//----------------------------------------------------------------------------------------------------------
useEffect(() => {
  const getDestinos = async () => {
    const dest =[];
    for(let i=0; i<numeroDestinosTotal; i++){
      dest.push(await getDataAPI_destinations(user.destination[i]));
    }
    setDestinos(dest);
  }
  getDestinos();
}, []);
//----------------------------------------------------------------------------------------------------------
useEffect(() => {
  const getActividades = async () => {
    const dest =[];
    for(let i=0; i<numeroActividadesTotal; i++){
      dest.push(await getDataAPI_activities(user.activity[i]));
    }
    setActividades(dest);
  }
  getActividades();
}, []);
//----------------------------------------------------------------------------------------------------------
const destinosComprados = destinos.slice(0,numeroDestinosComprados);
const destinosCesta = destinos.slice(numeroDestinosComprados, numeroDestinosTotal);

const actividadesCompradas = actividades.slice(0,numeroActividadesCompradas);
const actividadesCesta = actividades.slice(numeroActividadesCompradas, numeroActividadesTotal);

const calcularPrecio = ()=>{
  for (let dest of destinosCesta){
    totalPagar += dest.destinationPrice;
  }
  for (let activ of actividadesCesta){
    totalPagar += activ.activityPrice;
  }
}
calcularPrecio();
//----------------------------------------------------------------------------------------------------------
  const renderDestinosComprados = () => {
    return destinosComprados.map( (dest, i) => (
        <li key={i}>
          <div>
            <p>{dest.destinationPlace}</p>
            <p>{dest.destinationDate}€</p>
          </div>
        </li>
    ));
  };
//----------------------------------------------------------------------------------------------------------
const renderDestinosCesta = () => {
  return destinosCesta.map( (dest, i) => (
      <li key={i}>
        <div>
          <p>{dest.destinationPlace}</p>
          <p>{dest.destinationDate}</p>
          <p style={{ fontWeight: 'bold', fontSize:'22px', color:'white' }}>Precio: {dest.destinationPrice}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------
const renderActividadesCompradas = () => {
  return actividadesCompradas.map( (activ, i) => (
      <li key={i}>
        <div>
          <p>{activ.activityName}</p>
          <p>{activ.activityPlace}</p>
          <p>{activ.activityDate}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------
const renderActividadesCesta = () => {
  return actividadesCesta.map( (activ, i) => (
      <li key={i}>
        <div>
          <p>{activ.activityName}</p>
          <p>{activ.activityPlace}</p>
          <p style={{ fontWeight: 'bold', fontSize:'22px', color:'white' }}>Precio: {activ.activityPrice}€</p>
        </div>
      </li>
  ));
};
//----------------------------------------------------------------------------------------------------------

  return (
    <>
    <div>
        <div>Destinos comprados anteriormente:{numeroDestinosComprados}</div>
        <div>Destinos en la cesta:{numeroDestinosCesta}</div>
        <div>Actividades compradas anteriormente:{numeroActividadesCompradas}</div>
        <div>Actividades en la cesta:{numeroActividadesCesta}</div>
        <div>:</div>
    </div>
    { numeroDestinosComprados == 0 ? null:
      <>
      <h3>DESTINOS ANTERIORMENTE COMPRADOS:</h3>
      <section>{renderDestinosComprados()}</section>
      </>
    }
    <section>:</section>
    { numeroActividadesCompradas == 0 ? null:
    <>
    <h3>ACTIVIDADES ANTERIORMENTE COMPRADAS:</h3>
    <section>{renderActividadesCompradas()}</section>
    </>
    }
    { numeroDestinosCesta == 0 ? null:
      <>
      <h3>DESTINOS EN LA CESTA:</h3>
      <section>{renderDestinosCesta()}</section>
      </>
    }
    { numeroActividadesCesta == 0 ? null:
      <>
      <h3>ACTIVIDADES EN LA CESTA:</h3>
      <section>{renderActividadesCesta()}</section>
      </>
    }
    <section>:</section>
    { totalPagar == 0 ? null:
    <section style={{ fontWeight: 'bold', fontSize:'25px', backgroundColor:'red' }}>TOTAL A PAGAR: {totalPagar}</section>
    }
    </>
  ) 
}

export default ResumenCompra