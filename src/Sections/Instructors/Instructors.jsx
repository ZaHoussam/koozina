// * Imports
import style from "./Instructors.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { InstructorCard, SectionHeader } from "../../Components";
import instructors from "../../Data/InstructorData/InstructorData";
import { useRef, useState } from "react";
// * Script
const Instructors = () => {
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
    <div className={style.instructors}>
      <SectionHeader
        titleMaker={2}
        title="اكتشف المدربين"
        titleSize="2.5rem"
        align="center"
        subtitle="انطلق في رحلة اكتشاف الطهي مع فريقنا المتنوع من المدربين الماهربن، كل واحد منهم يقدم خبرته الفريدة."
        subtitleSize="1.5rem"
        paddingLeft="0"
      />
      <Swiper
        // onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={handleSlideChange}
        dir="rtl"
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={50}
        className={`mySwiper`}
        modules={[Navigation]}
      >
        {instructors.map((instructor, i) => (
          <SwiperSlide key={i}>
            <InstructorCard
              img={instructor.img}
              name={instructor.name}
              experience={instructor.experience}
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

export default Instructors;
