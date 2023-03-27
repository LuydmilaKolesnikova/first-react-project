import React from "react";
import s from "./addNewMessage.module.css";

const AddNewMessage = () => {
  const newMessageElement = React.createRef();

  const addNewMessage = () => {
    alert(newMessageElement.current.value);
  };

  return (
    <div className={s.addNewMessage}>
      <textarea ref={newMessageElement}></textarea>
      <div>
        <button onClick={addNewMessage}>add message</button>
      </div>
    </div>
  );
};

export default AddNewMessage;
