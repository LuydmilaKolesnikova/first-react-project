import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div className={s.bg}>
      <ProfileInfo />
      <Posts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
