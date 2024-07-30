// * Imports
import style from "./Courses.module.css";
import { CourseCard, SectionHeader } from "../../Components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import courses from "../../Data/CourseData/CourseData";
import { useRef, useState } from "react";
// * Script
const Courses = () => {
  const swiperRef = useRef(null);
  const [arrowNext, setarrowNext] = useState(true);
  const [arrowPrev, setarrowPrev] = useState(false);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      if (arrowNext) {
        setarrowNext(arrowNext);
        setarrowPrev(false);
      } else {
        setarrowNext(!arrowNext);
        setarrowPrev(false);
      }
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      if (arrowPrev) {
        setarrowPrev(arrowPrev);
        setarrowNext(false);
      } else {
        setarrowPrev(!arrowPrev);
        setarrowNext(false);
      }
    }
  };
  return (
    <div className={style.courses}>
      <div className={style.courseHeader}>
        <SectionHeader
          titleMaker={2}
          chip="دورات رائجة"
          chipSize="1.2rem"
          chipWeight="500"
          title="اختر دورة تناسبك وابدأ في تعلم فنون الطبخ"
          titleSize="2rem"
        />
        <div className={style.arrows}>
          <span onClick={handlePrev} className={arrowPrev ? style.active : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="#c2c2c3"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </span>
          <span onClick={handleNext} className={arrowNext ? style.active : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="#c2c2c3"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </span>
        </div>
      </div>
      <Swiper
        dir="rtl"
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={100}
        className="mySwiper"
        modules={[Navigation]}
      >
        {courses.map((course, i) => (
          <SwiperSlide className={style.swiperSlide} key={i}>
            <CourseCard
              img={course.img}
              title={course.title}
              time={course.time}
              numSubscribes={course.numSubscribes}
              numberCourses={course.numberCourses}
              chefs={course.chefs}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;
