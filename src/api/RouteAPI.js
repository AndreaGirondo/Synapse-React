import { axiosInstance } from "./BaseAPI";


export const RegisterUser = async (name, email, password, password_confirmation) => {
    const response = await axiosInstance.post('/register', name, email, password, password_confirmation );
    return response.data;
}

export const LoginUser = async (email, password) => {
    const response = await axiosInstance.post('/login',  email, password );
    return response.data;
}