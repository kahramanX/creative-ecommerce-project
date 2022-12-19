import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import "assets/styles/components/homePage/banner.scss";

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
        <img src={BannerImage} />
      </div>
      <div style={bannerStyle} className="banner-right">
        <div className="banner-right-box">
          <div className="bnr-right-texts">
            <span>Tenderness, care</span>
            <span>and warmth inside</span>
          </div>
          <div className="btn"> Shop</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
