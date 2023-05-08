import { profileAPI } from "../api/profileAPI";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

export const addPost = (text) => {
  return {
    type: ADD_POST,
    text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};

let initialState = {
  posts: [
    { id: 1, message: "Hi!", likesCount: 11 },
    { id: 2, message: "How are you?", likesCount: 23 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 3,
            message: action.text,
            likesCount: 0,
          },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const getUserProfile = (location) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(location);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (location) => {
  return async (dispatch) => {
    if (!location) {
      location = 28795;
    }
    const response = await profileAPI.getStatus(location);
    dispatch(setUserStatus(response.data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    await profileAPI.updateStatus(status);
    dispatch(setUserStatus(status));
  };
};

export default profileReducer;
