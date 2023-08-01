import React, { useEffect, useState } from 'react';
import './AdminUsers.css'; 

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api-pf-iota.vercel.app');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Listado de clientes</h1>
      </div>
      <button onClick={handleGoBack} className="goBackButton">Volver atrás</button>
      <div className="users-list-container">
        {users
          .filter(user => user.actividades.length > 0 || user.destinos.length > 0) 
          .map((user, index) => (
            <div key={index} className="rounded-card">
              <p>{user.name}</p>
            </div>
        ))}
      </div>
    </div>
  );

}


export default AdminUsers;
