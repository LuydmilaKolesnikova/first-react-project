import { instance } from "./instanceAPI";

export const profileAPI = {
  getProfile(location) {
    return instance.get(`profile/${location}`).then((response) => response);
  },
};
