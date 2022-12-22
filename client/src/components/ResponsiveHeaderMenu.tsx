import React from "react";
import "assets/styles/components/responsiveHeaderMenu.scss";
import LinkItem from "./shared/MenuItem";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  setOpenResponsiveMenuOnHeader: React.Dispatch<React.SetStateAction<boolean>>;
  setisGhostScreenActive: React.Dispatch<React.SetStateAction<boolean>>;
  openResponsiveMenuOnHeader: boolean | undefined;
};

const ResponsiveHeaderMenu: React.FC<Props> = ({
  setOpenResponsiveMenuOnHeader,
  setisGhostScreenActive,
  openResponsiveMenuOnHeader,
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenResponsiveMenuOnHeader(false);
        setisGhostScreenActive(false);
      }}
    >
      <div
        className={`responsive-header-menu-container ${
          openResponsiveMenuOnHeader === true ? "open" : "close"
        }`}
      >
        <div
          className="header-menu-mobile-close-btn"
          onClick={() => {
            setisGhostScreenActive(false);
            setOpenResponsiveMenuOnHeader(false);
          }}
        >
          <span className="material-symbols-outlined">close</span>
        </div>

        <div className="header-desktop-menu">
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
        <div className="header-mobile-menu">
          <details>
            <summary>
              <LinkItem
                linkName="Categories"
                link="#"
                linkIconName="expand_more"
              />
            </summary>
            <div className="mobile-acc-content">
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
          </details>
          <LinkItem linkName="About Us" link="#" />
          <LinkItem linkName="Blog" link="#" />
          <LinkItem linkName="Payment And Delivery" link="#" />
          <LinkItem linkName="Contacts" link="#" />
          <LinkItem linkName="Public Offer" link="#" />
          <LinkItem linkName="Cooperation" link="#" />
          <LinkItem linkName="Privacy Policy" link="#" />
          <LinkItem linkName="Help" link="#" />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ResponsiveHeaderMenu;
