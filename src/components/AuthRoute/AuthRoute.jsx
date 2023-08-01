import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
const AuthRoute = ({user, component}) => {

    // si existe el usuario, retorno el componente que corresponde a la web que quiero renderizar   
    const location = useLocation()

    if(user) return component;

    // en caso de que el user sea false te manda al login
    if(!user) return <Navigate to="/login" state={{prevRoute: location.pathname}} />

}

export default AuthRoute