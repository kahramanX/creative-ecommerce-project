import LayeredButton from "components/shared/LayeredButton";
import FlatButton from "components/shared/FlatButton";
import Product from "components/shared/Product";
import React from "react";
import BannerImage from "assets/images/bannerImage.webp";
import LayeredInput from "components/shared/LayeredInput";
import BlogPost from "components/shared/BlogPost";
import Accordion from "components/shared/Accordion";
import FilterAccordion from "components/shared/FilterAccordion";
import { FilteredAccordionI } from "types/types";
import FlatInput from "components/shared/FlatInput";

const Components: React.FC = () => {
  const FilterAccordionContent: FilteredAccordionI[] = [
    { label: "XXX color" },
    { label: "XXX style" },
    { label: "XXX border" },
    { label: "XXX content" },
  ];

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
      <br />
      <div>
        <Accordion
          accordionTitle="Just test bro"
          accordionContent={
            "<p>Im testing bro</p><p>yes bro just testing :)</p><p>:)</p>"
          }
        />
      </div>
      <br />
      <div>
        <label htmlFor={"testing"}> Hey guys</label>
        <input id="testing" type={"checkbox"} />
        <input type={"checkbox"} defaultChecked />
        <input type={"radio"} defaultChecked />
      </div>
      <br />
      <div>
        <FilterAccordion FATitle="Type" FAItems={FilterAccordionContent} />
      </div>
      <br />
      <div>
        <FlatInput
          labelText="Your address"
          inputType="text"
          action={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
        <br />
        <FlatInput
          labelText="Your exrewrew"
          inputType="text"
          action={() => console.log("alfodsorewq")}
        />
      </div>
    </div>
  );
};

export default Components;
