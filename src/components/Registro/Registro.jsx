import { useState } from "react";
import '../../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const intialState = {
  email: '',//
  password: '',//
  username: '',//
  role: 'user',
  telefono: '',
  nombre: '',
  apellidos: '',
  direccion: '',
  destination: [],
  activity: [] 
};

const Registro = () => {
  // ************************************************************
  const navigate = useNavigate();
  const postDataUsersAPI = async () => {
    console.log(formData)
    const response = await fetch("https://api-node-viajes.vercel.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    });
    const res = await response.json();
    console.log(res);
  };

  // ************************************************************

  const [formData, setFormData] = useState(intialState);

  const changeInput = (event) => {
    
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
    //console.log(formData);
  };

  const submitForm = (event) => {
    event.preventDefault();

    //loginUser(formData);

    //useEffect(() => {
    postDataUsersAPI(formData);
    console.log("Se han enviado los datos");
    setFormData(intialState);
    navigate("/login");

    //}, []);
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
              value={formData.email}
            />
            <label htmlFor="username">Nombre de usuario</label>
            <input
              className="register-input-nombre"
              type="text"
              name="username"
              placeholder="nombre de usuario"
              id="username"
              onChange={changeInput}
              value={formData.username}
            />
            <label htmlFor="nombre">Nombre</label>
            <input
              className="register-input-nombre"
              type="text"
              name="nombre"
              placeholder="nombre"
              id="nombre"
              onChange={changeInput}
              value={formData.nombre}
            />
            <label htmlFor="apellidos">Apellidos</label>
            <input
              className="register-input-apellido"
              type="text"
              name="apellidos"
              placeholder="apellidos"
              id="apellidos"
              onChange={changeInput}
              value={formData.apellidos}
            />
            <label htmlFor="direccion">Dirección</label>
            <input
              className="register-input-dirección"
              type="text"
              name="direccion"
              placeholder="dirección"
              id="direccion"
              onChange={changeInput}
              value={formData.direccion}
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="register-input-dirección"
              type="text"
              name="telefono"
              placeholder="teléfono"
              id="telefono"
              onChange={changeInput}
              value={formData.telefono}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              className="register-input-password"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={changeInput}
              value={formData.password}
            />

            <button type="submit" className="register-button">
              Enviar
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
  );
};

export default Registro;
