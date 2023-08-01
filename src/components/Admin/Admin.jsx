import { Routes, Route, Link } from 'react-router-dom';
import AdminUsers from './AdminUsers/AdminUsers';
import AdminPost from './Post/AdminPost'
import './Admin.css'



function Admin() {
  return (
    <div className="admin-container">

    <h1>Página de Administrador</h1>

      <Routes>
      {/*<Route path="/home" element={<Admin/>} />*/}
        <Route path="/usuarios" element={<AdminUsers />} />
        <Route path="/post" element={<AdminPost />} />

      </Routes>

      <div className="botones-contenedor">
      <Link to="/admin" className="button">Home</Link>
      <Link to="/admin/usuarios" className="button">Usuarios</Link>
      <Link to="/admin/post" className="button">Post</Link>
      </div>
    </div>
  );
}

export default Admin;