// * Imports
import { BlogCard, Button, SectionHeader } from "../../Components";
import style from "./Blog.module.css";
import blogs from "../../Data/BlogData/BlogData";
// * Script
const Blog = () => {
  return (
    <div className={style.blog}>
      <div className="container">
        <div className={style.blogHeader}>
          <SectionHeader
            chip="المدونة"
            title="المصادر و الرؤى"
            titleSize="2.5rem"
            subtitle="أطلق العنان لثروة من المعرفة الطهوية من خلال قسم الموارد و الرؤى لدينا - مكانك المفضل للحصول على نصائح الخبراء، ووصفات الطعام، و فنون الطبخ التي لا تقدر بثمن."
            subtitleSize="1rem"
          />
          <Button txt="اكتشف" bg={false} />
        </div>
        <div className={style.cards}>
          {blogs.map((blog, i) => (
            <BlogCard
              key={i}
              img={blog.img}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
