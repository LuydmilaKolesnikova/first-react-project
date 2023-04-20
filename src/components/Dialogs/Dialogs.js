import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message messages={m} key={m.id} />
  ));

  const updateMessageText = (e) => {
    props.updateMessageText(e.target.value);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.addNewMessage}>
          <textarea
            onChange={updateMessageText}
            value={props.dialogsPage.newMessageText}
          ></textarea>
          <div>
            <button onClick={props.sendMessage}>send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
