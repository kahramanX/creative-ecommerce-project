import React, { useState } from "react";
import "assets/styles/components/shared/flatInput.scss";

type Props = {
  labelText: string;
  inputType: string;
  action?: any;
};

const FlatInput: React.FC<Props> = ({
  labelText,
  inputType = "text",
  action,
}) => {
  const [isFocused, setIsFocused] = useState<"focused-input" | "">("");

  return (
    <div className={`flat-input-container ${isFocused}`}>
      <label>{labelText}</label>
      <input
        type={inputType}
        onFocus={() => {
          setIsFocused("focused-input");
        }}
        onChange={(e) => {
          action(e);

          if (e.target.value.length == 0) {
            setIsFocused("");
          } else {
            setIsFocused("focused-input");
          }
        }}
      />
    </div>
  );
};

export default FlatInput;
