import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={s.bg}>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
