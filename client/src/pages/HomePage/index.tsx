import TextMarquee from "components/shared/TextMarquee";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { FastAverageColor } from "fast-average-color";
import BannerImage from "assets/images/bannerImage.webp";
import Product from "components/shared/Product";
import "assets/styles/components/homePage/homepage.scss";
import SortedCategories from "./SortedCategories";

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
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
