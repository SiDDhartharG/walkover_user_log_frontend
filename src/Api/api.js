import { publicAxios, protectedAxios } from "./axios";
import { interceptor } from "./interceptor";
interceptor.requestInterceptor();
interceptor.responseInterceptor();
const API = {
  login: async (payload) => {
    const loginApi = "/api/user/login";
    return await publicAxios.post(loginApi, payload);
  },
  signup: async (payload) => {
    const signupApi = "/api/user/signup";
    return await publicAxios.post(signupApi, payload);
  },
  addTable:async (payload)=>{
    console.log(payload);
  }
};

export default API;
