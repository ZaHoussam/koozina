// * Import
import style from "./Hero.module.css";
import { Button, SectionHeader, ImageSide } from "../../Components/index";
import cover from "../../assets/cover.png";
// * Script
const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.left}>
        <SectionHeader
          title="تعلم فنون الطبخ من أفضل الطباخين في العالم."
          subtitle=" ارفع (ي) مستوى خبرتك في الطهي من خلال الممارسة المنتظمة على منصتنا. اطلق (ي) العنان لمهارتك في الطهي عبر مغامرتنا اللذيذة"
          chip="تستطيع"
          align="start"
          paddingLeft="125px"
        />
        <div className={style.btns}>
          <Button txt="إنضم لنا" bg={true} />
          <Button txt="إكتشف" bg={false} />
        </div>
      </div>
      <ImageSide img={cover} memberscase={true} instructors={true} />
    </section>
  );
};

export default Hero;
