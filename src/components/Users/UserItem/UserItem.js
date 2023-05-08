import s from "./UserItem.module.css";
import { NavLink } from "react-router-dom";
import avatar_default from "../../../assets/images/avatar_default.jpeg";

const UserItem = (props) => {
  return (
    <div key={props.users.id} className={s.userItem}>
      <div className={s.image}>
        <NavLink to={`/profile/${props.users.id}`}>
          <img
            className={s.avatar}
            src={
              props.users.photos.small
                ? props.users.photos.small
                : avatar_default
            }
          />
        </NavLink>
        <div>
          {props.users.followed ? (
            <button
              disabled={props.followingProgress.some(
                (id) => id === props.users.id
              )}
              className={s.followBtn}
              onClick={() => {
                props.unfollow(props.users.id);
              }}
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              disabled={props.followingProgress.some(
                (id) => id === props.users.id
              )}
              className={s.followBtn}
              onClick={() => {
                props.follow(props.users.id);
              }}
            >
              FOLLOW
            </button>
          )}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div className={s.name}>{props.users.name}</div>
          <div className={s.status}>{props.users.status}</div>
        </div>
        <div className={s.location}>
          <div className={s.country}>{props.users.country}</div>
          <div className={s.city}>{props.users.city}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserItem;
