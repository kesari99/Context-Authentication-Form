import axiosInstance from '@/api/axiosInstance.js';


export async function registerService(signUpFormData){
    const {data} = await axiosInstance.post('/auth/register', {
        ...signUpFormData,
        role: 'user'
    })

    return data
}


export async function loginService(formData){
    const {data} = await axiosInstance.post('/auth/login', {
        ...formData,
        
    })

    return data
}


export async function checkAuthService(){
    try {
        const { data } = await axiosInstance.get("/auth/check-auth");
        return data;
      } catch (err) {
        
        return { success: false, message: "Authentication failed" };
      }
}