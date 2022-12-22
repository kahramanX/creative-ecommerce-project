import React, { useState } from "react";
import "assets/styles/components/layouts/header.scss";
import TopContainer from "./TopContainer";
import WideMenu from "./WideMenu";
import ResponsiveHeaderMenu from "components/ResponsiveHeaderMenu";

type Props = {};

const Header: React.FC = () => {
  const [openResponsiveMenuOnHeader, setOpenResponsiveMenuOnHeader] =
    useState<boolean>();

  return (
    <>
      <header>
        <TopContainer
          setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        />
        <WideMenu
          setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        />
      </header>
      <ResponsiveHeaderMenu
        setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        openResponsiveMenuOnHeader={openResponsiveMenuOnHeader}
      />
      <div
        className={`ghost-screen ${
          openResponsiveMenuOnHeader === true ? "open" : "close"
        }`}
      ></div>
    </>
  );
};

export default Header;
