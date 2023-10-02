import "./patronProfile.css";
import profileImg from "./assets/profileImg.svg";
import rectangleImg from "./assets/rectangleImg.svg";
import tick from "./assets/tick.svg";
import { useEffect, useState } from "react";
import Patron_Navbar from "../Patron_Navbar";
import { toast } from "react-toastify";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
} from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";

const name = "Patron Name";
const profession = "Patron Profession";

function PatronProfile() {
  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    personalInfo: {
      profession: "",
      companyName: "",
      authorizedPerson: "",
      designation: "",
      companyDescription: "",
      firstName: "",
      lastName: "",
    },
    address: {
      state: "",
      city: "",
      pincode: "",
      details: "",
    },
    contactDetails: {
      email: "",
      contactNumber: "",
      website: "",
      expectations: "",
    },
  });

  const fetchPatronProfileData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        patronProfilePoints.FETCH_PATRON_APPLI_API,
        accessToken
      );
      console.log("res", response);
      if (response.status === "success") {
        setFormData(response.data);
        console.log(formData);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
  };

  useEffect(() => {
    fetchPatronProfileData();
  }, []);

  // this is to update the   profile
  const submitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    console.log(formData)
    try {
      const { personalInfo, address, contactDetails } = formData;
      const dataToSend = { personalInfo, address, contactDetails };
      console.log(dataToSend)
      const response = await makeAuthenticatedPATCHRequest(
        patronProfilePoints.FETCH_PATRON_APPLI_API,
        dataToSend,
        accessToken
      );
      console.log("respnse", response);
      if (response.status === "success") {
        toast.success("successfully updated");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
    toast.dismiss(toastId);
  };

  // change handler for input data
  // const changeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const [section, property] = name.split("."); // Split the name into section and property
  
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section], // Keep the previous state of the section
        [property]: value, // Update the property within the section
      },
    }));
    console.log(formData)
  };

  return (
    <div className="patronProfile_wrapper">
      {/* actual navbar */}
      <Patron_Navbar />

      <section className="patronProfile_container">
        <img src={rectangleImg} alt="" className="rectangleImg" />
        <div className="patron_img_name_container">
          <img src={profileImg} alt="" className="patron_img" />
          <div className="verify_name_wrapper">
            <p className="patron_name">
              {formData?.personalInfo?.firstName}{" "}
              {formData?.personalInfo?.lastName}{" "}
            </p>
            <div className="verify_container">
              <img src={tick} alt="tick" className="verifyImg" />
            </div>
          </div>
          <p className="patron_profession">
            {formData?.personalInfo?.profession}
          </p>
        </div>

        {/* personal information  */}
        <main className="personal_information_wrapper">
          <form onSubmit={submitHandler} className="personal_info_form">
            <p className="personal_information_text">Personal Information</p>
            <div className="personal_info_form_part">
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">First Name</p>
                <input
                  name="personalInfo.firstName"
                  onChange={changeHandler}
                  value={formData.personalInfo.firstName}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Last Name</p>
                <input
                  name="personalInfo.lastName"
                  onChange={changeHandler}
                  value={formData.personalInfo.lastName}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Profession</p>
                <input
                  name="personalInfo.profession"
                  onChange={changeHandler}
                  value={formData.personalInfo.profession}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Company Name</p>
                <input
                  name="personalInfo.companyName"
                  onChange={changeHandler}
                  value={formData.personalInfo.companyName}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Name of the Authorized Person</p>
                <input
                  name="personalInfo.authorizedPerson"
                  onChange={changeHandler}
                  value={formData.personalInfo.authorizedPerson}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Designation</p>
                <input
                  name="personalInfo.designation"
                  onChange={changeHandler}
                  value={formData.personalInfo.designation}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Company Description</p>
                <textarea
                  name="personalInfo.companyDescription"
                  onChange={changeHandler}
                  value={formData.personalInfo.companyDescription}
                  style={{ height: "150px", resize: "none" }}
                  className={`personal_form_input  "aboutUs_input `}
                />
              </label>
            </div>
            <p className="personal_information_text">Address</p>
            <div className="personal_info_form_part">
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">state</p>
                <input
                  name="address.state"
                  onChange={changeHandler}
                  value={formData.address.state}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">City</p>
                <input
                  name="address.city"
                  onChange={changeHandler}
                  value={formData.address.city}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Pincode</p>
                <input
                  name="address.pincode"
                  onChange={changeHandler}
                  value={formData.address.pincode}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Detailed Address</p>
                <textarea
                  name="address.details"
                  onChange={changeHandler}
                  value={formData.address.details}
                  style={{ height: "150px", resize: "none" }}
                  className={`personal_form_input  "aboutUs_input `}
                />
              </label>
            </div>
            <p className="personal_information_text">Contact</p>
            <div className="personal_info_form_part">
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Company Email</p>
                <input
                  name="contactDetails.email"
                  onChange={changeHandler}
                  value={formData.contactDetails.email}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Contact Number</p>
                <input
                  name="contactDetails.contactNumber"
                  onChange={changeHandler}
                  value={formData.contactDetails.contactNumber}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Website</p>
                <input
                  name="contactDetails.website"
                  onChange={changeHandler}
                  value={formData.contactDetails.website}
                  className={`personal_form_input`}
                />
              </label>
              <label htmlFor="" className="single_personal_info">
                <p className="form_title">Expectation from eKalakaar</p>
                <input
                  name="contactDetails.expectations"
                  onChange={changeHandler}
                  value={formData.contactDetails.expectations}
                  className={`personal_form_input`}
                />
              </label>
            </div>

            <button type="submit" className="updateButton">
              Update
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}

export default PatronProfile;
