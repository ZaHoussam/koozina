// * Imports
import style from "./Header.module.css";
import { Button, Logo } from "../../Components/index";
// * Script
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <Logo logo="كوزينة" />
          <ul className={style.links}>
            <li>
              <a href="#!">الدورات</a>
            </li>
            <li>
              <a href="#!">الأسعار</a>
            </li>
            <li>
              <a href="#!">المدونة</a>
            </li>
            <li>
              <a href="#!">الدخول</a>
            </li>
            <li>
              <Button txt="إبدأ الآن" bg={true} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
