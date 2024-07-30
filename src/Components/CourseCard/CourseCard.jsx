// * Imports
import style from "./CourseCard.module.css";
import timeImg from "../../assets/time.png";
import books from "../../assets/livres.png";
import subscribe from "../../assets/people.png";
import { useEffect, useRef } from "react";
// * Script
const CourseCard = ({
  img,
  title,
  courseCase,
  time,
  numberCourses,
  numSubscribes,
  chefs,
}) => {
  const chefsDom = useRef(null);
  useEffect(() => {
    if (chefsDom.current) {
      if (chefs.length > 1) {
        for (let i = 0; i < chefs.length; i++) {
          if (i === 2) {
            chefsDom.current.innerHTML += `<span className="count"> ${chefs.length}+ </span>`;
            chefsDom.current.innerHTML += `<i className="txt"> عدد المدربين </i>`;
            break;
          } else {
            chefsDom.current.innerHTML += `<img src=${chefs[i].img} alt="chef" />`;
          }
        }
      } else {
        for (let i = 0; i < chefs.length; i++) {
          chefsDom.current.innerHTML += `<img src=${chefs[i].img} alt="chef" />`;
          chefsDom.current.innerHTML += `<i className="txt"> ${chefs[i].name} </i>`;
        }
      }
      chefsDom.current = false;
      return;
    }
  }, [chefs]);

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={img} alt="course" />
        <span>{courseCase}</span>
      </div>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.info}>
        <li>
          <img src={books} alt="numberCourses" />
          {numberCourses}
        </li>
        <li>
          <img src={timeImg} alt="time" />
          {time}
        </li>
        <li>
          <img src={subscribe} alt="numSubscribes" />
          {numSubscribes}
        </li>
      </ul>
      <div className={style.chefs} ref={chefsDom}></div>
    </div>
  );
};

export default CourseCard;
