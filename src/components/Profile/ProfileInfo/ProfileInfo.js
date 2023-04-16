import s from "./ProfileInfo.module.css";
import avatar_default from "../../../assets/images/avatar_default.jpeg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <img className={s.avatar} src={props.profile.photos.small} />
        <div>
          {props.profile.aboutMe}
        </div>
        <div>
          <p>
            facebook: {props.profile.contacts.facebook}
          </p>
          <p>
            website: {props.profile.contacts.website}
          </p>
          <p>
            vk {props.profile.contacts.vk}
          </p>
          <p>
            twitter: {props.profile.contacts.twitter}
          </p>
          <p>
            instagram: {props.profile.contacts.instagram}
          </p>
          <p>
            youtube: {props.profile.contacts.youtube}
          </p>
          <p>
            github: {props.profile.contacts.github}
          </p>
          <p>
            mainLink: {props.profile.contacts.mainLink}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
