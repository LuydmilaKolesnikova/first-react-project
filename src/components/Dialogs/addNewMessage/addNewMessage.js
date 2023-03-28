import React from "react";
import s from "./addNewMessage.module.css";

const AddNewMessage = (props) => {
  const newMessageElement = React.createRef();

  const updateMessageText = () => {
    const text = newMessageElement.current.value;
    props.updateMessageText(text);
  };

  const addNewMessage = () => {
    props.addMessage();
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
