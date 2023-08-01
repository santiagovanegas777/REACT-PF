import React from 'react'
import '../../styles/Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
      <footer className="footer">
        <img src="" alt="" className="logo-dos" />
        <ul className="footer-ul">
          <li className="ul-li">
            Empresa
            <ul className="li-ul">
              <li>Acerca de</li>
              <li>Empleo</li>
              <li>For the record</li>
            </ul>
          </li>

          <li className="ul-li">
            Comunidades
            <ul className="li-ul">
              <li>Para artistas</li>
              <li>Desarrolladores</li>
              <li>Publicidad</li>
              <li>Inversores</li>
              <li>Proveedores</li>
            </ul>
          </li>

          <li className="ul-li">
            Enlaces útiles
            <ul className="li-ul">
              <li>Asistencia</li>
              <li>Reproductor web</li>
              <li>App gratis para móvil</li>
            </ul>
          </li>
        </ul>

        <div className="redes-sociales">
          <div className="instagram"></div>
          <div className="twitter"></div>
          <div className="facebook"></div>
        </div>

        <ul className="footer-ul-debajo">
          <li>Desarrollado:por santiago Correa Vanegas</li>
          <li>Centro de Privacidad</li>
          <li>Política de privacidad</li>
          <li>Configuración de cookies</li>
          <li>Información sobre los anuncios</li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer