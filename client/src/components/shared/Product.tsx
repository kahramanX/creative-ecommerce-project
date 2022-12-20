import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import "assets/styles/components/shared/product.scss";
import { Link } from "react-router-dom";

type Props = {};

const Product: React.FC = () => {
  return (
    <Link to={"#"}>
      <div className="product-box">
        <div className="product-top">
          <div className="product-fav">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="product-image">
            <img src={BannerImage} />
          </div>
        </div>
        <div className="product-bottom">
          <div className="pt-bottom-left">
            <div className="product-title">
              Face roller + Face serum with glycolic AHA acid
            </div>
          </div>
          <div className="pt-bottom-right">
            <div className="price-box">
              <div className="prev-price">
                <span className="prev-price-value">
                  <span className="current-price-value">
                    30.00 <span className="currency">$</span>
                  </span>
                </span>
              </div>
              <div className="current-price">
                <span className="current-price-value">
                  30.00 <span className="currency">$</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
