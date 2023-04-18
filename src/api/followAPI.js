import { instance } from "./instanceAPI";

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  unFollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
