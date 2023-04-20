import { instance } from "./instanceAPI";

export const authAPI = {
  me() {
    return instance.get(`auth/me/`).then((response) => response.data.data);
  },
};
