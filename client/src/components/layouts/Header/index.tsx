import React, { useState } from "react";
import "assets/styles/components/layouts/header.scss";
import TopContainer from "./TopContainer";
import WideMenu from "./WideMenu";
import ResponsiveHeaderMenu from "components/ResponsiveHeaderMenu";

type Props = {};

const Header: React.FC = () => {
  const [openMenuOnHeader, setOpenMenuOnHeader] = useState<boolean>();

  return (
    <>
      <header>
        <TopContainer setOpenMenuOnHeader={setOpenMenuOnHeader} />
        <WideMenu setOpenMenuOnHeader={setOpenMenuOnHeader} />
      </header>
      <ResponsiveHeaderMenu
        setOpenMenuOnHeader={setOpenMenuOnHeader}
        openMenuOnHeader={openMenuOnHeader}
      />
      <div
        className={`ghost-screen ${
          openMenuOnHeader === true ? "open" : "close"
        }`}
      ></div>
    </>
  );
};

export default Header;
