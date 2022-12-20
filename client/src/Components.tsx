import LayeredButton from "components/shared/LayeredButton";
import Product from "components/shared/Product";
import React from "react";

const Components: React.FC = () => {
  return (
    <div className="components-container">
      <div>
        <LayeredButton text="Shop Now" textSize="sm" />
      </div>
      <br />
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Components;
