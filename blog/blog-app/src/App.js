import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  
  return (
    <div className="container">
      <header > <h1>CREATE POST</h1></header>
      <PostCreate/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  );
}

export default App;
