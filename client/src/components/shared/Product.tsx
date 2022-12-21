import React from "react";
import "assets/styles/components/shared/product.scss";
import { Link } from "react-router-dom";

type Props = {
  productTitle: string;
  productImage: string;
  productLink: string;
  isDiscounted: boolean;
  prevPrice?: number;
  currentPrice: number;
};

const Product: React.FC<Props> = ({
  productTitle,
  productImage,
  isDiscounted,
  prevPrice,
  currentPrice,
  productLink = "#",
}) => {
  return (
    <Link to={productLink}>
      <div className="product-box">
        <div className="product-top">
          <div className="product-fav">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="product-image">
            <img src={productImage} />
          </div>
        </div>
        <div className="product-bottom">
          <div className="pt-bottom-left">
            <div className="product-title">{productTitle}</div>
          </div>
          <div className="pt-bottom-right">
            <div className="price-box">
              {isDiscounted && (
                <div className="prev-price">
                  <span className="prev-price-value">
                    <span className="current-price-value">
                      {prevPrice} <span className="currency">$</span>
                    </span>
                  </span>
                </div>
              )}
              <div className="current-price">
                <span className="current-price-value">
                  {currentPrice} <span className="currency">$</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pt-hovered-button">
            Add to Cart{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
