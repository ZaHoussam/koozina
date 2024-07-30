// * Imports
import style from "./OurPartner.module.css";
import image1 from "../../assets/coursera.svg";
import image2 from "../../assets/EdX.svg";
import image3 from "../../assets/Udemy.svg";
import image4 from "../../assets/Skillshare.svg";
import { SectionHeader } from "../../Components";
// * Script
const OurPartner = () => {
  return (
    <div className={style.OurPartner}>
      <div className="container">
        <SectionHeader
          title="شركائنا الموثوقين"
          align="center"
          titleSize="2.5rem"
          titleMaker={1}
        />
        <ul>
          <li>
            <img src={image1} alt="coursera" />
          </li>
          <li>
            <img src={image2} alt="edx" />
          </li>
          <li>
            <img src={image3} alt="udemy" />
          </li>
          <li>
            <img src={image4} alt="skillshare" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurPartner;
