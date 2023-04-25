import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar_default from "../../../assets/images/avatar_default.jpeg";
import ProfileStatusContainer from "../ProfileStatus/ProfileStatusContainer";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <img
        className={s.bg}
        src="https://w-dog.ru/wallpapers/9/14/510486625703609/vodopad-more-ozero-deep-forest-derevya-nebo-oblaka-pejzazh-priroda-ozera-dremuchie-lesa-krasivyj-solnechnyj-svet.jpg"
      />

      <div className={s.descriptionBlock}>
        {props.profile.photos.small ? (
          <img className={s.avatar} src={props.profile.photos.small} />
        ) : (
          <img className={s.avatar} src={avatar_default} />
        )}
        <ProfileStatusContainer
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.profile.aboutMe}</div>
        <div>
          <p>facebook: {props.profile.contacts.facebook}</p>
          <p>website: {props.profile.contacts.website}</p>
          <p>vk {props.profile.contacts.vk}</p>
          <p>twitter: {props.profile.contacts.twitter}</p>
          <p>instagram: {props.profile.contacts.instagram}</p>
          <p>youtube: {props.profile.contacts.youtube}</p>
          <p>github: {props.profile.contacts.github}</p>
          <p>mainLink: {props.profile.contacts.mainLink}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
