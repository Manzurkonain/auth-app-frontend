import type RegisterData from '@/models/Registerdata';
import apiClient from '@/Config/ApiClient';

const registerUser=async(signUpData:RegisterData)=>{
    //api ko call krna he to save data 
    const response = await apiClient.post("/auth/register",signUpData);
    return response.data;
}

export default registerUser