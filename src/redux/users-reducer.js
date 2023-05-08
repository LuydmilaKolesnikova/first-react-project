import { userAPI } from "../api/userAPI";

const FOLLOWED_SUCCESSED = "FOLLOWED_SUCCESSED";
const UNFOLLOWED_SUCCESSED = "UNFOLLOWED_SUCCESSED";
const SET_USERS = "SET-USERS";
const GET_TOTAL_USERS_COUNT = "GET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

export const followedSuccessed = (userId) => {
  return {
    type: FOLLOWED_SUCCESSED,
    userId,
  };
};

export const unfollowedSuccessed = (userId) => {
  return {
    type: UNFOLLOWED_SUCCESSED,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const getTotalUsersCount = (totalUsersCount) => {
  return {
    type: GET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleFollowingProgress = (isFetching, id) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    id,
  };
};

let initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
  isFetching: false,
  followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED_SUCCESSED: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOWED_SUCCESSED: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }

    case GET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((e) => e !== action.id),
      };
    }

    default:
      return state;
  }
};

export const getAllowedUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(getTotalUsersCount(response.totalCount));
    dispatch(toggleIsFetching(false));
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await userAPI.followUser(userId);
    if (response.resultCode === 0) {
      dispatch(followedSuccessed(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await userAPI.unfollowUser(userId);
    if (response.resultCode === 0) {
      dispatch(unfollowedSuccessed(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }
  };
};

export default usersReducer;
