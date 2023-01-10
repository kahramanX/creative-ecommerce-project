import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";
import LayeredInput from "components/shared/LayeredInput";
import LayeredButton from "components/shared/LayeredButton";
import { Link } from "react-router-dom";
import { useUserLoginMutation } from "store/API/apiSlice";

const LoginPage: React.FC = () => {
  const [userLogin] = useUserLoginMutation();

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
          <form>
            <LayeredInput inputType={"text"} placeholderText={"E-mail"} />
            <br />
            <LayeredInput inputType={"text"} placeholderText={"Password"} />
            <br />
            <LayeredButton
              text="Login"
              textSize="md"
              action={() => userLogin("wtf bune")}
            />
          </form>
          <br />
          <div className="short-link">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
