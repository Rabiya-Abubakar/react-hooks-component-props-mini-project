import React from 'react';
import Article from './Article.js';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id}  // Unique key attribute
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
