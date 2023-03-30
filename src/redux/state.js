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
  },

  getState() {
    return this._state;
  },

  _rerenderReactDOM() {},

  subscribe(observer) {
    this._rerenderReactDOM = observer;
  },

  updatePostText(newPostText) {
    this._state.profilePage.newPostText = newPostText;
    this._rerenderReactDOM(this._state);
  },

  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderReactDOM(this._state);
  },

  updateMessageText(newMessageText) {
    this._state.dialogsPage.newMessageText = newMessageText;
    this._rerenderReactDOM(this._state);
  },

  addMessage() {
    const newMessage = {
      id: 4,
      avatar:
        "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._rerenderReactDOM(this._state);
  },
};

/* export const updatePostText = (newPostText) => {
  store.state.profilePage.newPostText = newPostText;
  rerenderReactDOM(store.state);
}; 

export const addPost = () => {
  const newPost = {
    id: 3,
    message: store.state.profilePage.newPostText,
    likesCount: 0,
  };
  store.state.profilePage.posts.push(newPost);
  store.state.profilePage.newPostText = "";
  rerenderReactDOM(store.state);
};

export const updateMessageText = (newMessageText) => {
  store.state.dialogsPage.newMessageText = newMessageText;
  rerenderReactDOM(store.state);
};

export const addMessage = () => {
  const newMessage = {
    id: 4,
    avatar:
      "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
    message: store.state.dialogsPage.newMessageText,
  };
  store.state.dialogsPage.messages.push(newMessage);
  store.state.dialogsPage.newMessageText = "";
  rerenderReactDOM(store.state);
};

export const subscribe = (observer) => {
  rerenderReactDOM = observer;
};*/

export default store;
