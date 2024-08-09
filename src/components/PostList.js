// src/components/PostList.js

import React from 'react'; // Importa a biblioteca React para usar seus recursos

// Define um componente funcional chamado PostList
const PostList = ({ posts, onSelectPost }) => {
  return (
    <div>
      <h2>Posts</h2> {/* Este é o título da lista de posts */}
      <ul>
        {/* Aqui estamos criando uma lista de itens (posts) */}
        {posts.map((post) => (
          // Para cada post, criamos um item de lista (<li>)
          // 'key={post.id}' é usado para ajudar o React a identificar quais itens mudaram, foram adicionados ou removidos
          // 'onClick={() => onSelectPost(post)}' é uma função que é chamada quando você clica em um item da lista
          <li key={post.id} onClick={() => onSelectPost(post)}>
            {post.title} {/* Este é o título do post que será exibido na lista */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList; // Exporta o componente para que possa ser usado em outras partes do aplicativo
