import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/Register.css';


const InfoDatosPersonales = () => {

    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profile");
    }
    const goToCesta = () => {
        navigate("/confirmarCompra");
    }
    
  return ( 
    <>
    <div className="register-contenedor">
        <div className="register-contenedor-centrado" style={{ display: "block", textAlign:'center'}}>
            <h1>PERFIL DEL USUARIO:</h1>

            <p>Usuario:  {user.username}</p>
            <p>                       </p>
            <p>Email:  {user.email}</p>
            <p>                       </p>
            <p>Nombre:  {user.nombre}</p>
            <p>Apellido:  {user.apellidos}</p>
            <p>Dirección:  {user.direccion}</p>
            <p>Teléfono:  {user.telefono}</p>
            <button onClick={goToProfile} className="register-button">
              Modificar datos personales
            </button>
            <p></p>
            <button onClick={goToCesta} className="register-button">
              Ver tus productos
            </button>
            </div>
        </div>
    </>
  )
}

export default InfoDatosPersonales