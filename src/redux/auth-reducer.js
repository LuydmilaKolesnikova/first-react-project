const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (id, email, login) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { email, id, login },
  };
};

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: action.data.login ? true : false,
      };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
