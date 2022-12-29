import React from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";
import FlatInput from "components/shared/FlatInput";
import LayeredInput from "components/shared/LayeredInput";
import LayeredButton from "components/shared/LayeredButton";

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login🔑 | Mr.SCRUBBER</title>
      </Helmet>
      <div className="loginpage">
        <div className="page-title">
          <h1>Login 🔑</h1>
        </div>
        <div className="page-content">
          <LayeredInput inputType={"text"} placeholderText={"E-mail"} />
          <br />
          <LayeredInput inputType={"text"} placeholderText={"Password"} />

          <LayeredButton text="Send" textSize="md" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
