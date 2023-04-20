import { profileAPI } from "../api/profileAPI";

const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    text: text,
  };
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

let initialState = {
  posts: [
    { id: 1, message: "Hi!", likesCount: 11 },
    { id: 2, message: "How are you?", likesCount: 23 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }

    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 3,
            message: state.newPostText,
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
    default:
      return { ...state };
  }
};

export const getUserProfile = (location) => {
  return (dispatch) => {
    if (!location) {
      location = 2;
    }
    profileAPI.getProfile(location).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
