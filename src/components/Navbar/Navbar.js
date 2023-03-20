import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
