import { ClockLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.spinner}>
      <ClockLoader />
    </div>
  );
};

export default Loader;
