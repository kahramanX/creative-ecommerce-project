import LinkItem from "components/shared/MenuItem";
import React from "react";

type Props = {
  setOpenResponsiveMenuOnHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const WideMenu: React.FC<Props> = ({ setOpenResponsiveMenuOnHeader }) => {
  return (
    <div className="header-bottom-container">
      <div className="menu-list-container">
        <LinkItem
          linkName="Categories"
          link="#"
          linkIconName="expand_more"
          action={() => setOpenResponsiveMenuOnHeader(true)}
        />
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
  );
};

export default WideMenu;
