import React from "react";
import s from "./addNewMessage.module.css";

const AddNewMessage = (props) => {
  const newMessageElement = React.createRef();

  const updateMessageText = () => {
    props.dispatch({
      type: "UPDATE-MESSAGE-TEXT",
      text: newMessageElement.current.value,
    });
  };

  const addNewMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
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
