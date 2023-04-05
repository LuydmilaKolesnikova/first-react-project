const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const updateMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    text: text,
  };
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.text;

      return stateCopy;
    }

    case SEND_MESSAGE: {
      const newMessage = {
        id: 4,
        avatar:
          "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
        message: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }

    default:
      return state;
  }
};

export default dialogsReducer;
