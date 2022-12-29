import LayeredButton from "components/shared/LayeredButton";
import LayeredInput from "components/shared/LayeredInput";
import React from "react";
import FormImage from "assets/images/formImage.webp";

const MailSubscribtion: React.FC = () => {
  return (
    <div className="hp-subscription-form-container">
      <div className="form-subs-left">
        <div>
          <p>Sign Up to be the first to know about new products,</p>
          <p>special offers and promotions</p>
        </div>
        <LayeredInput placeholderText="Your Name" inputType="text" />
        <LayeredInput placeholderText="Your Email" inputType="text" />
        <LayeredButton text="Send" textSize="sm" />
      </div>
      <div className="form-subs-right">
        <img src={FormImage} alt={"img"} />
      </div>
    </div>
  );
};

export default MailSubscribtion;
