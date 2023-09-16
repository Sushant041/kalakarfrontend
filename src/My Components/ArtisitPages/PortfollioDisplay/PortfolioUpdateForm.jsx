import "./portfolioUpdateForm.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
  makeAuthenticatedPOSTRequest,
} from "../../../services/serverHelper";
import { artistProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


function PortfolioUpdateForm() {

  const { accessToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    category: "",
    natureOfArt: "",
    contactNumber: "",
    email: "",
    aboutJourney:"",
   
    eventType: "",
    yearOfExperience: "",
    artName:"",
    age:"",
    performanceType:"",
    totalNoOfPerformance:"",
    chargePerPerformance:"",
    talent: "",
    performanceType:"",
    minimumBudget: "",
    location: "",
    handles: {
      instagram: "",
      facebook: "",
      youtube: "",
    },
  });


  const fetchPortfolioData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      // console.log("res1", response);
      const {
        firstName,
        lastName,
        artName,
        phoneNumber,
        email,
        address,
        handles,
        natureOfArt,
        aboutJourney , 
        category , 
        age ,
        performanceType ,
        totalNoOfPerformance ,
        chargePerPerformance , 
        yearOfExperience ,
        eventType ,
        minimumBudget ,
        
      } = response.data;

      setFormData({
        firstName,
        category: artName,
        contactNumber: phoneNumber,
        email,
        location: address.state,
        handles: { ...handles },
         natureOfArt,
         lastName,
         aboutJourney,
        category , 
        age ,
        performanceType ,
        totalNoOfPerformance ,
        chargePerPerformance , 
        yearOfExperience ,
        eventType ,
        minimumBudget ,
        artName
      });

    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again" , {
        position:"top-center"
      });
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("handles.")) {
      setFormData((prevData) => ({
        ...prevData,
        handles: {
          ...prevData.handles,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const submitHandler = async (event) => {
    const toastId = toast.loading("Loading..." , {
      position:"top-center"
    });
    event.preventDefault();

    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        formData,
        accessToken
      );
      // console.log("res", response);
      if (response.success === "success") {
        toast.success("successfully update" , {
          position:"top-center"
        });
        navigate(-1);
      } else {
        toast.error(response.message , {
          position:"top-center"
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again" , {
        position:"top-center"
      });
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    
    <form onSubmit={submitHandler} className="edit_portfolio_form_wrapper">
      <label className="single_form_label">
        <p className="sinle_form_title">First Name </p>

        <input
          required
          placeholder="Enter the name of Card"
          name="firstName"
          value={formData.firstName}
          className="single_form_input"
          onChange={changeHandler}
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Last Name </p>

        <input
          required
          placeholder="Enter the name of Card"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      {/* <label className="single_form_label">
        <p className="sinle_form_title">Category</p>

        <input
          value={formData.category}
          placeholder="Enter your performance category"
          
          onChange={changeHandler}
          name="category"
          className="single_form_input"
        />
      </label> */}
      <label className="single_form_label">
        <p className="sinle_form_title">Contact Number</p>

        <input
          placeholder="Enter your contact Number"
          required
          name="contactNumber"
          value={formData.contactNumber}
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Email Id</p>

        <input
        disabled
          placeholder="Enter your Email"
          value={formData.email}
          name="email"
          required
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Age</p>

        <input
          placeholder="Enter your age"
          type="number"
          value={formData.age}
          name="age"
          required
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Performance Type</p>

        <input
          placeholder="Enter performance type "
          value={formData.performanceType}
          name="text"
          
          onChange={changeHandler}
          className="single_form_input"
        />

      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">No of Performance</p>

        <input
          placeholder="Enter no of performance"
          value={formData.totalNoOfPerformance}
          name="number"
          
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Charge Per Performance</p>

        <input
          placeholder="Enter Charge Per Performance"
          value={formData.chargePerPerformance}
          name="number"
          
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Location</p>

        <input
          value={formData.location}
          name="location"
          placeholder="Enter your location"
          required
          onChange={changeHandler}
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Instagram</p>

        <input
          value={formData.handles.instagram}
          name="handles.instagram"
          onChange={changeHandler}
          placeholder="Enter instagram url"
          required
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Facebook</p>

        <input
          value={formData.handles.facebook}
          name="handles.facebook"
          onChange={changeHandler}
          required
          placeholder="Enter facebook url"
          className="single_form_input"
        />
      </label>

      <label className="single_form_label">
        <p className="sinle_form_title">Profession</p>

        <input
          name="natureOfArt"
          value={formData.natureOfArt}
          onChange={changeHandler}
          placeholder="Enter your profession"
          
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Experience</p>

        <input
          name="yearOfExperience"
          value={formData.yearOfExperience}
          onChange={changeHandler}
          placeholder="Enter your profession"
          required
          className="single_form_input"
        />
      </label>
      

      <label className="single_form_label">
        <p className="sinle_form_title">Event Type</p>

        <input
          value={formData.eventType}
          name="eventType"
          onChange={changeHandler}
          placeholder="Enter multiple event you like to host"
          
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Minimum Budget</p>

        <input
          value={formData.minimumBudget}
          name="minimumBudget"
          required
          onChange={changeHandler}
          placeholder="Enter Your minimum budget"
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Art Name</p>

        <input
          value={formData.artName}
          name="artName"
          required
          onChange={changeHandler}
          placeholder="Enter Your artName"
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">About</p>

        <textarea
          name="aboutJourney"
           value={formData.aboutJourney}
          className="single_form_textarea"
          cols="20"
          rows="6"
          onChange={changeHandler}
        />
      </label>

      <ApplicationButton
        type={"submit"}
        text={"Update"}
        className={"edit_portfolio_updateButton"}
      />
      <button
        onClick={() => {
          navigate(-1);
        }}
        type="button"
        className="edit_portfolio_cancelButton"
      >
        Cancel
      </button>
    </form>
  );
}

export default PortfolioUpdateForm;

