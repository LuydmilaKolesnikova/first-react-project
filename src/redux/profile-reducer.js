const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

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

let initialState = {
  posts: [
    { id: 1, message: "Hi!", likesCount: 11 },
    { id: 2, message: "How are you?", likesCount: 23 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      return state;

    case ADD_POST:
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    default:
      return state;
  }
};

export default profileReducer;
