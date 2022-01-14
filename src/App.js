import React, { useState, useEffect } from "react";
//import { Login } from "./components/login";
import { signUpFetch, tokenCheck, loginFetch } from "./utils";
import './App.css';

//pages:
const PAGE_LOGIN = "login";
const PAGE_SIGNUP = "signup";
const PAGE_POSTS = "posts";
//const PAGE_SETTINGS = "settings";


const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
    setIsLoggedIn(true);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const returnValue = await loginFetch(username, password);
    setUser(returnValue.user.username); 
    setIsLoggedIn(true);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderSignUp = () => (
    <>
      <h2>Register</h2>
      <h3>Sign up on Snapify! Share your moments and join in the fun!</h3>
      <form onSubmit={signUpHandler()}>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
        <button type="submit">Sign Up</button>
        <span>Already have an account? Login <a onClick={() => navigateTo(PAGE_LOGIN)}>here</a>!</span>
      </form>
    </>
  );

  const renderLogin = () => (
    <>
      <h2>Welcome Back!</h2>
      <h3>Login in to Snapify! Catch-up on the moments and enjoy the fun!</h3>
      <form onSubmit={loginHandler()}>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
      <button type="submit">Login</button>
      <span>Sign up for a new account <a onClick={() => navigateTo(PAGE_SIGNUP)}>here</a>!</span>
    </form>
    </>
  )

  const renderPosts = () => (
    <>
      <div className="topnav">
        <button className="nav-btn">
          Settings
        </button>
      </div>
      <h2>New Posts</h2>
      <h2>{user}</h2>
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
  )
  

  return (
    <div className="App">
      <h1>Snapify</h1>
      {page === PAGE_SIGNUP && renderSignUp()}
      {page === PAGE_LOGIN && renderLogin()}
      {page === PAGE_POSTS && renderPosts()}
    </div>
  );
};

export default App;
