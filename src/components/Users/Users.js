import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
  let usersElements = props.users.map((u) => {
    return (
      <UserItem
        id={u.id}
        avatar={u.avatar}
        followed={u.followed}
        name={u.name}
        status={u.status}
        country={u.location.country}
        city={u.location.city}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        key={u.id}
      />
    );
  });

  return <div>{usersElements}</div>;
};

export default Users;
