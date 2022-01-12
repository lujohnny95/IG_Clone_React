export const Settings = () => {
    
    const updateHandler = async (e) => {
    e.preventDefault();
    const returnValue = await updateFetch(username, email, password);
    setUser(returnValue.user.username);
    };

    return(
        <form onSubmit={updateHandler}>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text"></input>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
        <button type="submit">Update Details</button>
      </form>
    )
}