import TextMarquee from "components/shared/TextMarquee";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { FastAverageColor } from "fast-average-color";
import BannerImage from "assets/images/bannerImage.webp";

type Props = {};

const HomePage: React.FC = (props: Props) => {
  const [bannerBackgroundColor, setBannerBackgroundColor] = useState<string>();

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
      {/*   <TextMarquee
        text="Bestsellers"
        textColor="black"
        backgroundColor="yellow"
        iconColor="black"
      />

      <TextMarquee
        text="Categories"
        textColor="black"
        backgroundColor="white"
        iconColor="red"
      /> */}
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
