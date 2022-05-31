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
  },
  addEntity: async (payload) => {
    return await protectedAxios.post(`/api/entity`, payload)
  },
  getAllEntities: async (tablename) => {
    return await protectedAxios.get(`/api/entity/${tablename}`)
  },
  deleteEntityById: async (rowId) => {
    return await protectedAxios.delete(`/api/entity/${rowId}`)
  },
};

export default API;
