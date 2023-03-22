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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Alina" id="1" />
        <DialogItem name="Slava" id="2" />
        <DialogItem name="Karolina" id="3" />
        <DialogItem name="Vlad" id="4" />
        <DialogItem name="Anna" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="How are you" />
        <Message message="What's up!" />
      </div>
    </div>
  );
};

export default Dialogs;
