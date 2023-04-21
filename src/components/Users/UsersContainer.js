import React from "react";
import Users from "./Users";
import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingProgress={this.props.followingProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
  followingProgress: state.usersPage.followingProgress,
});

let authNavigateComponent = withAuthNavigateComponent(UsersContainer);

export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
})(authNavigateComponent);
