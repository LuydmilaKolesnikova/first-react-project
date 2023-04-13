import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import avatar_default from "../../assets/images/avatar_default.jpeg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.getTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pages = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.totalUsersCount / 5000);
      //i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      i++
    ) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => (
            <button
              className={this.props.currentPage === p && s.selectedPage}
              onClick={() => {
                this.onPageChange(p);
              }}
            >
              {p}
            </button>
          ))}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={s.userItem}>
            <div className={s.image}>
              <img
                className={s.avatar}
                src={u.photos.small ? u.photos.small : avatar_default}
              />
              <div>
                {u.followed ? (
                  <button
                    className={s.followBtn}
                    onClick={() => this.props.unfollowUser(u.id)}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    className={s.followBtn}
                    onClick={() => this.props.followUser(u.id)}
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
  }
}

/* const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.userItem}>
          <div className={s.image}>
            <img
              className={s.avatar}
              src={u.avatar ? u.avatar : avatar_default}
            />
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
}; */

export default Users;
