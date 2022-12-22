import React, { useState } from "react";
import "assets/styles/components/layouts/header.scss";
import TopContainer from "./TopContainer";
import WideMenu from "./WideMenu";
import LinkItem from "components/shared/MenuItem";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {};

const Header: React.FC = () => {
  const [openMenuOnHeader, setOpenMenuOnHeader] = useState<boolean>();

  return (
    <>
      <header>
        <TopContainer
          setOpenMenuOnHeader={setOpenMenuOnHeader}
          openMenuOnHeader={openMenuOnHeader}
        />
        <WideMenu
          setOpenMenuOnHeader={setOpenMenuOnHeader}
          openMenuOnHeader={openMenuOnHeader}
        />
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenMenuOnHeader(false);
          }}
        >
          <div
            className={`responsive-header-menu-container ${
              openMenuOnHeader === true ? "open" : "close"
            }`}
          >
            <div
              className="header-menu-mobile-close-btn"
              onClick={() => setOpenMenuOnHeader(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </div>
            <LinkItem linkName="Face" />
            <LinkItem linkName="Body" />
            <LinkItem linkName="Hair" />
            <LinkItem linkName="Hand Care" />
            <LinkItem linkName="Bath" />
            <LinkItem linkName="Foot Care" />
            <LinkItem linkName="For Men" />
            <LinkItem linkName="Accessories" />
            <LinkItem linkName="Gift Sets" />
            <LinkItem linkName="For Home" />
            <LinkItem linkName="Gif Certificates" />
          </div>
        </OutsideClickHandler>
      </header>
      <div
        className={`ghost-screen ${
          openMenuOnHeader === true ? "open" : "close"
        }`}
      ></div>
    </>
  );
};

export default Header;
