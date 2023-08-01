import {useEffect, useState} from 'react';
import '../../styles/Frutas.css';
import ListDestinos from './ListDestinos';

const Destinos = () => {
  const [destinations, setDestinations] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('https://api-node-viajes.vercel.app/destinations');
      const res = await response.json();
      setDestinations(res);
  }
  useEffect(() => {
    getDataAPI();
  },[]);

  return (
    <div className='section-destino'>
      <ListDestinos destinations = {destinations} />
    </div>
  )
}

export default Destinos