import {Link} from 'react-router-dom'
import "../../styles/NavBar/main.css"
import userContext from '../Context/userContext';
import { useContext } from 'react';

const NavBar = () => {

  const {user} = useContext(userContext);
  
  return (
      <nav className="header_nav">
        <ul className="nav_menu">
          <li>
            <Link to="/" className="nav_menu_li">Home</Link>
          </li>
          <li>
            <Link to="/destinos" className="nav_menu_li">Destinos</Link>
          </li>
          <li>
            <Link to="/actividades" className="nav_menu_li">Actividades</Link>
          </li>
          {user ?
          <li>
            <Link to="/logout" className="nav_menu_li" >Logout</Link>
          </li>:
              <li>
              <Link to="/login" className="nav_menu_li">Login</Link>
            </li>}
          <li>
            <Link to="/contacto" className="nav_menu_li">Contacto</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar

