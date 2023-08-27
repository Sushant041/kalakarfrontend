import "./patronProfile.css";
import profileImg from "./assets/profileImg.svg";
import rectangleImg from "./assets/rectangleImg.svg";
import tick from "./assets/tick.svg";

import { useState } from "react";
import plus from "./assets/plus.svg";
import Patron_Navbar from "../Patron_Navbar";

const name = "Patron Name";
const profession = "Patron Profession";

const personalForm = [
  {
    title: "First Name",
    type: "text",
  },
  {
    title: "Last Name",
    type: "text",
  },
  {
    title: "Area of Operation",
    type: "text",
  },
  {
    title: "Nature of Business / Function",
    type: "text",
  },
  {
    title: "Name of the Authorized Person ",
    type: "text",
  },
  {
    title: "Designation",
    type: "text",
  },
  {
    title: "Address",
    type: "text",
  },
  {
    title: "Company Email",
    type: "email",
  },
  {
    title: "Contact Details",
    type: "number",
  },
  {
    title: "Website",
    type: "text",
  },
  {
    title: "Expectations from eKalakaar",
    type: "text",
  },
  {
    title: "About us",
    type: "text",
  },
];

function PatronProfile() {
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
                  <input className={`personal_form_input ${data.title === "About us" ? "aboutUs_input " : ""} `} required type={data.type} />
                </label>
              ))}
            </div>
          </form>
        </main>

        <button type="submit" className="updateButton">
          Update
        </button>
      </section>
    </div>
  );
}

export default PatronProfile;
