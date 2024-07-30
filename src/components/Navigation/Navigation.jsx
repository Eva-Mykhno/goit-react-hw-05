import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
