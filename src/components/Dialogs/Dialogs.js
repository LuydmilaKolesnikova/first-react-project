import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: "1", name: "Alina" },
    { id: "2", name: "Slava" },
    { id: "3", name: "Karolina" },
    { id: "4", name: "Vlad" },
    { id: "5", name: "Anna" },
  ];
  let messages = [
    { id: "1", message: "Hi!" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "What's up!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
