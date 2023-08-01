import React, { useEffect, useState } from 'react';
import './DeletePost.css';




function EliminarPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://api-node-viajes.vercel.app');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
        console.error('Error:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await fetch(`https://api-node-viajes.vercel.app/posts/${postId}`, {
        method: 'DELETE',
      });

      setPosts(posts.filter(post => post.id !== postId)); // Actualiza la lista de posts en el estado
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="EliminarPost">
    <h2>Eliminar un post</h2>
    {posts.map(post => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => handleDeletePost(post.id)}>Eliminar post</button>
      </div>
    ))}
  </div>
  );
}

export default EliminarPost;