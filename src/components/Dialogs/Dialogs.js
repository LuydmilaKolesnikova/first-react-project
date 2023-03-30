import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddNewMessage from "./addNewMessage/addNewMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message messages={m} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddNewMessage
          newMessageText={props.dialogsPage.newMessageText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;
