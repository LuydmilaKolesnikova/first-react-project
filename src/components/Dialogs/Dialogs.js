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
  let dialogsData = [
    { id: "1", name: "Alina" },
    { id: "2", name: "Slava" },
    { id: "3", name: "Karolina" },
    { id: "4", name: "Vlad" },
    { id: "5", name: "Anna" },
  ];
  let messagesData = [
    { id: "1", message: "Hi!" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "What's up!" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
