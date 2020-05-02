import axios from "axios";
import auth from "./auth";

const getToken = () => {
    if(!auth.isAuthenticated()){
        auth.login()
    }

    const token = auth.getToken();

    return token
};

const api = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
        'Authorization': `${getToken()}`
    }
});

export default api;