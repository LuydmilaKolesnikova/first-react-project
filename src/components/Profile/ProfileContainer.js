import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params["*"]);
    this.props.getStatus(this.props.router.params["*"]);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
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

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthNavigateComponent
)(ProfileContainer);
