export const signUpFetch = async (username, email, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        const data = await response.json();
        setUser(data.user.username);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error)
    }
};

export const loginFetch = async (username, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            }),
        });
        const data = await response.json();
        setUser(data.user.username);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error)
    }
};

export const tokenCheck = async (setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`},
        }),
        const data = await response.json();
        setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

/*
export const updateFetch = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const deleteFetch = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/:username`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

*/