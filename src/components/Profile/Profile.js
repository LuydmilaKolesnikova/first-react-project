import s from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={s.bg}>
      <img src="https://w-dog.ru/wallpapers/9/14/510486625703609/vodopad-more-ozero-deep-forest-derevya-nebo-oblaka-pejzazh-priroda-ozera-dremuchie-lesa-krasivyj-solnechnyj-svet.jpg" />
      <div>ava+description</div>
      <Posts />
    </div>
  );
};

export default Profile;
