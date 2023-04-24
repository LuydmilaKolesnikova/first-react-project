import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <ProfileStatusContainer
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
