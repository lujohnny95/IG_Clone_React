import React, { useState, useEffect } from "react";
import { Login } from "./components/login";
import { signUpFetch, tokenCheck } from "./utils";
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    tokenCheck(localStorage.getItem("MyToken"), setUser); 
    fetchReq();
  }, []);

  //fetch image from the 
  const fetchReq = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPosts(data);
  }

  const signUpHandler = async (e) => {
    e.preventDefault();
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  };

  
  return (
    <div className="App">
      <h1>Snapify</h1>
      <h2>{user}</h2>
      {!user ? (
        <>
          <h2>Register</h2>
          <form onSubmit={signUpHandler}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <h2>New Posts</h2>
          {posts.map((post, i) => {
            return (
              <div className="post-card">
                <h3 key={i}>{post.author}</h3>
                <img 
                  className="post-img" 
                  src={post.download_url} 
                  alt="post image"
                />
                <p>Check out my new post! #newpost #fun</p>
              </div>
            );
          })} 
        </>
      )}
    </div>
  );
};

export default App;
