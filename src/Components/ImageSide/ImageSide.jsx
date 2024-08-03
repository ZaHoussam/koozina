// * Imports
import style from "./ImageSide.module.css";
import members from "../../assets/users.png";
import SectionHeader from "../SectionHeader/SectionHeader";
import chef1 from "../../assets/chef-1.jpg";
import chef3 from "../../assets/chef-3.jpg";
import chef4 from "../../assets/chef-4.jpg";
// * Script
const ImageSide = ({ img, memberscase, instructors }) => {
  return (
    <div className={style.right}>
      <span className={style.shadow}></span>
      <div className={style.content1}>
        <img src={img} alt="cover" className={style.cover} />
      </div>
      <div className={style.content2}>
        <img src={img} alt="cover" className={style.cover} />
      </div>
      <div
        className={style.members}
        style={{ display: memberscase ? "flex" : "none" }}
      >
        <div className={style.img}>
          <img src={members} alt="members" />
        </div>
        <div className={style.txt}>
          <h3 className={style.num}>+ 13.4k</h3>
          <span>عضو نشط</span>
        </div>
      </div>
      <div
        className={style.instructor}
        style={{ display: instructors ? "block" : "none" }}
      >
        <SectionHeader chip="الخبراء" chipSize="0.8rem" chipWeight="800" />
        <ul className={style.instructors}>
          <li>
            <img src={chef3} alt="" />
          </li>
          <li>
            <img src={chef4} alt="" />
          </li>
          <li>
            <img src={chef1} alt="" />
          </li>
          <li>+30</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageSide;
