import React, { useState, useEffect, useRef } from "react";
import "assets/styles/components/layouts/header.scss";
import TopContainer from "./TopContainer";
import WideMenu from "./WideMenu";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header>
      <TopContainer />
      <WideMenu />
    </header>
  );
};

export default Header;
