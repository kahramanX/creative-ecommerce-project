import React, { useState } from "react";
import "assets/styles/components/layouts/header.scss";
import TopContainer from "./TopContainer";
import WideMenu from "./WideMenu";
import ResponsiveHeaderMenu from "components/ResponsiveHeaderMenu";

type Props = {};

const Header: React.FC = () => {
  const [openResponsiveMenuOnHeader, setOpenResponsiveMenuOnHeader] =
    useState<boolean>(false);
  const [isGhostScreenActive, setisGhostScreenActive] =
    useState<boolean>(false);

  return (
    <>
      <header>
        <TopContainer
          setisGhostScreenActive={setisGhostScreenActive}
          setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        />
        <WideMenu
          setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        />
      </header>
      <ResponsiveHeaderMenu
        setisGhostScreenActive={setisGhostScreenActive}
        setOpenResponsiveMenuOnHeader={setOpenResponsiveMenuOnHeader}
        openResponsiveMenuOnHeader={openResponsiveMenuOnHeader}
      />
      <div
        className={`ghost-screen ${
          isGhostScreenActive === true ? "open" : "close"
        }`}
      ></div>
    </>
  );
};

export default Header;
