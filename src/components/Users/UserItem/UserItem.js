import s from "./UserItem.module.css";
import { NavLink } from "react-router-dom";
import avatar_default from "../../../assets/images/avatar_default.jpeg";

const UserItem = (props) => {
  return (
    <div>
     {props.users.map((u) => (
        <div key={u.id} className={s.userItem}>
          <div className={s.image}>
            <NavLink to={`/profile/${u.id}`}>
              <img
                className={s.avatar}
                src={u.photos.small ? u.photos.small : avatar_default}
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  className={s.followBtn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  className={s.followBtn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </div>
          <div className={s.info}>
            <div>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.location}>
              <div className={s.country}>{u.country}</div>
              <div className={s.city}>{u.city}</div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default UserItem;
