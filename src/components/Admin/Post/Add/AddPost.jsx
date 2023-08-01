import React, { useState } from 'react';
import './AddPost.css';




function AgregarPost() {
  const [post, setPost] = useState({ title: '', content: '' }); // Un post tiene título y contenido

//Formulario controlado --- Controlador de eventos que se dispara cada vez que cambia el valor de los campos de entrada del formulario.
//Cuando el usuario escribe en los campos de entrada del formulario, 
//actualiza el estado de post para reflejar lo que el usuario ha escrito. Esto es lo que hace handleInputChange.

  const handleInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-node-viajes.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }


//LIMPIA LOS CAMPOS DEL FOTMULARIO CUANDO YA HEMOS ENVIADO EL POST
    setPost({ title: '', content: '' }); 
  };

  return (
    <div className="AgregarPost">
    <h2>Agregar nuevo post</h2>
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleInputChange}
        placeholder="Título del post"
        required
      />
      <textarea
        name="content"
        value={post.content}
        onChange={handleInputChange}
        placeholder="Contenido del post"
        required
      />
      <button type="submit">Agregar post</button>
    </form>
  </div>
);
}

export default AgregarPost;