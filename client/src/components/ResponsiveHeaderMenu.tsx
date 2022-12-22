import React from "react";
import "assets/styles/components/responsiveHeaderMenu.scss";
import LinkItem from "./shared/MenuItem";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  setOpenMenuOnHeader: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  openMenuOnHeader: boolean | undefined;
};

const ResponsiveHeaderMenu: React.FC<Props> = ({
  setOpenMenuOnHeader,
  openMenuOnHeader,
}) => {
  return (
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
  );
};

export default ResponsiveHeaderMenu;
