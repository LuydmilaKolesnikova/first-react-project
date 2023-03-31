import React from "react";
import s from "./addNewMessage.module.css";
import {
  updateMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../redux/state";

const AddNewMessage = (props) => {
  const newMessageElement = React.createRef();

  const updateMessageText = () => {
    props.dispatch(
      updateMessageTextActionCreator(newMessageElement.current.value)
    );
  };

  const addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  return (
    <div className={s.addNewMessage}>
      <textarea
        onChange={updateMessageText}
        ref={newMessageElement}
        value={props.newMessageText}
      ></textarea>
      <div>
        <button onClick={addNewMessage}>add message</button>
      </div>
    </div>
  );
};

export default AddNewMessage;
