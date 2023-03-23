import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <img src="https://l-userpic.livejournal.com/130040691/87395708"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
