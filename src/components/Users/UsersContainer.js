import Users from "./Users";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
} from "../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (UserId) => dispatch(followUserActionCreator(UserId)),
  unfollowUser: (UserId) => dispatch(unfollowUserActionCreator(UserId)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
