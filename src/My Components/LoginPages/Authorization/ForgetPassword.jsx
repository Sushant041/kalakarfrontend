import { useState } from "react";
import AuthTemplate from "../../Common/AuthTemplate";
import "./forgetPassword.css";
import { makeUnauthenticatedPOSTRequest } from "../../../services/serverHelper";
import { endpoints } from "../../../services/apis";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setResetEmail } from "../../../reducer/slices/authSlice";

function ForgetPassword() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();

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
        endpoints.FORGOTPASSWORD_SENDOTP_API,
        formData
      );
      if (response.success === "success") {
        toast.success("OTP Send Successfully");
        navigate("/verifyCode");
        dispatch(setResetEmail(formData.email));
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(toastId);
  };

  return (
    <AuthTemplate>
      <div className="forgetPasswordWrapper ">
        <h1 className="forgetPasswordHeading ">Forgot Password</h1>
        <p className="forgetPasswordPara ">
          Enter your email id to reset your password
        </p>
      </div>

      <form onSubmit={submitHandler} className="forgetPasswordForm ">
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          className="forgetPasswordInput  "
          placeholder="Enter your email address"
        />
        <div className="forgetPasswordButtonWrapper flex flex-col gap-3 w-full">
          <button type="submit" className=" continueButton ">
            Continue
          </button>
          <button type="button" onClick={(e)=>{e.stopPropagation();
          navigate("/login")}} className="cancelButton ">
            Cancel
          </button>
        </div>
      </form>
    </AuthTemplate>
  );
}

export default ForgetPassword;
