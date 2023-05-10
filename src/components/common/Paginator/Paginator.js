import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  const pagePortionCount = Math.ceil(
    props.totalUsersCount / props.pageSize / props.pagePortion
  );
  let [portionNumber, setPotionNumber] = useState(1);
  let leftPageNumber = (portionNumber - 1) * props.pagePortion + 1;
  let rightPageNumber = portionNumber * props.pagePortion;
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) {
    pages.push(i);
  }

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPotionNumber(portionNumber - 1)}>PREV</button>
      )}
      {pages
        .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
        .map((p) => (
          <button
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
              props.onPageChange(p);
            }}
          >
            {p}
          </button>
        ))}
      {portionNumber < pagePortionCount && (
        <button
          onClick={() => {
            console.log("NEXT");
            return setPotionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
