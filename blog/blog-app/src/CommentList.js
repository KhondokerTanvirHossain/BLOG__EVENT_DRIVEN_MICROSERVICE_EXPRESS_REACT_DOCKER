import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App({commentList}) {
  console.log(commentList);
  if (commentList == undefined) {
    commentList = [];
  }
  const renderdComments = commentList.map(comment => {
    return (
      <li  key="comment.id">
        {comment.comment} ({comment.status})
      </li>
    );
  });

  return (
    <ul> {renderdComments} </ul>
  );
}

export default App;
