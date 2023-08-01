import React from 'react'
import userContext from '../Context/userContext';
import { useContext, useState } from 'react';



const ChangePassword = () => {

    const[psw1,setpsw1] = useState('');
    const[psw2,setpsw2] = useState('');


    const {user, setUser} = useContext(userContext);
    const sessionToken = JSON.parse(sessionStorage.getItem('token'));
  
      //console.log(user);
  
  
      const updateDataUsersAPI = async () => {
        console.log(sessionToken);
        //console.log(user);
        const response = await fetch(`https://api-pf-iota.vercel.app/users/update/${user._id}`, {
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
        const res = await response.json();
        console.log(res);
      };
  
  
       const changeInput1 = (event) => {
        setpsw1(event.target.value)
        
        //console.log(psw1)
        
       };
       const changeInput2 = (event) => {
        
        setpsw2(event.target.value)
        
        //console.log(psw2)
       };
  
      const submitForm = (event) => {
        event.preventDefault();

        console.log(psw1);
        console.log(psw2);

        if(psw1 === psw2){
            
            setUser({ ...user, password: psw1 });
            console.log(user)
            updateDataUsersAPI(user);
            //alert("Datos actualizados"); 
        }
        else{
            //alert("Error en la comprobación. No se ha podio actualizar la contraseña");

        }
                
      };
  
  
    return (
  
      <div className="register-contenedor">
        <div className="register-contenedor-centrado">
          <div className="register-div-izquierdo">
            <form onSubmit={submitForm} className="login-form" >
                           
              <label htmlFor="inputPsw1">Introduce nueva contraseña</label>
              <input
                className="register-input-password"
                type="password"
                // name="inputPsw1"
                placeholder="password"
                id="inputPsw1"
                onChange={changeInput1}
                value= { psw1 }
               />
               <label htmlFor="inputPsw2">Comprueba la contraseña</label>
              <input
                className="register-input-password"
                type="password"
                // name="inputPsw2"
                placeholder="password"
                id="inputPsw2"
                onChange={changeInput2}
                value = { psw2 }
               />
              <button type="submit" className="register-button">
                Actualizar
              </button>
            </form>
          </div>
  
          <div className="register-div-derecho">
  
            <hr />
           
            <div className="login-div-titulo">Regístrate con nosotros!</div>
              <hr />
         
          </div>
        </div>
      </div>
    )
}

export default ChangePassword