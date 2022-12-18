import React from "react";

type Props = {};

const WideMenu = (props: Props) => {
  return (
    <div className="header-bottom-container">
      <div className="menu-list-container">
        <div className="list-container">
          Categories
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <div className="list-container">About Us</div>
        <div className="list-container">Blog</div>
        <div className="list-container">Payment And Delivery</div>
        <div className="list-container">Contacts</div>
        <div className="list-container">Public Offer</div>
        <div className="list-container">Cooperation</div>
        <div className="list-container">Privacy Policy</div>
        <div className="list-container">Help</div>
      </div>
    </div>
  );
};

export default WideMenu;
