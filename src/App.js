import React, { useState } from "react";
import { Login } from "./components/login";
import { signUpFetch, updateFetch } from "./utils";
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpHandler = async (e) => {
    e.preventDefault();
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    const returnValue = await updateFetch(username, email, password);
    setUser(returnValue.user.username);
  };

  

  return (
    <div className="App">
      <h2>{user}</h2>
      {!user ? (
      <form onSubmit={signUpHandler}>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
        <button type="submit">Submit</button>
      </form>
      ) : ( 
        <h3>You're logged in!</h3> 
        )}
    </div>
  );
};

export default App;
