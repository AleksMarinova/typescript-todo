import axios from "axios";
import { IUser } from "../interfaces";

const API_URL = "http://localhost:5000/api/auth/";

export const register = (obj:IUser) => {
    return axios.post(API_URL + "signup", {
        username: obj.username,
        password: obj.password,
        email: obj.email,
        id: obj.id
    });
};

export const login = (username: string, password: string) => {
    if(username === '' || password === '') {
        return 
    }
    return axios.post(API_URL + "login", {
        username,
        password
    }).then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("User", JSON.stringify(response.data));
        }
        return response.data;
    })
}

export const logout = () => {
    localStorage.removeItem("User");
    };

export const getCurrentUser = () => {
    const user = localStorage.getItem("User");
    if(user) {
        return JSON.parse(user);
    }
    return null;
}