import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const Profile = (props) => {
  return (
    <div>
      
      <ProfileInfo profile={props.profile} />
      <ProfileStatusContainer/>
      <PostsContainer />
    </div>
  );
};

export default Profile;
