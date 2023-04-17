import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>{props.isAuth ? props.login : "login"}</header>
  );
};

export default Header;
