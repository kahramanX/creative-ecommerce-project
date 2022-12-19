import React from "react";
import { FooterSectionI, ListName } from "types/types";

const FooterSection: React.FC<FooterSectionI | any> = ({ sectionInfos }) => {
  return (
    <div className="footer-section">
      <div className="section-title">{sectionInfos.sectionTitle}</div>
      <div className="section-item-list">
        <ul>
          {sectionInfos.lists.map((element: ListName, index: number) => (
            <li key={index}>
              {element?.listIcon} {element.listName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
