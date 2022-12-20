import React from "react";
import "assets/styles/components/shared/layeredButton.scss";

type Props = {
  text: string;
  textSize: "sm" | "md";
  action?: any;
};

const LayeredButton: React.FC<Props> = ({ text, textSize, action }) => {
  return (
    <div className={`layered-button-container text-${textSize}`}>
      <div className="front-button" onClick={() => action()}>
        {text}
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  );
};

export default LayeredButton;
