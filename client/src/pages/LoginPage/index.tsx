import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";
import LayeredInput from "components/shared/LayeredInput";
import LayeredButton from "components/shared/LayeredButton";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "store/API/apiSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setLogin } from "store/authSlice";

const LoginPage: React.FC = () => {
  const [userLogin, data] = useUserLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().max(50).email().required().trim(),
    password: yup.string().max(30).required().trim(),
  });

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm();

  const _getUserLoginResult = async () => {
    const dataX = await userLogin().unwrap();
    console.log(dataX);
  };

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
            onSubmit={handleSubmit((datas) => {
              validationSchema.isValid(datas).then((status) => {
                if (status) {
                  userLogin(datas);
                  console.log("userLoginResults 2", data);
                  dispatch(setLogin(true));
                  _getUserLoginResult();

                  navigate("/user");
                } else {
                  //form error
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
