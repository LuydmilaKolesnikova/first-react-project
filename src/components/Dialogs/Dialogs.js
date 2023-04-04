import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message messages={m} />
  ));

  const updateMessageText = (e) => {
    props.updateMessageText(e.target.value);
  };

  const sendNewMessage = () => {
    props.sendNewMessage();
  };

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
            <button onClick={sendNewMessage}>send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
