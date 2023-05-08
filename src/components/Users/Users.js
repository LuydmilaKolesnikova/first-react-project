import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
      />
      {props.isFetching ? <Preloader /> : null}
      <UserItem
        users={props.users}
        followingProgress={props.followingProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    </div>
  );
};

export default Users;
