import React from 'react'
//import jeniffer from '../../images/JenifferLopez.jpg'
import '../../styles/Testimonio.css'
import testimonios from '../../services/testimonios.json'

const htmlTestimonio = testimonios.map((person, i)=>{
  return(
  <div className='contenedor-testimonio' key={i}> 
    <img 
    className='imagen-testimonio'
    src={require(`../../images/${person.imagen}`)}
    alt={`imagen de ${person.nombre}`} />
    <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{person.nombre} </strong>de {person.pais}</p>
        <p className='cargo-testimonio'>{person.cargo}
        <strong> {person.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{person.testimonio}"</p>
    </div>
  </div>
  )
});

const Testimonio = () => {
  return (
      <>
      {htmlTestimonio}
      </>
  )
}

export default Testimonio