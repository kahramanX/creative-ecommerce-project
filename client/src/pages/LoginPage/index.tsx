import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";
import LayeredInput from "components/shared/LayeredInput";
import LayeredButton from "components/shared/LayeredButton";
import { Link } from "react-router-dom";
import { useUserLoginMutation } from "store/API/apiSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const LoginPage: React.FC = () => {
  const [userLogin] = useUserLoginMutation();

  const validationSchema = yup.object().shape({
    email: yup.string().max(50).email().required().trim(),
    password: yup.string().max(30).required().trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <form
            onSubmit={handleSubmit((data) => {
              validationSchema.isValid(data).then((status) => {
                if (status) {
                  userLogin(data);
                } else {
                  console.log("not true");
                }
              });
            })}
          >
            <LayeredInput
              registerInfos={{ ...register("email") }}
              inputType={"text"}
              placeholderText={"E-mail"}
            />
            <br />
            <LayeredInput
              registerInfos={{ ...register("password") }}
              inputType={"text"}
              placeholderText={"Password"}
            />
            <br />
            <LayeredButton text="Login" textSize="md" />
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
