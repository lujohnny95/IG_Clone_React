import { loginFetch } from "../utils";

export const Login = (props) => {
    
  const loginHandler = async (e) => {
    e.preventDefault();
    const returnValue = await loginFetch(username, password);
    props.setUser(returnValue.user.username); 
    props.setIsLoggedIn(true)
  };
  
  return(
    <form onSubmit={loginHandler}>
      <input onChange={(e) => props.setUsername(e.target.value)} placeholder="Username" type="text"></input>
      <input onChange={(e) => props.setPassword(e.target.value)} placeholder="Password" type="password"></input>
      <button type="submit">Login</button>
    </form>
    )
};
