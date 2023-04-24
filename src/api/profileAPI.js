import { instance } from "./instanceAPI";

export const profileAPI = {
  getProfile(location) {
    return instance.get(`profile/${location}`).then((response) => response);
  },

  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response);
  },

  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((response) => response);
  },
};
