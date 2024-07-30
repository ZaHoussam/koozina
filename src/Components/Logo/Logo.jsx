// * Imports
import style from "./Logo.module.css";
// * Script
const Logo = ({ logo }) => {
  return (
    <a href="#" className={style.logo}>
      {logo}
    </a>
  );
};

export default Logo;
