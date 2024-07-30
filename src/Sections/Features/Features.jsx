// * Imports
import style from "./Features.module.css";
import { Button, SectionHeader, ImageSide } from "../../Components/index";
import cover from "../../assets/features.png";
import icon1 from "../../assets/feature-1.png";
import icon2 from "../../assets/feature-2.png";
import icon3 from "../../assets/feature-3.png";
// * Script
const Features = () => {
  return (
    <div className={style.features}>
      <ImageSide img={cover} memberscase={true} instructors={false} />
      <div className={style.right}>
        <SectionHeader
          title="مميزات لذيذة"
          titleSize="2.5rem"
          chip="لدينا"
          subtitle="اكتشف الميزات الاستثنائية لمنصتنا مصممة من أجل إتاخة التعلم السلس والتجارب التفاعلية من أجل إتقان فن الطهي"
          subtitleSize="1.1rem"
          titleMaker={2}
        />
        <ul className={style.list}>
          <li>
            <span className={style.icon}>
              <img src={icon1} alt="icon" />
            </span>
            <div className={style.txt}>
              <h2 className={style.title}>التعلم المتكامل</h2>
              <p className={style.desc}>
                أتقن فن الطبخ من خلال منهجنا الشامل، المناسب لجميع مستويات
                المهارة
              </p>
            </div>
          </li>
          <li>
            <span className={style.icon}>
              <img src={icon2} alt="icon" />
            </span>
            <div className={style.txt}>
              <h2 className={style.title}>ممارسة المطبخ الافتراضي</h2>
              <p className={style.desc}>
                انغمس في الطهي العملي من خلال مطبخنا الافتراضي التفاعلي، حيث
                يمكنك ممارسة الوصفات والتفاعل مع مجتمع داعم
              </p>
            </div>
          </li>
          <li>
            <span className={style.icon}>
              <img src={icon3} alt="icon" />
            </span>
            <div className={style.txt}>
              <h2 className={style.title}>دورات متقدمة بقيادة الخبراء</h2>
              <p className={style.desc}>
                ارفع مهارتك من خلال دروس ماقدمة حصرية في الوقت الفعلي يقودها
                خبراء الصناعة، وابق على اطلاع بأحدث اتجاهات الطبخ
              </p>
            </div>
          </li>
        </ul>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "30px" }}
        >
          <Button txt="إنضم لنا" bg={true} />
          <div className={style.message}>
            <h4 className={style.messageTitle}>تواصل مع</h4>
            <p className={style.messageSubtitle}>أفضل الطباخين في العالم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
