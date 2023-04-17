import React from "react";
import axios from "axios";
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
