import React from "react";
import "assets/styles/components/searchPage/searchPage.scss";
import LayeredInput from "components/shared/LayeredInput";
import Product from "components/shared/Product";
import BannerImage from "assets/images/bannerImage.webp";
import NothingHere from "components/NothingHere";

type Props = {};

const SearchPage: React.FC = (props: Props) => {
  return (
    <div className="searchpage">
      <div className="page-title">
        <h1>Search 🔍</h1>
      </div>
      <div className="page-content">
        <LayeredInput inputType="text" placeholderText="Search..." />
        <div className="searched-products-container">
          {[0, 1, 2, 3, 4, 5].map((product, index) => {
            return (
              <Product
                key={index}
                productTitle={"Alışveriş çantası Krasa Riatuie Svit "}
                productImage={BannerImage}
                productLink="#"
                isDiscounted={true}
                prevPrice={60}
                currentPrice={31}
              />
            );
          })}
        </div>
        <NothingHere />
      </div>
    </div>
  );
};

export default SearchPage;
