import LayeredButton from "components/shared/LayeredButton";
import FlatButton from "components/shared/FlatButton";
import Product from "components/shared/Product";
import React from "react";
import BannerImage from "assets/images/bannerImage.webp";

const Components: React.FC = () => {
  return (
    <div className="components-container">
      <div>
        <LayeredButton text="Shop Now" textSize="sm" />
      </div>
      <br />
      <div>
        <FlatButton text="Send message" textSize="md" />
      </div>
      <br />
      <div>
        <Product
          productTitle={"alışveriş sssssssssssssssssssssssssssssçantası"}
          productImage={BannerImage}
          productLink="#"
          isDiscounted={false}
          currentPrice={30}
        />
        <Product
          productTitle={"Alışveriş çantası Krasa Riatuie Svit "}
          productImage={BannerImage}
          productLink="#"
          isDiscounted={true}
          prevPrice={60}
          currentPrice={31}
        />
      </div>
    </div>
  );
};

export default Components;
