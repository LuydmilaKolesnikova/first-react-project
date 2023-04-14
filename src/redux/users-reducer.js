const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET-USERS";
const GET_TOTAL_USERS_COUNT = "GET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const followUser = (userId) => {
  return {
    type: FOLLOWED,
    userId,
  };
};

export const unfollowUser = (userId) => {
  return {
    type: UNFOLLOWED,
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

let initialState = {
  users: [
    /* {
      id: 1,
      name: "Alina",
      avatar:
        "https://sun9-88.userapi.com/c631325/u32907738/video/y_9f09c057.jpg",
      status: "I am good",
      followed: true,
      location: { country: "Russia", city: "Moscow" },
    },
    {
      id: 2,
      name: "Slava",
      avatar:
        "https://i.pinimg.com/736x/81/f8/b0/81f8b0e89fec5014636a0f83e251ee92.jpg",
      status: "I am ok",
      followed: false,
      location: { country: "Russia", city: "Sankt-Petersburg" },
    },
    {
      id: 3,
      name: "Karolina",
      avatar:
        "https://www.quicosenza.it/news/wp-content/uploads/2015/05/dbfe8dfb2c68121c3371b19f012c27ca.jpg",
      status: "I am allright",
      followed: true,
      location: { country: "Russia", city: "Novosibirsk" },
    },
    {
      id: 4,
      name: "Vlad",
      avatar:
        "https://wallbox.ru/resize/640x960/wallpapers/main/201143/koshki-472912b53a18.jpg",
      status: "I am fine",
      followed: false,
      location: { country: "Russia", city: "Kaliningrad" },
    },
    {
      id: 5,
      name: "Anna",
      avatar: "https://i.7fon.org/150/u292714.jpg",
      status: "I am the best",
      followed: true,
      location: { country: "Russia", city: "Vladivostok" },
    }, */
  ],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED: {
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

    case UNFOLLOWED: {
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

    default:
      return { ...state };
  }
};

export default usersReducer;
