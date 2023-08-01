import {Link} from 'react-router-dom'

const LoginNote = ({user}) => {
  return (
    <div className="notaLogeado">
            {user ? 
            <Link to="/profile">
            Usuario: {user.userName} {user.userLastname}
            </Link>
            : ""}
    </div>
  )
}

export default LoginNote