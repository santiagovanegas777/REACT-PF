import {Link} from 'react-router-dom'
import '../../styles/Dropdown/main.css'
import { FaUserCircle } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import {FaRegCreditCard} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
const UserMenu = ({user}) => {
    return (
        <div className="dropdown">
        <button type="button" className="dropdown_button">
            <div className="content">
                <FaUserCircle className='user_circle'/>
                <p>{user != null ? user.username : "Account"}</p>
                <FaAngleDown className='arrow_down'/>
            </div>
        </button>

        <ul className="menu">

            <Link to="#">
            {user ? <li><Link to="/infoDatosPersonales"><FaCog className='settings_cog'/>Settings</Link></li> : <li><Link to="/login"><FaCog className='settings_cog'/>Settings</Link></li>}
            </Link>

            <Link to="#">
                {user ? <li><Link to="/confirmarCompra"><FaShoppingCart/>Cart</Link></li> : <li><Link to="/login"><FaShoppingCart/>Cart</Link></li>}
            </Link>
        </ul>
    </div>
    )
}

export default UserMenu;