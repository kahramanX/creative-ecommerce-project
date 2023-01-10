import React from "react";
import "assets/styles/components/shared/layeredButton.scss";

type Props = {
  text: string;
  textSize: "sm" | "md";
  action?: any;
};

const LayeredButton: React.FC<Props> = ({ text, textSize, action }) => {
  return (
    <button
      className={`layered-button-container text-${textSize}`}
      onClick={() => (action === undefined ? "" : action())}
    >
      <div className="front-button">
        {text}
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </button>
  );
};

export default LayeredButton;
