import React, { useState } from "react";
import { signUpFetch, loginFetch } from "./utils";
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginBool, setLoginBool] = useState(true);

  useEffect(() => {
    tokenCheck(setUser);
  }, [])

  const submitHandler = () => {
    e.preventDefault();
    if (email) {
      signUpFetch(username, email, password, setUser);
    } else {
      loginFetch(username, password, setUser);
    }
  };

  return (
    <div className="App">
      <h2>{user}</h2>
      {!user && (
        <div>
          <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
            {loginBool && (
              <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input> 
            )}
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setLoginBool(!loginBool)}>
            {loginBool ? "Already registed? Log in!" : "Register account here!"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
