import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    setPosts(response.data);
  };

  return (
    <Provider store={store}>
      <div className='App'>
        <h2>Fetch posts from an API and display it</h2>

        <div>
          <button className='fetch-button' onClick={fetchData}>
            Fetch Data
          </button>
          <br />
        </div>

        <div className='posts'>
          {posts &&
            posts.map((post) => {
              return (
                <div className='post' key={post.id}>
                  <h3 className='postId'>Post {post.id}</h3>
                  <p className='userId'>User {post.userId}</p>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Provider>
  );
}

export default App;
