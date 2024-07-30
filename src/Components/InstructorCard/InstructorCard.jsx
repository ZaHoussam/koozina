// * Imports
import style from "./InstructorCard.module.css";
// * Script
const InstructorCard = ({ img, name, experience }) => {
  return (
    <div className={style.card}>
      <img src={img} alt="instructor" className={style.img} />
      <h3 className={style.name}>{name}</h3>
      <span className={style.experience}>{experience}</span>
    </div>
  );
};

export default InstructorCard;
