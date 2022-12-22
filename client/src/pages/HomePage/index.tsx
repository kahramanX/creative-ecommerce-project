import TextMarquee from "components/shared/TextMarquee";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { FastAverageColor } from "fast-average-color";
import FormImage from "assets/images/formImage.webp";
import BannerImage from "assets/images/bannerImage.webp";
import Product from "components/shared/Product";
import "assets/styles/components/homePage/homepage.scss";
import SortedCategories from "./SortedCategories";
import BlogPost from "components/shared/BlogPost";
import LayeredButton from "components/shared/LayeredButton";
import LayeredInput from "components/shared/LayeredInput";

type Props = {};

const HomePage: React.FC = (props: Props) => {
  const [bannerBackgroundColor, setBannerBackgroundColor] = useState<string>();
  const [onHoverCategory, setOnHoverCategory] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(BannerImage);

  async function getAverageColorFromBannerImage() {
    const fac = new FastAverageColor();

    let result: any;
    try {
      result = await fac.getColorAsync(BannerImage);
      setBannerBackgroundColor(result.hex);
      return result.hex;
    } catch (error) {
      console.log("Error from banner", error);
    }

    return result.hex;
  }

  useEffect(() => {
    getAverageColorFromBannerImage();
  }, []);

  return (
    <>
      <Helmet>
        <title>MR.SCRUBBER</title>
      </Helmet>
      <Banner bannerColorCode={bannerBackgroundColor} />
      <TextMarquee
        text="Bestsellers"
        textColor="black"
        backgroundColor="yellow"
        iconColor="black"
      />

      <div className="hp-bestsellers-section">
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
      <TextMarquee
        text="Categories"
        textColor="black"
        backgroundColor="white"
        iconColor="red"
        isBorderActive={false}
      />
      <div className="hp-categories-section">
        <SortedCategories
          setOnHoverCategory={setOnHoverCategory}
          setSelectedImage={setSelectedImage}
          onHoverCategory={onHoverCategory}
          selectedImage={selectedImage}
        />
      </div>
      <div className="hp-sales-section">
        <TextMarquee
          text="Sales"
          textColor="white"
          backgroundColor="transparent"
          iconColor="yellow"
          isBorderActive={false}
        />
        <div className="hp-sales-container">
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
      </div>
      <TextMarquee
        text="Blog"
        textColor="black"
        backgroundColor="transparent"
        iconColor="red"
        isBorderActive={false}
      />
      <div className="hp-blog-section">
        {[0, 1, 2].map((product, index) => {
          return (
            <BlogPost
              key={index}
              blogPostTitle="How to properly use patches under the eyes?"
              blogPostLink="bloglinkxxx"
              blogPostShortDesc="Putches under the eyes quickly entered the beauty sphere and today many women around the world use xxxxxxxxxxxxxxxxxxxxxxx"
              blogPostImage={BannerImage}
            />
          );
        })}
      </div>
      <div className="hp-subscription-section">
        <div className="hp-subscription-form-container">
          <div className="form-subs-left">
            <div>
              <p>Sign Up to be the first to know about new products,</p>
              <p>special offers and promotions</p>
            </div>
            <LayeredInput placeholderText="Your Name" inputType="text" />
            <LayeredInput placeholderText="Your Email" inputType="text" />
            <LayeredButton text="Send" textSize="sm" />
          </div>
          <div className="form-subs-right">
            <img src={FormImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
