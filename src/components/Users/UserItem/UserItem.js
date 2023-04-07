import s from "./UserItem.module.css";

const Users = (props) => {
  return (
    <div className={s.userItem}>
      <div className={s.image}>
        <img className={s.avatar} src={props.avatar} />
        <div>
          {props.followed ? (
            <button
              className={s.followBtn}
              onClick={() => props.unfollowUser(props.id)}
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              className={s.followBtn}
              onClick={() => props.followUser(props.id)}
            >
              FOLLOW
            </button>
          )}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div className={s.name}>{props.name}</div>
          <div className={s.status}>{props.status}</div>
        </div>
        <div className={s.location}>
          <div className={s.country}>{props.country}</div>
          <div className={s.city}>{props.city}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Users;
