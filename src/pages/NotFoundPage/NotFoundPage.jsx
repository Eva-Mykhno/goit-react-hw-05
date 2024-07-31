import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Sorry... The page is not found</p>
      <div className={s.goHome}>
        <FaArrowLeftLong />
        <NavLink className={s.button} to="/">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};
export default NotFoundPage;
