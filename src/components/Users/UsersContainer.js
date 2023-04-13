import Users from "./Users";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
  setUsersActionCreator,
  getTotalUsersCountActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (UserId) => dispatch(followUserActionCreator(UserId)),
  unfollowUser: (UserId) => dispatch(unfollowUserActionCreator(UserId)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
  getTotalUsersCount: (totalUsersCount) =>
    dispatch(getTotalUsersCountActionCreator(totalUsersCount)),
  setCurrentPage: (pageNumber) =>
    dispatch(setCurrentPageActionCreator(pageNumber)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
