import s from "./Friends.module.css";
import FriendItems from "./FriendItems/FriendItems";

const Friends = (props) => {
  return (
    <div className={s.friends}>
      <h3 className={s.friendTitle}>Friends</h3>
      <FriendItems friends={props.friends} />
    </div>
  );
};

export default Friends;
