// * Imports
import style from "./Students.module.css";
import { SectionHeader, StudentCard } from "../../Components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import students from "../../Data/StudentData/StudentData";
import { useRef, useState } from "react";
// * Script
const Students = () => {
  const [progress, setProgress] = useState(0);
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

  const handleSlideChange = () => {
    setProgress(
      swiperRef.current.swiper.realIndex /
        (swiperRef.current.swiper.slides.length - 1)
    );
    console.log(
      "realIndex:",
      swiperRef.current.swiper.realIndex,
      "slides.length:",
      swiperRef.current.swiper.slides.length,
      "progressValue:",
      progress * 100
    );
  };
  return (
    <div className={style.students}>
      <SectionHeader
        title="ماذا يقول طلابنا عن منصتنا"
        titleSize="2.5rem"
        subtitle="اطلع على مدى إعجاب طلابنا المتميزين بتجربتهم في رحلة تعلم فنون الطهي معنا و كيف أثرت على تطوير مهاراتهم"
        subtitleSize="1.1rem"
        align="center"
        titleMaker={3}
      />
      <Swiper
        onSlideChange={handleSlideChange}
        dir="rtl"
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={50}
        className={`mySwiper`}
        modules={[Navigation]}
      >
        {students.map((student, i) => (
          <SwiperSlide key={i}>
            <StudentCard
              img={student.img}
              name={student.name}
              desc={student.desc}
              location={student.location}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
        <div className={style.progressBar}>
          <span style={{ width: `${progress * 100}%` }}></span>
        </div>
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
  );
};

export default Students;
