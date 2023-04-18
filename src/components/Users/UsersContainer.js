import React from "react";
import Users from "./Users";
import {
  followUser,
  unfollowUser,
  setUsers,
  getTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import { userAPI } from "../../api/userAPI";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.getTotalUsersCount(response.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setUsers(response.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <Users
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  getTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);
