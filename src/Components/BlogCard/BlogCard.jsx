// * Imports
import style from "./BlogCard.module.css";
// * Script
const BlogCard = ({ img, title, desc, date }) => {
  return (
    <div className={style.card}>
      <img src={img} alt="blog" />
      <h3 className={style.title}>{title}</h3>
      <p className={style.desc}>{desc}</p>
      <span className={style.date}> {date} </span>
    </div>
  );
};

export default BlogCard;
