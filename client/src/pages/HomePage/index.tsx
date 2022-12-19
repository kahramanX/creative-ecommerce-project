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
      <TextMarquee />

      <div>HomePage</div>
    </>
  );
};

export default HomePage;
