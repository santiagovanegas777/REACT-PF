import React, { useState } from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import ResumenCompra from './ResumenCompra';




const ConfirmarCompra = () => {

  const navigate = useNavigate();
  const [formPassword, setFormPassword] = useState("");

  const {user, userCero, setUserCero} = useContext(userContext);


  const sessionToken = JSON.parse(sessionStorage.getItem('token'));
  
  console.log(user);
    
  const updateDataUsersAPI = async () => {
//--------------------------------------------------------------------------
      const response = await fetch(`https://api-node-viajes.vercel.app/users/update/${user._id}`, {
        method: "PUT",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: {
            toString() {
            return `Bearer ${sessionToken.token || null}`;
            },
          },
        },
        body: JSON.stringify(
            user
          ),
      });
//----------
    const res = await response.json();
    console.log(res);
  };
//--------------------------------------------------------------------------
  // const changeInput = (event) => {
  //   setFormPassword(event.target.value);
  // };
//--------------------------------------------------------------------------

  const submitForm = (event) => {
    event.preventDefault();
    // user.password = formPassword;
    updateDataUsersAPI(user);
    setUserCero(user);
    alert("Compra realizada");
    navigate("/");
  };
  
  
  return (
  
      <div className="register-contenedor">
        <div className="register-contenedor-centrado">

          <div className="register-div-izquierdo">
            <form onSubmit={submitForm} className="login-form" >
            
          {/* <label htmlFor="password">Contraseña</label> 
             <input
              className="register-input-password"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={changeInput}
              value={formPassword}
            /> */}


              <button type="submit" className="register-button">
                Confirmar compra
              </button>
            </form>
          </div>
          <div className="register-div-derecho">
            <hr />
            {/* <div className="login-div-titulo">Confirmar compra de la cesta</div> */}
            <ResumenCompra/>
              <hr />
          </div>
        </div>
      </div>
    )

}



export default ConfirmarCompra