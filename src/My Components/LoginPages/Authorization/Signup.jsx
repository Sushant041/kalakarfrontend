import { useNavigate } from "react-router-dom";
import AuthTemplate from "../../Common/AuthTemplate";
import "./signup.css";
import {  useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../../../services/serverHelper";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import { endpoints } from "../../../services/apis";

const joiningData = [
  {
    title: "Patron",
  },
  {
    title: "Artist",
  },
  {
    title: "Partners",
  },
  {
    title: "Art-Lovers",
  },
];


const numbersArray = Array.from({ length: 250 }, (_, index) => index + 1);

function Signup() {
  const navigate = useNavigate();

  const [checkbox , setCheckbox]  = useState(true);

  const [formData, setFormData] = useState({
    role: "Artist",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber:{
         countryCode:"",
        number:""
   },  });
console.log(formData.phoneNumber.number.length);
  function changeHandler(event) {
        const { name, value } = event.target;
    if (name.startsWith("phoneNumber.")) {
      setFormData((prev) => ({
        ...prev,
        phoneNumber: {
          ...prev.phoneNumber,
          [name.split(".")[1]]: value,
        },
      }));
    }  else{
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if(!checkbox){
      return toast.error('Agree to the Terms and conditions');
    }

    if (formData.password !== formData.passwordConfirm) {
      return toast.error("password do not match" , {
        position:"top-center"
      });
    }

      if (formData.phoneNumber.number.length !== 10) {
        return toast.error("please provide a valid phone number" , {
          position:"top-center"
        });
      }

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.REGISTER_API,
        formData
      );

      if (response.status === "error") {
        if (response.message?.includes("Please provide a valid email")) {
          toast.error("Email is not valid " , {
            position:"top-center"
          });
        } else if (
          response.message?.includes("Provided email address is already in use")
        ) {
          toast.error("Email is already registered" , {
            position:"top-center"
          });
        } else if (
          response.message?.includes(
            'Duplicate field value: "undefined", Please use another value!'
          )
        ) {
          toast.error("Email is already registered" , {
            position:"top-center"
          });
        } else if (
          response.message?.includes("Please provide a valid phoneNumber")
        ) {
          toast.error("Please provide a valid phoneNumber" , {
            position:"top-center"
          });
        }
        else{
          toast.error(response.message , {
            position:"top-center"
          });
        }
      } else if (response.status === "success") {
        toast.success("Successfully register" , {
          position:"top-center"
        });
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <AuthTemplate justifyFlag={true} signupFlag={true}>
      <div className="signupWrapper">
        <h1 className="signupHeading">
          Joining as{" "}
          <select
            required
            onChange={changeHandler}
            value={formData.role}
            name="role"
            id=""
            className="custom-select"
          >
            {joiningData.map((data, index) => (
              <option
                onChange={changeHandler}
                name="role"
                key={index}
                className="signupSelectOption"
                value={`${data.title}`}
              >
                {data.title}
              </option>
            ))}
          </select>
        </h1>
        <p className="signupPara">Create Your Account</p>
      </div>

      <form onSubmit={submitHandler} className="signupForm">
        <div className="fullNameWrapper">
          <label htmlFor="firstName" className="signupFormLabel">
            <p className="signupFormPara">First Name</p>
            <input
              required
              onChange={changeHandler}
              type="text"
              name="firstName"
              value={formData.firstName}
              className="signupFormInput"
              placeholder="Enter your first Name"
              pattern="^[A-Za-z]+$"
            />
          </label>
          <label htmlFor="fullname" className="signupFormLabel">
            <p className="signupFormPara">Last Name</p>
            <input
              required
              onChange={changeHandler}
              type="text"
              name="lastName"
              value={formData.lastName}
              className="signupFormInput"
              placeholder="Enter your last Name"
              pattern="^[A-Za-z]+$"
            />
          </label>
        </div>
         <label htmlFor="">
                      Contact Number <span className="red">*</span>
                    </label> 
                     
                    <div className="phoneNumberWrapper">
                    
                   
                  <div>
                      <select
                        onChange={changeHandler}
                        name="phoneNumber.countryCode"
                        value={formData?.phoneNumber?.countryCode}
                        style={{
                          width: "15%",
                          marginRight: "4px",
                          paddingRight: "2px",
                        }}
                      >
                        {numbersArray.map((number) => (
                          <option
                            key={number}
                            value={`+${number}`}
                          >{`+${number}`}</option>
                        ))}
                      </select>
                      <input
                        name="phoneNumber.number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onChange={changeHandler}
                        value={formData?.phoneNumber?.number}
                        placeholder="1234567890"
                        style={{ width: "83%" }}
                        required
                      />
                    </div>
                  </div>
             

        <label htmlFor="email" className="signupFormLabel">
          <p className="signupFormPara">Email</p>
          <input
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            name="email"
            className="signupFormInput "
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="password" className="signupFormLabel">
          <p className="signupFormPara">Password(minimum 8 characters) </p>
          <input
            required
            onChange={changeHandler}
            value={formData.password}
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            className="signupFormInput  "
            minLength={8}
            placeholder="Enter your password"
          />
          <span
        onClick={togglePasswordVisibility}
        className={`fa fa-fw field-icon toggle-password ${
          passwordVisible ? 'fa-eye-slash' : 'fa-eye'
        }`}
      ></span>
        </label>
        <label htmlFor="confirmPassword" className="signupFormLabel">
          <p className="signupFormPara">Confirm Password</p>
          <input
            required
            value={formData.passwordConfirm}
            onChange={changeHandler}
            type={passwordVisible ? 'text' : 'password'}
            name="passwordConfirm"
            className="signupFormInput "
            placeholder="confirm password"
          />
          {/* <span
        onClick={togglePasswordVisibility}
        className={`fa fa-fw field-icon toggle-password ${
          passwordVisible ? 'fa-eye-slash' : 'fa-eye'
        }`}
      ></span> */}
        </label>

       
        <div className="termAndCondition" style={{display: "flex",flexDirection: "row",justifyContent: "flex-start",marginLeft:"19px"}}>
        <input type="checkbox" checked={checkbox===true} onChange={()=>setCheckbox((prev)=>!prev)} />
        <p onClick={()=>navigate("/termAndCondition")} style={{marginTop:"2px" , color:"red" , cursor:"pointer"}}>I Agree to the Terms And Condition</p>
        </div> 

        <button type="submit" className="registerButton">
          Register
        </button>


       {/* <div className="termAndCondition">
        <input type="checkbox" checked={checkbox===true} onChange={()=>setCheckbox((prev)=>!prev)} />
        <p onClick={()=>navigate("/termAndCondition")} style={{marginTop:"10px" , color:"red" , cursor:"pointer"}}>I Agree to theTerms And Condition</p>
        </div>        */}
        <p className=" navigateLoginPara">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/Login")} className="">
            Login
          </span>
        </p>
      </form>
    </AuthTemplate>
  );
}

export default Signup;
