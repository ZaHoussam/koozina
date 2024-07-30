// * Imports
import style from "./StudentCard.module.css";
// * Script
const StudentCard = ({ img, name, location, desc }) => {
  return (
    <div className={style.card}>
      <img src={img} alt="student" />
      <div className={style.info}>
        <h3 className={style.name}>{name}</h3>
        <span className={style.location}>{location}</span>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default StudentCard;
