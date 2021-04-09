import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const onSubmit = async(event) => {
    event.preventDefault();
    const post = {'content': title};
    await axios.post('http://localhost:8080/posts', post);
    setTitle('');
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1" >Title</label>
        <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}

export default App;
