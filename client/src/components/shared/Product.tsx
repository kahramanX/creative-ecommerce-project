import React from "react";
import "assets/styles/components/shared/product.scss";
import { Link } from "react-router-dom";
import { FilledFavoriteIcons, OutlinedFavoriteIcons } from "assets/Icons/icons";
import PriceBox from "./PriceBox";

type Props = {
  productTitle: string;
  productImage: string;
  productLink: string;
  isDiscounted: boolean;
  prevPrice?: number;
  currentPrice: number;
  isFavorited?: boolean;
};

const Product: React.FC<Props> = ({
  productTitle,
  productImage,
  isDiscounted,
  prevPrice,
  currentPrice,
  productLink = "#",
  isFavorited,
}) => {
  return (
    <Link to={productLink}>
      <div className="product-box">
        <div className="product-top">
          <div className="product-fav">
            {isFavorited === true ? (
              <FilledFavoriteIcons />
            ) : (
              <OutlinedFavoriteIcons />
            )}
          </div>
          <div className="product-image">
            <img src={productImage} alt={"img"} />
          </div>
        </div>
        <div className="product-bottom">
          <div className="pt-bottom-left">
            <div className="product-title">{productTitle}</div>
          </div>
          <div className="pt-bottom-right">
            <PriceBox
              isDiscounted={isDiscounted}
              prevPrice={prevPrice}
              currentPrice={currentPrice}
            />
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
