import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params["*"]);
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

let authNavigateComponent = withAuthNavigateComponent(ProfileContainer);

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
  getUserProfile,
})(withRouter(authNavigateComponent));
