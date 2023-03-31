import React from "react";
import s from "./sendMessage.module.css";
import {
  updateMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../../redux/dialogs-reducer";

const SendMessage = (props) => {
  const updateMessageText = (e) => {
    props.dispatch(updateMessageTextActionCreator(e.target.value));
  };

  const sendNewMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div className={s.addNewMessage}>
      <textarea
        onChange={updateMessageText}
        value={props.newMessageText}
      ></textarea>
      <div>
        <button onClick={sendNewMessage}>send message</button>
      </div>
    </div>
  );
};

export default SendMessage;
