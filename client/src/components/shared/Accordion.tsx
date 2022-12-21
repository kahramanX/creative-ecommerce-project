import React from "react";
import "assets/styles/components/shared/accordion.scss";

type Props = {
  accordionTitle: string;
  accordionContent: string;
};

const Accordion: React.FC<Props> = ({ accordionTitle, accordionContent }) => {
  return (
    <details className="accordion-container">
      <summary className="accordion-title">
        {accordionTitle} <span className="material-symbols-outlined">add</span>
      </summary>
      <div
        dangerouslySetInnerHTML={{ __html: accordionContent }}
        className="accordion-content"
      ></div>
    </details>
  );
};

export default Accordion;
