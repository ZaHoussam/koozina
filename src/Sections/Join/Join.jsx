// * Imports
import { Button } from "../../Components";
import style from "./Join.module.css";

// * Script
const Join = () => {
  return (
    <div className={style.join}>
      <div className={style.content}>
        <h2 className={style.title}>انضم إلى نشرتنا البريدية</h2>
        <span className={style.subtitle}>للبقاء على اطلاع</span>
        <form className={style.form}>
          <input
            type="email"
            name="email"
            placeholder="ادخل عنوان بريدك الإلكتروني"
          />
          <Button txt="اشترك" bg={true} />
        </form>
        <p className={style.security}>
          خصوصيتك تهمنا . نحرص على حماية معلوماتك لتجربة آمنة و سرية.
        </p>
      </div>
    </div>
  );
};

export default Join;
