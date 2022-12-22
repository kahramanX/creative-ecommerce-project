import Product from "components/shared/Product";
import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import NothingHere from "components/NothingHere";
import { Helmet } from "react-helmet-async";

type Props = {};

const FavoritesPage: React.FC = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>Favorites❤️ | Mr.SCRUBBER</title>
      </Helmet>
      <div className="searchpage">
        <div className="page-title">
          <h1>Favorites ❤️</h1>
        </div>
        <div className="page-content">
          <div className="searched-products-container">
            {[0, 1, 2, 3, 4, 5].map((product, index) => {
              return (
                <Product
                  key={index}
                  productTitle={"Alışveriş çantası Krasa Riatuie Svit "}
                  productImage={BannerImage}
                  productLink="#"
                  isDiscounted={true}
                  isFavorited={true}
                  prevPrice={60}
                  currentPrice={31}
                />
              );
            })}
          </div>
          <NothingHere />
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
