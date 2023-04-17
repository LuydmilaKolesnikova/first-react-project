import React from "react";
import s from "./Users.module.css";
import avatar_default from "../../assets/images/avatar_default.jpeg";
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalUsersCount / 5000);
    //i <= Math.ceil(props.totalUsersCount / props.pageSize);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <div>
        {pages.map((p) => (
          <button
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
              props.onPageChange(p);
            }}
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.userItem}>
          <div className={s.image}>
            <NavLink to={`/profile/${u.id}`}>
              <img
                className={s.avatar}
                src={u.photos.small ? u.photos.small : avatar_default}
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  className={s.followBtn}
                  onClick={() => props.unfollowUser(u.id)}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  className={s.followBtn}
                  onClick={() => props.followUser(u.id)}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </div>
          <div className={s.info}>
            <div>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.location}>
              <div className={s.country}>{u.country}</div>
              <div className={s.city}>{u.city}</div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};
export default Users;
