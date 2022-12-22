import React from "react";

type Props = {
  isDiscounted: boolean;
  prevPrice?: number;
  currentPrice: number;
};

const PriceBox: React.FC<Props> = ({
  isDiscounted,
  prevPrice,
  currentPrice,
}) => {
  return (
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
  );
};

export default PriceBox;
