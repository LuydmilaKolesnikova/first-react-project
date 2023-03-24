import s from "./FriendItem.module.css";

const FriendItem = (props) => {
  return (
    <div className={s.friendItem}>
      <img src={props.friends.avatar}></img>
      <div>{props.friends.name}</div>
    </div>
  );
};

export default FriendItem;
