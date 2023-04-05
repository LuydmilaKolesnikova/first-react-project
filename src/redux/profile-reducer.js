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
    case UPDATE_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }

    case ADD_POST: {
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    default:
      return state;
  }
};

export default profileReducer;
