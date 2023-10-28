import React, { useState } from "react";
import "./LoginPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthTemplate from "../Common/AuthTemplate";
import { useNavigate } from "react-router-dom";
import google from "./Images/Google.svg";
import facebook from "./Images/Facebook.svg";
import { artistProfilePoints, endpoints } from "../../services/apis";
import {
  makeUnauthenticatedGETRequest,
  makeUnauthenticatedPOSTRequest,
} from "../../services/serverHelper";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRole,
  setRefreshToken,
} from "../../reducer/slices/authSlice";

export function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.LOGIN_API,
        formData
      );
      console.log(`response`, response);

      if (response.status === "error") {
        if (response.message?.includes("Invalid user credentials")) {
          toast.error("please enter valid password ");
        }
      }

      if (response.status === "success") {
        toast.success("successfully Login");
        const { accessToken, refreshToken, role } = response.data;
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        dispatch(setRole(role));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);

        if (role === "Artist") {
          // navigate("/artist_profile");
          navigate("/Artist_limited_Profile")
        } else {
          navigate("/Patron_Profile");
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("internal server error");
    }

    toast.dismiss(toastId);
  };

  const googleLogin = async () => {
    try {
      const response = await makeUnauthenticatedGETRequest(
        artistProfilePoints.LOGIN_WITH_GOOGLE_API
      );
      console.log("googleRes", response);
    } catch (error) {
      toast.error("Something went wrong , please try again");
      console.log(error);
    }
  };

  return (
    <AuthTemplate justifyFlag={false}>
      <div className="loginWrapper">
        <h1 className="loginHeading">Welcome Back!</h1>
        <p className="loginPara">Login to your Account</p>
      </div>

      <form onSubmit={submitHandler} className="loginForm">
        <label htmlFor="email" className="loginFormLabel">
          <p className="loginFormPara">Email</p>
          <input
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            name="email"
            className="loginFormInput"
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="password" className="loginFormLabel">
          <p className="loginFormPara">Password</p>
          <input
            required
            onChange={changeHandler}
            value={formData.password}
            type="password"
            name="password"
            className="loginFormInput"
            placeholder="Enter your password"
          />
        </label>

        <div className="checkbox_forgetPassword_container">
          {/* checkbox */}
          <div className="checkboxContainer">
            <input type="checkbox" />
            <p className="login_rememberMe_Text">Remember me</p>
          </div>

          {/* forgetpassword  */}
          <p
            onClick={() => navigate("/forgetPassword")}
            className="forgotPasswordText"
          >
            Forgot Password
          </p>
        </div>

        <button type="submit" className="loginButton">
          Login
        </button>

        {/* google and facebook button */}
        <div className="googleFacebookButton">
          <img
            onClick={googleLogin}
            src={google}
            alt=""
            className="loginImage"
          />

          <img src={facebook} alt="" className="loginImage" />
        </div>

        <p className=" navigateRegisterPara">
          Don’t have an account?
          <span onClick={() => navigate("/Choose")}> Register</span>
        </p>
      </form>
    </AuthTemplate>
  );
}
