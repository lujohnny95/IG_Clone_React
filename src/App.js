import React, { useState } from "react";
import { Login } from "./components/login";
import './App.css';

const PAGE_LOGIN = "login";
const PAGE_FEED = "feed";
const PAGE_PROFILE = "profile";

const App = () => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(PAGE_LOGIN);


  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  };

  //Replaces Insomia: 
  const fetchReq = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setArr(data);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderLogin = () => (
    <>
      <h1>Login to Neo IG</h1>
      <div className="wrapper">
        <Login setter={setUser} handler={submitHandler}/>
      </div>
    </>
  )

  const renderFeed = () => (
    <>
      <h1>New Posts</h1>
      <div className="wrapper">
        {arr.map((item, index) => {
          <div className="card" key={index}>
            <div className="card-body">
              <img className="post-image" src={item.url}/>
              <h3>{item.author}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #newPost #UKIG</p>
            </div>
            <button className="card-btn">Like</button>
          </div>
        })}
      </div>
    </>
  );

  const renderProfile = () => (
    <>
      <h1>My Profile</h1>
      <div className="wrapper">
        {arr.map((item, index) => {
          <div className="card" key={index}>
            <div className="card-body">
              <img className="post-image" src={item.url}/>
              <h3>{item.author}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #newPost #UKIG</p>
            </div>
            <button className="card-btn">Like</button>
          </div>
        })}
      </div>
    </>
  );

  return (
    <div className="App">
      <div className="topnav">
        <button className="nav-btn" onClick={() => navigateTo(PAGE_PROFILE)}>Profile</button>
        <button className="nav-btn" onClick={() => navigateTo(PAGE_FEED)}>Posts</button>
        <button className="nav-btn" onClick={() => navigateTo(PAGE_LOGIN)}>Logout</button>
      </div>
      {isLoggedIn ? page === PAGE_FEED : page === PAGE_LOGIN};
      {page === PAGE_LOGIN && renderLogin()}
      {page === PAGE_FEED && renderFeed()}
      {page === PAGE_PROFILE && renderProfile()}
    </div>
  );
};

export default App;
