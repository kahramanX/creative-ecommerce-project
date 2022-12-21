import React from "react";
import "assets/styles/components/shared/filterAccordion.scss";
import { FilteredAccordionI } from "types/types";

type Props = {
  FATitle: string;
  FAItems: FilteredAccordionI[];
};

const FilterAccordion: React.FC<Props> = ({ FATitle, FAItems }) => {
  return (
    <details className="filtered-accordion-container">
      <summary className="fltr-acc-title">
        {FATitle} <span className="material-symbols-outlined">add</span>
      </summary>
      <div className="fltr-acc-content">
        <div className="fltr-items">
          {FAItems.map((FAitem, index) => {
            return (
              <div className="filter-item">
                <input id={`item-${index}`} type={"checkbox"} />
                <label htmlFor={`item-${index}`}>{FAitem.label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </details>
  );
};

export default FilterAccordion;
