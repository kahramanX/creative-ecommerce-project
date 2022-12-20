import React from "react";
import "assets/styles/components/shared/flatButton.scss";

type Props = {
  text: string;
  textSize: "sm" | "md";
  action?: any;
};

const FlatButton: React.FC<Props> = ({ text, textSize, action }) => {
  return (
    <div className={`flat-button-container text-${textSize}`}>
      <div className="front-button" onClick={() => action()}>
        {text}
      </div>
    </div>
  );
};

export default FlatButton;
