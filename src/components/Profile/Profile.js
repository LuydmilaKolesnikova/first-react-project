import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
       <img className={s.bg} src="https://w-dog.ru/wallpapers/9/14/510486625703609/vodopad-more-ozero-deep-forest-derevya-nebo-oblaka-pejzazh-priroda-ozera-dremuchie-lesa-krasivyj-solnechnyj-svet.jpg" />
      <ProfileInfo profile={props.profile}/>
      <PostsContainer />
    </div>
  );
};

export default Profile;
