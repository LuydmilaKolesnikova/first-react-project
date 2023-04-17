import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let location = this.props.router.params["*"];
    if (!location) {
      location = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${location}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function WithUrlDataContainerComponent(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return WithUrlDataContainerComponent;
}

export default connect(mapStateToProps, {
  setUserProfile,
})(withRouter(ProfileContainer));
