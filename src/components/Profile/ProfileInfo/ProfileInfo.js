import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img src="https://w-dog.ru/wallpapers/9/14/510486625703609/vodopad-more-ozero-deep-forest-derevya-nebo-oblaka-pejzazh-priroda-ozera-dremuchie-lesa-krasivyj-solnechnyj-svet.jpg" />
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
