import AuthTemplate from "../../Common/AuthTemplate";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import "./verificationCode.css";
import { makeUnauthenticatedPOSTRequest } from "../../../services/serverHelper";
import { endpoints } from "../../../services/apis";
import { Toast, toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function VerificationCode() {


  const {resetEmail} = useSelector((state)=>state.auth);
  console.log("resetEmail" , resetEmail);

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000);
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.FORGOTPASSWORD_VERIFYOTP_API,
        { otp }
      );

      
      if (response.success === "success") {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        Cookies.set("accessToken", accessToken, { expires: expirationDate });
        Cookies.set("refreshToken", refreshToken, { expires: expirationDate });
        toast.success("Successfuly Verified otp");
        navigate("/resetPassword");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(toastId);
  };

  useEffect(()=>{
  if(!resetEmail){
    navigate("/login");
  }
  },[])

  const resendOtpHandler =async  ()=>{
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.FORGOTPASSWORD_SENDOTP_API,
        {email:resetEmail}
      );
      if (response.success === "success") {
        toast.success("OTP Send Successfully");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(toastId);
  }
  
  return (
    <AuthTemplate>
      <div className="verifyCodeWrapper">
        <h1 className="verifyCodeHeading ">Enter Verification code</h1>
        <p className="verifyCodePara   ">We have send a code to your email</p>
      </div>

      <form onSubmit={submitHandler} className="verifyCodeForm ">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.75)",
              }}
              className="otpInput"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 10px",
          }}
        />

        <button type="submit" className="continueButton">
          Continue
        </button>
        <p className="verifyCodeResend">
          Didn’t receive any code? <span onClick={resendOtpHandler} className="Resend_OTP_text" >Resend</span>
        </p>
      </form>
    </AuthTemplate>
  );
}

export default VerificationCode;
