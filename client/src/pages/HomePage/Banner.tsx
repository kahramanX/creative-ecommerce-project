import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import "assets/styles/components/homePage/banner.scss";
import LayeredButton from "components/shared/LayeredButton";

type Props = {
  bannerColorCode: string | undefined;
};

const Banner: React.FC<Props> = ({ bannerColorCode }) => {
  const bannerStyle = {
    backgroundColor: bannerColorCode,
  };

  return (
    <div className="banner-container">
      <div className="banner-left">
        <img src={BannerImage} alt={"img"} />
      </div>
      <div style={bannerStyle} className="banner-right">
        <div className="banner-right-box">
          <div className="bnr-right-texts">
            <span>Tenderness, care</span>
            <span>and warmth inside</span>
          </div>
          <LayeredButton text="Shop Now" textSize="sm" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
