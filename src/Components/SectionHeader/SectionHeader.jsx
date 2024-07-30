// * Imports
import { useEffect, useRef } from "react";
import style from "./SectionHeader.module.css";
// * Script
const SectionHeader = ({
  title,
  subtitle,
  chip,
  chipSize,
  chipWeight,
  align,
  titleSize,
  subtitleSize,
  paddingLeft,
  titleMaker,
}) => {
  const titleDom = useRef(null);
  useEffect(() => {
    if (titleDom.current && title) {
      const arr = title.split(" ");
      if (titleMaker !== "") {
        for (let i = 0; i < arr.length; i++) {
          if (i === titleMaker - 1) {
            titleDom.current.innerHTML += `<span className="maker"> ${arr[i]} </span>`;
            // break;
          } else {
            titleDom.current.innerHTML += " " + arr[i];
          }
        }
      } else {
        titleDom.current.innerHTML += title;
      }
      titleDom.current = false;
      return;
    }
  }, [title, titleMaker]);
  return (
    <div className={style.SectionHeader} style={{ textAlign: align }}>
      <span
        className={style.chip}
        style={{
          display: chip === undefined ? "none" : "block",
          fontSize: chipSize,
          fontWeight: chipWeight,
        }}
      >
        {chip}
      </span>
      <h2
        ref={titleDom}
        className={style.title}
        style={{
          display: title === undefined ? "none" : "block",
          fontSize: titleSize,
        }}
      ></h2>
      <p
        className={style.subtitle}
        style={{
          display: subtitle === undefined ? "none" : "block",
          paddingLeft: paddingLeft,
          fontSize: subtitleSize,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
