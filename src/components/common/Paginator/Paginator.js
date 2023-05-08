import React from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
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
  );
};

export default Paginator;
