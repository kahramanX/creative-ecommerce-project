import LayeredButton from "components/shared/LayeredButton";
import FlatButton from "components/shared/FlatButton";
import Product from "components/shared/Product";
import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import LayeredInput from "components/shared/LayeredInput";
import BlogPost from "components/shared/BlogPost";
import Accordion from "components/shared/Accordion";

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
      <br />
      <div>
        <LayeredInput
          inputType={"text"}
          placeholderText={"Your Name"}
          onChangeAction={() => console.log(" on change")}
        />
      </div>
      <br />
      <div>
        <BlogPost
          blogPostTitle="How to properly use patches under the eyes?"
          blogPostLink="bloglinkxxx"
          blogPostShortDesc="Putches under the eyes quickly entered the beauty sphere and today many women around the world use xxxxxxxxxxxxxxxxxxxxxxx"
          blogPostImage={BannerImage}
        />
      </div>
      <div>
        <Accordion
          accordionTitle="Just test bro"
          accordionContent={
            "<p>Im testing bro</p><p>yes bro just testing :)</p><p>:)</p>"
          }
        />
      </div>

      <div>
        <label htmlFor={"testing"}> Hey guys</label>
        <input id="testing" type={"checkbox"} />
        <input type={"checkbox"} checked />
        <input type={"radio"} checked />
      </div>
    </div>
  );
};

export default Components;
