import React from "react";
import { Link } from "react-router-dom";

type Props = {
  setOpenResponsiveMenuOnHeader: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
};
const TopContainer: React.FC<Props> = ({ setOpenResponsiveMenuOnHeader }) => {
  return (
    <div className="header-top-container">
      <div
        className="mobile-menu-btn"
        onClick={() => setOpenResponsiveMenuOnHeader(true)}
      >
        <span className="material-symbols-outlined">menu</span>
      </div>

      <div className="header-top-left">
        <Link to={"/"}>
          <div className="logo">Mr.SCRUBBER</div>
        </Link>
      </div>

      <div className="header-top-right">
        <div className="lang-selection-box">
          <span className="selected-lang">EN</span>|<span>TR</span>
        </div>
        <div className="header-user-actions">
          <Link to={"/search"} className="action-btn">
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to={"/user"} className="action-btn">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link to={"/favorites"} className="action-btn">
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link to={"/orders"} className="action-btn">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
