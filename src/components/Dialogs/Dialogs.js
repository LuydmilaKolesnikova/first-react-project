import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Alina</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Slava</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Karolina</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Vlad</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Anna</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>What's up!</div>
      </div>
    </div>
  );
};

export default Dialogs;
