//import { rerenderReactDOM } from "../render";
let rerenderReactDOM = () => {};

let state = {
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
};

export const updatePostText = (newPostText) => {
  state.profilePage.newPostText = newPostText;
  rerenderReactDOM(state);
};

export const addPost = () => {
  const newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderReactDOM(state);
};

export const updateMessageText = (newMessageText) => {
  state.dialogsPage.newMessageText = newMessageText;
  rerenderReactDOM(state);
};

export const addMessage = () => {
  const newMessage = {
    id: 4,
    avatar:
      "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderReactDOM(state);
};

export const subscribe = (observer) => {
  rerenderReactDOM = observer;
};

window.state = state;
export default state;
