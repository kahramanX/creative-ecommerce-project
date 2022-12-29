import React from "react";
import "assets/styles/components/shared/layeredInput.scss";

type Props = {
  inputType: "text" | "number";
  placeholderText: string;
  onChangeAction?: any;
};

const LayeredInput: React.FC<Props> = ({
  inputType = "text",
  placeholderText,
  onChangeAction,
}) => {
  return (
    <div className="layered-input-container">
      <input
        type={inputType}
        placeholder={placeholderText}
        onChange={(e) => onChangeAction(e)}
      />
    </div>
  );
};

export default LayeredInput;
