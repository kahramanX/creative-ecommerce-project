import React from "react";
import Marquee from "react-fast-marquee";
import "assets/styles/components/textMarquee.scss";
type MarqueeI = {
  text: string;
  backgroundColor: "yellow" | "white" | "transparent";
  textColor: "black" | "white";
  iconColor: "black" | "red" | "yellow";
};

const TextMarquee: React.FC<MarqueeI> = ({
  text,
  textColor,
  backgroundColor,
  iconColor,
}) => {
  const iconStyles = {
    color: `${
      iconColor === "black"
        ? "#000000"
        : iconColor === "red"
        ? "#d11354"
        : iconColor === "yellow"
        ? "#fff178"
        : "#000000"
    }`,
    textStroke: "none",
  };

  return (
    <div className={`marquee-line background-${backgroundColor}`}>
      <Marquee gradient={false} speed={100} loop={0}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((el, index: number) => (
          <span
            key={index}
            className={`marquee-text text-${textColor} ${
              index % 2 && "text-stroke"
            }`}
          >
            {text}
            {index % 2 ? (
              <span style={iconStyles} className="material-symbols-outlined">
                star_rate
              </span>
            ) : (
              <span style={iconStyles} className="material-symbols-outlined">
                star_half
              </span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TextMarquee;
