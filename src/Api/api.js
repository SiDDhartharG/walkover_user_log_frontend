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
  addTable: async (payload) => {
    return await protectedAxios.post(`/api/table/${payload}`)
  }
};

export default API;
