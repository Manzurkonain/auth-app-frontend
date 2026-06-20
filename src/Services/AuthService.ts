import type RegisterData from '@/models/Registerdata';
import apiClient from '@/Config/ApiClient';
import type LoginData from '@/models/LoginData';
import type LoginResponseData from '@/models/LoginResponseData';

export const registerUser=async(signUpData:RegisterData)=>{
    //api ko call krna he to save data 
    const response = await apiClient.post("/auth/register",signUpData);
    return response.data;
}

export const loginUser=async(loginData:LoginData)=>{
    
    const response = await apiClient.post<LoginResponseData>("/auth/login",loginData);
    return response.data;
}

export const logoutUser=async()=>{
    const response = await apiClient.post("/auth/logout");
    return response.data;
}

export const refreshToken = async () => {
  const response = await apiClient.post<LoginResponseData>(`/auth/refresh`);
  return response.data;
};