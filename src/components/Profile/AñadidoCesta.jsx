import React from 'react'
import "../../styles/AñadidoCesta.css"
import { useNavigate } from "react-router-dom";



const AñadidoCesta = () => {

    
    const navigate = useNavigate();   

    const goToCesta = () => {
        navigate("/confirmarCompra");
    }


  return (
    <>
    <div className={"añadidoCesta"}>
        <h3>Producto añadido a la cesta de deseos</h3>
    </div>
    <div  className={"vealacesta"}>
    <button className="BtnLoQuiero-btn" onClick={goToCesta}>Vé a tu cesta</button>
    </div>
    </>
  )
}

export default AñadidoCesta