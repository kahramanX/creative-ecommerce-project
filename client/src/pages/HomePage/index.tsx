import TextMarquee from "components/shared/TextMarquee";
import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {};

const HomePage: React.FC = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>MR.SCRUBBER</title>
      </Helmet>
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
