import React from "react";
import "assets/styles/components/shared/layeredInput.scss";

type Props = {
  inputType: "text" | "number";
  placeholderText: string;
  onChangeAction?: any;
  registerInfos?: any;
};

const LayeredInput: React.FC<Props> = ({
  inputType = "text",
  placeholderText,
  onChangeAction,
  registerInfos,
}) => {
  return (
    <div className="layered-input-container">
      <input
        {...registerInfos}
        type={inputType}
        placeholder={placeholderText}
        onChange={(e) =>
          onChangeAction === undefined ? "" : onChangeAction(e)
        }
      />
    </div>
  );
};

export default LayeredInput;
