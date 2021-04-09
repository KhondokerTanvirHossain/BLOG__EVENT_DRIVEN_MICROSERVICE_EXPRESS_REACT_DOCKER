import './App.css';
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPost] = useState('');
  const fetchPosts = async(event) => {
    const res = await axios.get('http://localhost:8080/posts');
    setPost(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderdPosts = Object.values(posts).map(post => {
    return (
      <div className="card" key="post.id" style={{width: '30%', marginBottom: '20px'}}>
        <div className="card-body">
          <h3> {post.content} </h3>
          <CommentList postId={post.id}/>
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderdPosts}    
    </div>
  );
}

export default App;
