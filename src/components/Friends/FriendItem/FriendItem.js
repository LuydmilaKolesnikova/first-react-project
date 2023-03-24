import s from "./FriendItem.module.css";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
  return (
    <NavLink to={/friends/} className={s.friendItem}>
      <img src={props.avatar}></img>
      <div>{props.name}</div>
    </NavLink>
  );
};

export default FriendItem;
