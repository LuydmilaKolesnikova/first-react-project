import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    sidebar: {
      friends: [
        {
          id: "1",
          name: "Alina",
          avatar:
            "https://sun9-88.userapi.com/c631325/u32907738/video/y_9f09c057.jpg",
        },
        {
          id: "2",
          name: "Slava",
          avatar:
            "https://i.pinimg.com/736x/81/f8/b0/81f8b0e89fec5014636a0f83e251ee92.jpg",
        },
        {
          id: "3",
          name: "Vlad",
          avatar:
            "https://wallbox.ru/resize/640x960/wallpapers/main/201143/koshki-472912b53a18.jpg",
        },
      ],
    },

    profilePage: {
      posts: [
        { id: 1, message: "Hi!", likesCount: 11 },
        { id: 2, message: "How are you?", likesCount: 23 },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Alina",
          avatar:
            "https://sun9-88.userapi.com/c631325/u32907738/video/y_9f09c057.jpg",
        },
        {
          id: 2,
          name: "Slava",
          avatar:
            "https://i.pinimg.com/736x/81/f8/b0/81f8b0e89fec5014636a0f83e251ee92.jpg",
        },
        {
          id: 3,
          name: "Karolina",
          avatar:
            "https://www.quicosenza.it/news/wp-content/uploads/2015/05/dbfe8dfb2c68121c3371b19f012c27ca.jpg",
        },
        {
          id: 4,
          name: "Vlad",
          avatar:
            "https://wallbox.ru/resize/640x960/wallpapers/main/201143/koshki-472912b53a18.jpg",
        },
        {
          id: 5,
          name: "Anna",
          avatar: "https://i.7fon.org/150/u292714.jpg",
        },
      ],

      messages: [
        {
          id: 1,
          message: "Hello!",
          avatar:
            "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
        },
        {
          id: 2,
          message: "How are you?",
          avatar:
            "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
        },
        {
          id: 3,
          message: "What's up!",
          avatar:
            "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
        },
      ],
      newMessageText: "",
    },

    /*usersPage: {
      users: [
        {
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
        },
      ],
    },*/
  },

  getState() {
    return this._state;
  },

  _rerenderReactDOM() {},

  subscribe(observer) {
    this._rerenderReactDOM = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);
    usersReducer(this._state.usersPage, action);

    this._rerenderReactDOM(this._state);
  },
};

export default store;
