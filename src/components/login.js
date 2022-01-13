import { loginFetch } from "../utils";

export const Login = ({setter}) => {
    
  const loginHandler = async (e) => {
    e.preventDefault();
    const returnValue = await loginFetch(username, password);
    setUser(returnValue.user.username); 
  };
  
  return(
      <form onSubmit={loginHandler}>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
      <button type="submit">Login</button>
    </form>
    )
}

