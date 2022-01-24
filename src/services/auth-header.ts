import { AxiosRequestHeaders } from "axios";

export default function authHeader():AxiosRequestHeaders {
    const userStr= localStorage.getItem('User');
    let user=null;
    if(userStr){
        user=JSON.parse(userStr);
    }
    if(user && user.accessToken){
        return {'x-access-token': user.accessToken};
    }else{
        return {};
    }
}