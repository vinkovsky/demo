import axios from "axios";

axios.defaults.baseURL = "http://localhost:4444";
axios.defaults.headers = {
  "Content-type": "application/json",
};

export const AuthService = {
  async login(email, password) {
    return axios.post("auth/login", { email, password });
  },
  async register(email, password) {
    return axios.post("auth/login", { email, password });
  },
};
