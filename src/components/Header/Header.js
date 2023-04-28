import s from "./Header.module.css";
import { Navigate } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      {props.isAuth ? (
        <div>
          <div>{props.loginName}</div>
          <button onClick={props.logout}>LogOut</button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </header>
  );
};

export default Header;
