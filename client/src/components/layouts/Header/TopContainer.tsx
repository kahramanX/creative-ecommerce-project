import React from "react";
import { Link } from "react-router-dom";

type Props = {
  setOpenMenuOnHeader: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
};
const TopContainer: React.FC<Props> = ({ setOpenMenuOnHeader }) => {
  return (
    <div className="header-top-container">
      <div
        className="mobile-menu-btn"
        onClick={() => setOpenMenuOnHeader(true)}
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
          <div className="action-btn">
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="action-btn">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="action-btn">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="action-btn">
            <span className="material-symbols-outlined">shopping_bag</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
