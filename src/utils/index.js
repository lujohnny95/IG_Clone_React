export const signUpFetch = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await response.json();
        localStorage.setItem("MyToken", data.token);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const tokenCheck = async (token, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        const data = await response.json();
        localStorage.getItem("MyToken", data.token);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const loginFetch = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        })
        const data = await response.json();
        localStorage.setItem("MyToken", data.token);
        return data;
    } catch (error) {
        console.log(error)
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

/*
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