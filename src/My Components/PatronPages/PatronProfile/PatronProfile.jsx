import "./patronProfile.css";
import profileImg from "./assets/profileImg.svg";
import rectangleImg from "./assets/rectangleImg.svg";
import tick from "./assets/tick.svg";
import { useState } from "react";
import plus from "./assets/plus.svg";
import Patron_Navbar from "../Patron_Navbar";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
} from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { patronProfilePoints } from "../../../services/apis";

const name = "Patron Name";
const profession = "Patron Profession";

const personalForm = [
  {
    title: "First Name",
    type: "text",
    name:"firstname",
  },
  {
    title: "Last Name",
    type: "text",
    name:"lastname",
  },
  {
    title: "Area of Operation",
    type: "text",
    name:"areaofoperation",
  },
  {
    title: "Nature of Business / Function",
    type: "text",
    name:"natureofbusiness",
  },
  {
    title: "Name of the Authorized Person ",
    type: "text",
    name:"nameofauthorizedperson",
  },
  {
    title: "Designation",
    type: "text",
    name:"designation"
  },
  {
    title: "Address",
    type: "text",
    name:"address"
  },
  {
    title: "Company Email",
    type: "email",
    name:"companyemail"
  },
  {
    title: "Contact Details",
    type: "number",
    name:"contactdetials"
  },
  {
    title: "Website",
    type: "text",
    name:"website"
  },
  {
    title: "Expectations from eKalakaar",
    type: "text",
    name:"expectations"
  },
  {
    title: "About us",
    type: "text",
    name:"aboutus"
  },
];


function PatronProfile() {
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const [bFormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    areaofoperation:"",
    natureofbusiness:"",
    nameofauthorizedperson:"",
    designation:"",
    address:"",
    companyemail:"",
    contactdetials:"",
    website:"",
    expectations:"",
    aboutus:"",
  });
  
  return (
    <div className="patronProfile_wrapper">
      {/* actual navbar */}
      <Patron_Navbar />

      <section className="patronProfile_container">
        <img src={rectangleImg} alt="" className="rectangleImg" />
        <div className="patron_img_name_container">
          <img src={profileImg} alt="" className="patron_img" />
          <div className="verify_name_wrapper">
            <p className="patron_name">{name} </p>
            <div className="verify_container">
              <img src={tick} alt="tick" className="verifyImg" />
            </div>
          </div>
          <p className="patron_profession">{profession}</p>
        </div>

        {/* personal information  */}
        <main className="personal_information_wrapper">
          <form className="personal_info_form">
            <p className="personal_information_text">Personal Information</p>
            <div className="personal_info_form_part">
              {personalForm.map((data, index) => (
                <label key={index} htmlFor="" className="single_personal_info">
                  <p className="form_title">{data.title}</p>
                  <input
                    className={`personal_form_input ${data.title === 'About us' ? ('aboutUs_input ') : ('')} `}
                    required
                    type={data.type}
                    name={data.name}
                  />
                </label>
              ))}
            </div>

          </form>
        </main>

        <button type="submit" className="updateButton">Update</button>
      </section>
    </div>
  );
}

export default PatronProfile;
