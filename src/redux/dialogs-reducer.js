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

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;

    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        avatar:
          "https://img1.goodfon.com/original/800x480/c/f5/li-feng-snow-swan-lebed.jpg",
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
