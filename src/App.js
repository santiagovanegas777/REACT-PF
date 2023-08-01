import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import userContext from "./components/Context/userContext";
import Home from "./components/Home/Home";
import Destinos from "./components/Destinos/Destinos";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import DetalleDestino from "./components/Destinos/DetalleDestino";
import NotFound from "./components/NotFound";
import Registro from "./components/Registro/Registro";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout";
import Carrousel from "./components/Carrousel/Carrousel";
import UserMenu from './components/Dropdown/UserMenu';
import Actividades from "./components/Actividades/Actividades";
import {API} from './services/api';
import DetalleActividad from "./components/Actividades/DetalleActividad";
import ChangePassword from "./components/ChangePassword/changePassword";
import AñadidoCesta from "./components/Profile/AñadidoCesta";
import ConfirmarCompra from "./components/ConfirmarCompra/confirmarCompra";
import InfoDatosPersonales from "./components/Profile/InfoDatosPersonales";
import Admin from './components/Admin/Admin';
import AdminPost from "./components/Admin/Post/AdminPost";
import AdminUsers from  "./components/Admin/AdminUsers/AdminUsers"
import { useNavigate } from "react-router-dom";


function App() {
  
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userCero, setUserCero] = useState(null);


  const [loginError, setLoginError] = useState("");

    const loginUser = (formData, prevRoute)=>{
    //Este find es para cuando hacemos consultas a userList
  
       API.post('/users/login', formData)
      .then((res)=>{
      console.log(res.data);
      setUser(res.data.userInfo);//Ahora variamos la variable de estado user
      setUserCero(res.data.userInfo);
      //Ahora variamos la variable de estado userCero para que valga lo mismo que user

      sessionStorage.setItem('token', JSON.stringify(res.data));//Guardamos todo: token y UserInfo
      navigate(prevRoute || "/")
      //navigate("/")
      })
.catch((error)=>{
  //alert(error.response.data.message)
  setLoginError(error.response.data.message)
})
};
  
  
  return (
    <>
      <div className="App">

      <userContext.Provider value={{user, setUser, userCero, setUserCero}}>
        <header className="div_header">
          <div className="logo_container">
            <img src="https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg" alt="not working" />
          </div>
          <NavBar  />
          <UserMenu user={user}/>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrousel" element={<Carrousel />} />
          <Route
            path="/login"
            element={<Login loginUser={loginUser} loginError={loginError} />}
          />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
          
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:idDestino" element={<DetalleDestino />} />

          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/:idActividad" element={<DetalleActividad/>} />

          <Route path="/register" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/añadidoCesta" element={
            <AuthRoute user={user} component={<AñadidoCesta user={user} />} />
          } />
          <Route path="/confirmarCompra" element={
            <AuthRoute user={user} component={<ConfirmarCompra user={user} />} />
          } />
          <Route path="/changepsw" element={
            <AuthRoute user={user} component={<ChangePassword user={user} />} />
          } />
          <Route path="/infoDatosPersonales" element={
            <AuthRoute user={user} component={<InfoDatosPersonales user={user} />} />
          } />

          <Route path="/profile" element={
              <AuthRoute user={user} component={<Profile user={user} />} />
            }
          />
          <Route path="/admin" element={
            <AuthRoute user={user} component={<Admin user={user} />} />
          } />
          <Route path="/admin/Home" element={
            <AuthRoute user={user} component={<Admin user={user} />} />
          } />
          <Route path="/admin/usuarios" element={
            <AuthRoute user={user} component={<AdminUsers user={user} />} />
          } />
          <Route path="/admin/post" element={
            <AuthRoute user={user} component={<AdminPost user={user} />} />
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </userContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
