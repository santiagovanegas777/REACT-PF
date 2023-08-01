import React from 'react'
import userContext from '../Context/userContext';
import { useContext } from 'react';
// import { Link } from 'react-router-dom';


const Profile = () => {

  const {user, setUser} = useContext(userContext);
  
  const sessionToken = JSON.parse(sessionStorage.getItem('token'));

    console.log(user);


    const updateDataUsersAPI = async () => {
      console.log(sessionToken);
      console.log(user);
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
      //alert('Datos actualizados')
    };


    const changeInput = (event) => {
      
      const { value, name } = event.target;
      setUser({ ...user, [name]: value });
      //console.log(formData);
    };

    const submitForm = (event) => {
      event.preventDefault();
      updateDataUsersAPI(user);
      
      
    };


  return (

    <div className="register-contenedor">
      <div className="register-contenedor-centrado">
        <div className="register-div-izquierdo">
          <form onSubmit={submitForm} className="login-form" >
            {/* RETO: METER LOS INPUT COMO UN COMPONENTE DESDE UN FICHERO, COMO EN TESTIMONIOS */}
            <label htmlFor="email">Email</label>
            <input
              className="register-input-email"
              type="email"
              name="email"
              placeholder="email"
              id="email"
              onChange={changeInput}
              value={user.email}
            />
            <label htmlFor="username">Nombre de usuario</label>
            <input
              className="register-input-nombre"
              type="text"
              name="username"
              placeholder="nombre de usuario"
              id="username"
              onChange={changeInput}
              value={user.username}
            />
            <label htmlFor="nombre">Nombre</label>
            <input
              className="register-input-nombre"
              type="text"
              name="nombre"
              placeholder="nombre"
              id="nombre"
              onChange={changeInput}
              value={user.nombre}
            />
            <label htmlFor="apellidos">Apellidos</label>
            <input
              className="register-input-apellido"
              type="text"
              name="apellidos"
              placeholder="apellidos"
              id="apellidos"
              onChange={changeInput}
              value={user.apellidos}
            />
            <label htmlFor="direccion">Dirección</label>
            <input
              className="register-input-dirección"
              type="text"
              name="direccion"
              placeholder="dirección"
              id="direccion"
              onChange={changeInput}
              value={user.direccion}
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="register-input-dirección"
              type="text"
              name="telefono"
              placeholder="teléfono"
              id="telefono"
              onChange={changeInput}
              value={user.telefono}
            />
            {/* <label htmlFor="password">Contraseña</label> 
             <input
              className="register-input-password"
              type="password"
              name="password"
              placeholder="Introduce tu contraseña para actualizar datos"
              id="password"
              onChange={changeInput}
              value={formPassword}
            /> */}

            {/* <Link to="/changepsw" className="change-psw">Actualizar contraseña</Link> */}

            <button type="submit" className="register-button">
              Actualizar datos personales
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

export default Profile;