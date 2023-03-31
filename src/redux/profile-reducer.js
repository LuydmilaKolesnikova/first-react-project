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

const profileReducer = (state, action) => {
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
