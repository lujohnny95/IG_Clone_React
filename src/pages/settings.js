import { updateFetch, deleteFetch } from "../utils";

export const Settings = (props) => {
    
    const updateHandler = async (e) => {
    e.preventDefault();
    const returnValue = await updateFetch(username, email, password);
    setUser(returnValue.user.username);
    };

    const deleteHandler = async (e) => {
      e.preventDefault();
      const returnValue = await deleteFetch(username);
    };

    return(
      <div className="update-section">
        <form onSubmit={updateHandler}>
          <input onChange={(e) => props.setUsername(e.target.value)} placeholder="Update username" type="text"></input>
          <input onChange={(e) => props.setEmail(e.target.value)} placeholder="Update email" type="email"></input>
          <input onChange={(e) => props.setPassword(e.target.value)} placeholder="Update password" type="password"></input>
          <button type="submit">Update Details</button>
        </form>
        <div className="delete-section">
          <button className="delete-btn" onClick={deleteHandler}>Delete Account</button>
        </div>
      </div>
  
    );
};