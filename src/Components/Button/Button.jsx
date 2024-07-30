// * Imports
import style from "./Button.module.css";
import { useState } from "react";
// *Script
function Button({ txt, bg }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <a
      href="#"
      className={style.btn}
      style={
        bg
          ? {
              backgroundColor: isHovered ? "#ff1744" : "var(--red-color)",
              color: "var(--bg-section)",
            }
          : {
              backgroundColor: isHovered ? "#ff1744" : "transparent",
              color: isHovered ? "#fff" : "var(--red-color)",
            }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {txt}
    </a>
  );
}

export default Button;
