import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import avatar_default from "../../assets/images/avatar_default.jpeg";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.userItem}>
          <div className={s.image}>
            <img
              className={s.avatar}
              src={u.avatar ? u.avatar : avatar_default}
            />
            <div>
              {u.followed ? (
                <button
                  className={s.followBtn}
                  onClick={() => props.unfollowUser(u.id)}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  className={s.followBtn}
                  onClick={() => props.followUser(u.id)}
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

export default Users;
