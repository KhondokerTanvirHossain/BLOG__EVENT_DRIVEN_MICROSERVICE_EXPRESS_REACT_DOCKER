import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App({postId}) {
  const [comment, setComment] = useState('');
  const onSubmit = async(event) => {
    event.preventDefault();
    const newComment = { 'postId': postId, 'comment': comment};
    await axios.post(`http://localhost:8081/post/${postId}/comment`, newComment);
    setComment('');
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1" >New Comment</label>
        <input className="form-control" type="text" value={comment} onChange={e => setComment(e.target.value)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}

export default App;
