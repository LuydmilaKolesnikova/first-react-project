import s from "./FriendItems.module.css";
import FriendItem from "../FriendItem/FriendItem";

const FriendItems = (props) => {
  let friendsElements = props.friends.map((f) => (
    <FriendItem name={f.name} key={f.id} avatar={f.avatar} />
  ));

  return <div className={s.friendItems}>{friendsElements}</div>;
};

export default FriendItems;
