import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App({postId}) {
  const [comments, setComments] = useState('');
  const fetchComments = async(event) => {
    const res = await axios.get(`http://localhost:8081/post/${postId}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  const renderdComments = Object.values(comments).map(comment => {
    return (
      <li  key="comment.id">
         {comment.comment}
      </li>
    );
  });

  return (
    <ul> {renderdComments} </ul>
  );
}

export default App;
