import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeI = {};

const TextMarquee: React.FC<MarqueeI> = () => {
  return (
    <div>
      <Marquee gradient={false} speed={100} loop={0}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((el, index: number) => (
          <span className="marquee-text">
            BLOG
            {index % 2 ? (
              <span className="material-symbols-outlined">star_rate</span>
            ) : (
              <span className="material-symbols-outlined">star_rate_half</span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TextMarquee;
