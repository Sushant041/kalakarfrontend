import "./portfolioUpdateForm.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPOSTRequest,
} from "../../../services/serverHelper";
import { artistProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const EditFormData = [
  {
    title: "Full Name",
    placeholder: "Enter your full name here",
  },

  {
    title: "Category",
    placeholder: "Enter Category ",
  },
  {
    title: "Profession",
    placeholder: "Enter your profession here",
  },
  {
    title: "Contact Number",
    placeholder: "Enter contact Number",
    type: "number",
  },
  {
    title: "Email Id",
    placeholder: "Enter email Id",
    type: "email",
  },
  {
    title: "About",
    placeholder: "Tell the world about yourself",
  },
  {
    title: "Events Type",
    placeholder: "Enter multiple events you like to host",
  },
  {
    title: "Experience",
    placeholder: "Enter your experience",
    type: "number",
  },

  {
    title: "Talents",
    placeholder: "Enter multiple talents here",
  },
  {
    title: "Minimum Budget",
    placeholder: "Enter your minimum budget",
    type: "number",
  },

  {
    title: "Location",
    placeholder: "Enter your location",
  },
  {
    title: "Instagram",
    placeholder: "Instagram profile url",
  },
  {
    title: "Facebook",
    placeholder: "Facebook profile url",
  },
  {
    title: "Youtube",
    placeholder: "YouTube channel name",
  },
];
const ABOUT_TYPE = "About";

function PortfolioUpdateForm({ portfolioData }) {
  const { accessToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    category: "",
    profession: "",
    contactNumber: "",
    email: "",
    about: "",
    eventType: "",
    experience: "",
    talent: "",
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
      console.log("res1", response);
      const {
        firstName,
        lastName,
        artName,
        phoneNumber,
        email,
        address,
        handles,
        natureOfArt,
      } = response.data;
      setFormData({
        firstName,
        category: artName,
        contactNumber: phoneNumber,
        email: email,
        location: address.state,
        handles: { ...handles },
        talent: natureOfArt,
        lastName: lastName,
      });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
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

  console.log("ffor", formData);

  const submitHandler = async (event) => {
    const toastId = toast.loading("Loading...");
    event.preventDefault();

    try {
      const response = await makeAuthenticatedPOSTRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        formData,
        accessToken
      );
      console.log("res", response);
      if (response.success === "success") {
        toast.success("successfully update");
        navigate(-1);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
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
      <label className="single_form_label">
        <p className="sinle_form_title">Category</p>

        <input
          value={formData.category}
          placeholder="Enter your performance category"
          required
          onChange={changeHandler}
          name="category"
          className="single_form_input"
        />
      </label>
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
          placeholder="Enter your Email"
          value={formData.email}
          name="email"
          required
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
          name="profession"
          value={formData.profession}
          onChange={changeHandler}
          placeholder="Enter your profession"
          required
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Experience</p>

        <input
          name="experience"
          value={formData.experience}
          onChange={changeHandler}
          placeholder="Enter your profession"
          required
          className="single_form_input"
        />
      </label>
      <label className="single_form_label">
        <p className="sinle_form_title">Talent</p>

        <input
          value={formData.talent}
          name="talent"
          placeholder="Enter your talent"
          onChange={changeHandler}
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
          required
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
        <p className="sinle_form_title">About</p>

        <textarea
          name="about"
          placeholder="Tell the world about yourself "
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

