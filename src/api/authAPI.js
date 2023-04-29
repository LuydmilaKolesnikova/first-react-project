import { instance } from "./instanceAPI";

export const authAPI = {
  me() {
    return instance.get(`auth/me/`).then((response) => response.data.data);
  },

  login(email, password, rememberMe = false) {
       return instance
      .post(`auth/login/`, {
        email: email,
        password: password,
        rememberMe: rememberMe,
        captcha: true,
      })
      .then((response) => response.data);
  },

  logout() {
    return instance.delete(`auth/login/`).then((response) => response.data);
  },
};
