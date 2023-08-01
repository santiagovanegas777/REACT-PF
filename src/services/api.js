//Aquí voy a definir las peticiones a la API
//Fichero de js. No es jsx

import axios from "axios";

// creamos las cabeceras que tenemos que enviar y el axios que contiene las cabeceras

//Cabeceras:
const local = JSON.parse(sessionStorage.getItem('user'));

export const APIHeaders = {
    Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: {
    toString() {
      return `Bearer ${local || null}`;
    },
  },
}

const sessionToken = JSON.parse(sessionStorage.getItem('token'))
export const APIHeadersToken = {
    Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: {
    toString() {
      return `Bearer ${sessionToken.token || null}`;
    },
  },
}

//Creo el fichero de configuración de las solicitudes de axios a la API
//De aquí voy a la función loginUser de la APP a ahcer el fetch con axios

export const API =  axios.create({
    baseURL: 'https://api-node-viajes.vercel.app',
    timeout: 10000,
    headers: APIHeaders,

})

export const APIToken =  axios.create({
    baseURL: 'https://api-node-viajes.vercel.app',
    timeout: 10000,
    headers: APIHeadersToken,

})

//Guardamos la información en LocalStorage:
/*
sessionStorage.setItem('user','usuario');//guardo token
sessionStorage.getItem('user'); //obtengo token
sessionStorage.removeItem('user');//eliminar token
*/