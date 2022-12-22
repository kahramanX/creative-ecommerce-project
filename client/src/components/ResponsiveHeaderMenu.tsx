import React from "react";
import "assets/styles/components/responsiveHeaderMenu.scss";
import LinkItem from "./shared/MenuItem";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  setOpenResponsiveMenuOnHeader: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  openResponsiveMenuOnHeader: boolean | undefined;
};

const ResponsiveHeaderMenu: React.FC<Props> = ({
  setOpenResponsiveMenuOnHeader,
  openResponsiveMenuOnHeader,
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenResponsiveMenuOnHeader(false);
      }}
    >
      <div
        className={`responsive-header-menu-container ${
          openResponsiveMenuOnHeader === true ? "open" : "close"
        }`}
      >
        <div
          className="header-menu-mobile-close-btn"
          onClick={() => setOpenResponsiveMenuOnHeader(false)}
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
