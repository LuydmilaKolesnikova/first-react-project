import { authAPI } from "../api/authAPI";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

export const setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const getAuthUserData = () => {
  return async (dispatch) => {
    const response = await authAPI.me();
    let { id, email, login } = response;
    dispatch(setAuthUserData(id, email, login, id ? true : false));
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(stopSubmit("login", { _error: response.messages }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
