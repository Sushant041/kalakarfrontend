import React from "react";
import "./Artist_Profile.css";
import { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../FrontPage/Images/eK_Logo_Trasnparent_1.png";
import "../../FrontPage/Navbar.css";
import { Link } from "react-router-dom";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
} from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { artistProfilePoints } from "../../../services/apis";

export function Artist_Profile() {
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const initialActiveSection = localStorage.getItem("activeSection") || "basic";
  const [activeSection, setActiveSection] = useState(initialActiveSection);

  const handleClick = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  // !  for basic proile

  const [basicFormData, setBasicFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    language: "",
    monthlyIncome: "",
    address: {
      state: "",
      numOfperformanceLastYear: "",
      district: "",
      pincode: "",
      detailedAddress: "",
    },
    handles: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedIn: "",
      website: "",
    },
    aadharNumber: "",
    panNumber: "",
    upiId: "",
    passportNumber: "",
  });

  // ! change  handler for basic profile
  const changeHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("address.")) {
      // If the change is related to address, update the nested state
      setBasicFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("handles.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        handles: {
          ...prevData.handles,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      // Otherwise, update the top-level state
      setBasicFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  //   ! submit update handler for basic profile
  const basicSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        basicFormData,
        accessToken
      );
      if (response.success === "success") {
        toast.success("successfully updated");
        setActiveSection("art");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message);
        toast.error("server error please try again");
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  //   ! for art Profile funtion
  const [artFormData, setArtFormData] = useState({
    natureOfArt: "",
    areaOfInterest: "",
    genre: "",
    performanceType: "",
    artEducation: "",
    artName: "",
    nameOfGuru: "",
    artEduDuration: {
      start: "",
      end: "",
    },
    yearOfCompletation: "",
    certificateOfArt: "",
    academicQualification: "",
    course: "",
    specialization: "",
    institute: "",
    academicQualificationDuration: {
      start: "",
      end: "",
    },
    certificateOfAcademicQualification: "",
  });

  const artChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("artEduDuration.")) {
      // If the change is related to address, update the nested state
      setArtFormData((prevData) => ({
        ...prevData,
        artEduDuration: {
          ...prevData.artEduDuration,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("academicQualificationDuration.")) {
      // If the change is related to address, update the nested state
      setArtFormData((prevData) => ({
        ...prevData,
        academicQualificationDuration: {
          ...prevData.academicQualificationDuration,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setArtFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const artSubmitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");

    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        artFormData,
        accessToken
      );
      if (response.success === "success") {
        toast.success("successfuly update");
        setActiveSection("performance");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Not Updated Successfully , Please try again");
    }

    toast.dismiss(toastId);
  };

  //  ! for performance profile section
  const [performanceFormData, setPerformanceFormData] = useState({
    yearOfExperience: "",
    affiliatedToAnyGroup: "",
    nameOfTheAffiliatedGroup: "",
    affiliatedToAnyOrg: "",
    nameOfTheAffiliatedOrg: "",
    totalNoOfPerformance: "",
    highestLevelOfPerformance: "",
    topFivePerformance: "",
    performanceEvents: "",
    thematic: "",
    NoOfPerformanceLastYear: "",
    performanceDuration: "",
    chargesPerPerformance: "",
    averagePerformanceIncome: "",
    aboutJourney: "",
    performanceImages: "",
    performancevideos: "",
  });

  const perforChangeHandler = (event) => {
    const { name, value } = event.target;

    setPerformanceFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const perforSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        performanceFormData,
        accessToken
      );
      if (response.success === "success") {
        toast.success("successfully updated ");
        setActiveSection("award");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("cannot updated successfully , please try again");
    }

    toast.dismiss(toastId);
  };

  // ! for expected opprotunity

  const [expectedFormData, setExpectedFormData] = useState({
    natureOfExpectedOpp: "",
    nameOfTheArtPerformed: "",
    typeOfExpectedOpp: "",
    currentLocation: "",
    ExpectedOppLocation: "",
    NoOfLanguagesKnown: "",
    nameOfLanguagesKnown: "",
    minPerformanceTime: "",
    minimumBudget: "",
    levelOfStagesWantToPerform: "",
    upskilling: "",
    collaboration: "",
    promotion: "",
    performanceSupport: "",
  });

  const expecChangeHandler = (event) => {
    const { name, value } = event.target;

    setExpectedFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const expectedSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("exformda", expectedFormData);
    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        expectedFormData,
        accessToken
      );
      console.log("response", response);
      if (response.success === "success") {
        toast.success("successfully update");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("cannot update successfuly , please try again");
    }

    toast.dismiss(toastId);
  };


  // ! for award profile

  const [awardFormData, setAwardFormData] = useState({
    totalAwards: "",
    totalNoOfLocalAwards: "",
    totalNoOfDistrictAwards: "",
    totalNoOfStateAwards: "",
    totalNoOfNationalAwards: "",
    totalNoOfInternationalAwards: "",
    awards: [],
  });

  const awardChangeHandler = (event) => {
    const { name, value } = event.target;

    setAwardFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (index, field, value) => {
    const newAwards = [...awardFormData.awards];
    newAwards[index][field] = value;

    setAwardFormData({
      ...awardFormData,
      awards: newAwards,
    });
  };

  console.log('awardform' , awardFormData);

  const awardSubmitHandler = async (event) => {
    event.preventDefault();
    const taostId = toast.loading("Loding...");
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        awardFormData,
        accessToken
      );
      console.log("response", response);
      if (response.success === "success") {
        toast.success("successfully update");
        setActiveSection("expected");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(taostId);
  };


  const addNewAward = () => {
    const newAward = {
      name: "",
      level: "",
      category: "",
      nameOfTheStage: "",
      year: "",
      givenBy: "",
    };

    setAwardFormData({
      ...awardFormData,
      awards: [...awardFormData.awards, newAward],
    });
  };


  const removeLastAward = () => {
    const newAwards = [...awardFormData.awards];
    newAwards.pop(); // Remove the last element

    setAwardFormData({
      ...awardFormData,
      awards: newAwards,
    });
  };


  //  ! fetch  profile data function
  const fetchProileData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      console.log("fetchdata", response);
      
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        gender,
        language,
        monthlyIncome,
        address,
        handles,
        aadharNumber,
        panNumber,
        upiId,
        passportNumber,
        numOfperformanceLastYear,
        natureOfArt,
        areaOfInterest,
        genre,
        performanceType,
        artEducation,
        artName,
        nameOfGuru,
        artEduDuration,
        yearOfCompletation,
        certificateOfArt,
        academicQualification,
        course,
        specialization,
        institute,
        academicQualificationDuration,
        certificateOfAcademicQualification,
        yearOfExperience,
        affiliatedToAnyGroup,
        nameOfTheAffiliatedGroup,
        affiliatedToAnyOrg,
        nameOfTheAffiliatedOrg,
        totalNoOfPerformance,
        highestLevelOfPerformance,
        topFivePerformance,
        performanceEvents,
        thematic,
        NoOfPerformanceLastYear,
        performanceDuration,
        chargesPerPerformance,
        averagePerformanceIncome,
        aboutJourney,
        natureOfExpectedOpp,
        nameOfTheArtPerformed,
        typeOfExpectedOpp,
        currentLocation,
        ExpectedOppLocation,
        NoOfLanguagesKnown,
        nameOfLanguagesKnown,
        minPerformanceTime,
        minimumBudget,
        levelOfStagesWantToPerform,
        upskilling,
        collaboration,
        promotion,
        performanceSupport,
        totalAwards,
        totalNoOfLocalAwards,
        totalNoOfDistrictAwards,
        totalNoOfStateAwards,
        totalNoOfNationalAwards,
        totalNoOfInternationalAwards,
        awards:[...awards],
      } = response.data;


      if (dob) {
        const year = dob.substring(0, 4);
        const month = dob.substring(5, 7);
        const day = dob.substring(8, 10);
        var formattedDate = `${year}-${month}-${day}`;
      }

      setBasicFormData((prev) => ({
        ...prev,
        firstName,
        lastName,
        email,
        phoneNumber,
        dob: formattedDate,
        gender,
        language,
        monthlyIncome,
        aadharNumber,
        panNumber,
        upiId,
        numOfperformanceLastYear,
        passportNumber,
        address: {
          ...prev.address,
          ...response.data.address,
        },
        handles: {
          ...prev.handles,
          ...response.data.handles,
        },
      }));

      setArtFormData((prev) => ({
        ...prev,
        natureOfArt,
        areaOfInterest,
        genre,
        performanceType,
        artEducation,
        artName,
        nameOfGuru,
        yearOfCompletation,
        certificateOfArt,
        academicQualification,
        course,
        specialization,
        institute,
        certificateOfAcademicQualification,
        artEduDuration: {
          ...prev.artEduDuration,
          ...response.data.artEduDuration,
        },
        academicQualificationDuration: {
          ...prev.academicQualificationDuration,
          ...response.data.academicQualificationDuration,
        },
      }));

      setPerformanceFormData((prev) => ({
        ...prev,
        yearOfExperience,
        affiliatedToAnyGroup,
        nameOfTheAffiliatedGroup,
        affiliatedToAnyOrg,
        nameOfTheAffiliatedOrg,
        totalNoOfPerformance,
        highestLevelOfPerformance,
        topFivePerformance,
        performanceEvents,
        thematic,
        NoOfPerformanceLastYear,
        performanceDuration,
        chargesPerPerformance,
        averagePerformanceIncome,
        aboutJourney,
      }));

      setExpectedFormData((prev) => ({
        ...prev,
        natureOfExpectedOpp,
        nameOfTheArtPerformed,
        typeOfExpectedOpp,
        currentLocation,
        ExpectedOppLocation,
        NoOfLanguagesKnown,
        nameOfLanguagesKnown,
        minPerformanceTime,
        minimumBudget,
        levelOfStagesWantToPerform,
        upskilling,
        collaboration,
        promotion,
        performanceSupport,
      }));

      setAwardFormData((prev) => ({
        ...prev,
        totalAwards,
        totalNoOfLocalAwards,
        totalNoOfDistrictAwards,
        totalNoOfStateAwards,
        totalNoOfNationalAwards,
        totalNoOfInternationalAwards,
        awards
      }));
    } catch (error) {
      console.log(error);
    }
  };
  console.log('award' , awardFormData.awards);

  useEffect(() => {
    fetchProileData();
  }, []);




  //   ! dont change this
  const mystyle = {
    fontSize: "large",
    fontWeight: "500",
  };
  const back = {
    backgroundColor: "transparent",
    marginLeft: "0vh",
    marginTop: "-2vh",
  };
  const [AccountpopupVisible, setAccountPopupVisible] = useState(false);
  const accountPopupRef = useRef(null);

  const toggleAccountPopup = () => {
    setAccountPopupVisible(!AccountpopupVisible);
  };

  return (
    <div className="Profile_Page">
      <div className="ProfilePage_Navbar">
        <Navbar
          style={{ zIndex: "99" }}
          className="navbar nav_frontpage navbar-expand-lg "
          // bg="light"
          expand="lg"
        >
          {/* <Container> */}
          <div className="container-fluid">
            <Navbar.Brand
              className="navbar-brand"
              style={{ position: "static", marginLeft: "0px" }}
            >
              {" "}
              <Link to="/">
                <img src={logo} height="60px" width="80px" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={mystyle}>
              <div className="navbar-nav" style={back}>
                <Nav className="Profile_navbarbutton">
                  <button
                    className={activeSection === "basic" ? "active" : ""}
                    onClick={() => handleClick("basic")}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 20C10 20 20 20 20 17.5C20 14.5 15.125 11.25 10 11.25C4.875 11.25 0 14.5 0 17.5C0 20 10 20 10 20Z"
                        fill="black"
                      />
                    </svg>{" "}
                    Basic Profile
                  </button>
                  <button
                    className={activeSection === "art" ? "active" : ""}
                    onClick={() => handleClick("art")}
                  >
                    <img src="assets/Basic Profile/ArtProfile.svg" /> Art
                    Profile
                  </button>
                  <button
                    className={activeSection === "performance" ? "active" : ""}
                    onClick={() => handleClick("performance")}
                  >
                    <img src="assets/Basic Profile/PerformanceProfiile.svg" />{" "}
                    Performance Profile
                  </button>
                  <button
                    className={activeSection === "award" ? "active" : ""}
                    onClick={() => handleClick("award")}
                  >
                    <img src="assets/Basic Profile/AwardProfile.svg" /> Award
                    Profile
                  </button>
                  <button
                    className={activeSection === "expected" ? "active" : ""}
                    onClick={() => handleClick("expected")}
                  >
                    <img src="assets/Basic Profile/Expected.svg" /> Expected
                    Opportunities
                  </button>
                </Nav>
              </div>
            </Navbar.Collapse>
            <div>
              <Link to={"/chatApp"}>
                <button style={{ border: "none", background: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_422_1847)">
                      <circle cx="30" cy="29" r="20" fill="white" />
                      <circle
                        cx="30"
                        cy="29"
                        r="19.5"
                        stroke="black"
                        stroke-opacity="0.2"
                      />
                    </g>
                    <path
                      d="M36.7692 21H23.2308C22.9044 21 22.5913 21.1405 22.3605 21.3905C22.1297 21.6406 22 21.9797 22 22.3333V35.6667C21.9986 35.9209 22.065 36.1702 22.1912 36.3846C22.3174 36.5989 22.4981 36.7692 22.7116 36.875C22.8742 36.957 23.0514 36.9997 23.2308 37C23.5197 36.9993 23.7991 36.8877 24.0193 36.685C24.0229 36.6824 24.0263 36.6793 24.0293 36.6758L26.5 34.3333H36.7692C37.0957 34.3333 37.4087 34.1929 37.6395 33.9428C37.8703 33.6928 38 33.3536 38 33V22.3333C38 21.9797 37.8703 21.6406 37.6395 21.3905C37.4087 21.1405 37.0957 21 36.7692 21ZM36.7692 33H26.5C26.2102 32.9999 25.9296 33.1105 25.7077 33.3125L25.6985 33.3217L23.2308 35.6667V22.3333H36.7692V33Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_d_422_1847"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_422_1847"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_422_1847"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>
              </Link>

              <button
                onClick={toggleAccountPopup}
                style={{ border: "none", background: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <g filter="url(#filter0_d_422_1850)">
                    <circle cx="30" cy="29" r="20" fill="#AD2F3B" />
                  </g>
                  <path
                    d="M30 21C31.0609 21 32.0783 21.4214 32.8284 22.1716C33.5786 22.9217 34 23.9391 34 25C34 26.0609 33.5786 27.0783 32.8284 27.8284C32.0783 28.5786 31.0609 29 30 29C28.9391 29 27.9217 28.5786 27.1716 27.8284C26.4214 27.0783 26 26.0609 26 25C26 23.9391 26.4214 22.9217 27.1716 22.1716C27.9217 21.4214 28.9391 21 30 21ZM30 23C29.4696 23 28.9609 23.2107 28.5858 23.5858C28.2107 23.9609 28 24.4696 28 25C28 25.5304 28.2107 26.0391 28.5858 26.4142C28.9609 26.7893 29.4696 27 30 27C30.5304 27 31.0391 26.7893 31.4142 26.4142C31.7893 26.0391 32 25.5304 32 25C32 24.4696 31.7893 23.9609 31.4142 23.5858C31.0391 23.2107 30.5304 23 30 23ZM30 30C32.67 30 38 31.33 38 34V37H22V34C22 31.33 27.33 30 30 30ZM30 31.9C27.03 31.9 23.9 33.36 23.9 34V35.1H36.1V34C36.1 33.36 32.97 31.9 30 31.9Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_422_1850"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_422_1850"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_422_1850"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>

              {AccountpopupVisible && (
                <div
                  ref={accountPopupRef}
                  className="Accountpopup"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    position: "absolute",
                    width: "297px",
                    marginLeft: "-170px",
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    to={"/Artist_Profile"}
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to={"/Artist_Opportunities"}
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Opportunities
                  </Link>
                  <Link
                    to={"/statusOfApplication"}
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Status of Application
                  </Link>
                  <Link
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Skill Development
                  </Link>
                  <Link
                    to={"/Newsletter"}
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Latest News
                  </Link>
                  <Link
                    style={{
                      height: "48px",
                      boxShadow: " 0px 1px 10px 2px rgba(0, 0, 0, 0.12)",
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Navbar>
      </div>

      <div className="BasicProfile_ProfileSection">
        <div className="BasicProfile_AccSet">
          <h1>Account Settings</h1>
          <button
            className={activeSection === "basic" ? "active" : ""}
            onClick={() => handleClick("basic")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 20C10 20 20 20 20 17.5C20 14.5 15.125 11.25 10 11.25C4.875 11.25 0 14.5 0 17.5C0 20 10 20 10 20Z"
                fill="black"
              />
            </svg>{" "}
            Basic Profile
          </button>
          <button
            className={activeSection === "art" ? "active" : ""}
            onClick={() => handleClick("art")}
          >
            <img src="assets/Basic Profile/ArtProfile.svg" /> Art Profile
          </button>
          <button
            className={activeSection === "performance" ? "active" : ""}
            onClick={() => handleClick("performance")}
          >
            <img src="assets/Basic Profile/PerformanceProfiile.svg" />{" "}
            Performance Profile
          </button>
          <button
            className={activeSection === "award" ? "active" : ""}
            onClick={() => handleClick("award")}
          >
            <img src="assets/Basic Profile/AwardProfile.svg" /> Award Profile
          </button>
          <button
            className={activeSection === "expected" ? "active" : ""}
            onClick={() => handleClick("expected")}
          >
            <img src="assets/Basic Profile/Expected.svg" /> Expected
            Opportunities
          </button>
        </div>
        <div className="BasicProfile_avatar">
          <img src="assets/Basic Profile/Avatar.svg" />
          <button className="BasicProfile_editavatar">
            Edit Profile Picture
          </button>
          <button className="BasicProfile_removeavatar">Remove Avatar</button>
        </div>
        <div className="BasicProfile_name">
          <p>
            {" "}
            Hello, <br></br>
            <b>Mano Selva Vijay</b>
          </p>
        </div>
      </div>
      {activeSection === "basic" && (
        <div className="BasicProfile_Infoform">
          <form onSubmit={basicSubmitHandler}>
            <h4>PERSONAL INFORMATIONAL</h4>
            <div className="BasicProfile_PersonalINfo">
              <div className="BasicProfile_inputfield">
                <label htmlFor="firstName">First Name</label>
                <input
                  onChange={changeHandler}
                  name="firstName"
                  value={basicFormData.firstName}
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label htmlFor="lastName">Last Name</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.lastName}
                  name="lastName"
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label htmlFor="email">Email Id</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.email}
                  name="email"
                  type="email"
                />
              </div>
              <div className="BasicProfile_inputfield">
                <label htmlFor="phoneNumber">Contact Number</label>
                <input
                  onChange={changeHandler}
                  name="phoneNumber"
                  value={basicFormData.phoneNumber}
                  type="tel"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  onChange={changeHandler}
                  value={basicFormData.dob}
                ></input>
              </div>
              <div className="BasicProfile_inputfield gender">
                <label>Gender</label>
                <div className="Genderinfo">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={basicFormData.gender === "Male"}
                      onChange={changeHandler}
                    />
                    &nbsp; Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={basicFormData.gender === "Female"}
                      onChange={changeHandler}
                    />
                    &nbsp; Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Others"
                      checked={basicFormData.gender === "Others"}
                      onChange={changeHandler}
                    />
                    &nbsp; Others
                  </label>
                </div>
              </div>
            </div>
            <h4>ADDRESS</h4>
            <div className="BasicProfile_Address">
              <div className="BasicProfile_Addressshort">
                <div className="BasicProfile_inputfield">
                  <label>State</label>
                  <select
                    onChange={changeHandler}
                    name="address.state"
                    value={basicFormData.address.state}
                  >
                    <option selected hidden>
                      Select State
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="BasicProfile_inputfield">
                  <label>District</label>
                  <input
                    onChange={changeHandler}
                    name="address.district"
                    value={basicFormData.address.district}
                    type="text"
                  ></input>
                </div>
                <div className="BasicProfile_inputfield">
                  <label>Pincode</label>
                  <input
                    onChange={changeHandler}
                    value={basicFormData.address.pincode}
                    name="address.pincode"
                    type="number"
                  ></input>
                </div>
              </div>
              <div className="BasicProfile_inputfield BasicProfile_Addresslong">
                <label>Detailed Address</label>
                <input
                  onChange={changeHandler}
                  name="address.detailedAddress"
                  value={basicFormData.address.detailedAddress}
                  type="text"
                ></input>
              </div>
            </div>
            <h4>
              OTHER DETAILS{" "}
              <span style={{ color: "rgba(0, 0, 0, 0.70)", fontWeight: "400" }}>
                (optional)
              </span>
            </h4>
            <div className="BasicProfile_OtherDetails">
              <div className="BasicProfile_inputfield">
                <label>Languages Known</label>
                <input
                  onChange={changeHandler}
                  name="language"
                  value={basicFormData.language}
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Monthly Income</label>
                <input
                  onChange={changeHandler}
                  name="monthlyIncome"
                  value={basicFormData.monthlyIncome}
                  type="number"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>No of Performances Last Year</label>
                <input
                  onChange={changeHandler}
                  name="numOfperformanceLastYear"
                  value={basicFormData.numOfperformanceLastYear}
                  type="number"
                />
              </div>
              <div className="BasicProfile_inputfield">
                <label>Pan Number</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.panNumber}
                  name="panNumber"
                  type="number"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Aadhar Number</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.aadharNumber}
                  name="aadharNumber"
                  type="number"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Passport Number</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.passportNumber}
                  name="passportNumber"
                  type="number"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>UPI Id</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.upiId}
                  name="upiId"
                  type="text"
                ></input>
              </div>
            </div>
            <h4>SOCIAL PROOF</h4>
            <div className="BasicProfile_Social">
              <div className="BasicProfile_inputfield">
                <label>Instagram</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.handles.instagram}
                  name="handles.instagram"
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Facebook</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.handles.facebook}
                  name="handles.facebook"
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Youtube</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.handles.youtube}
                  name="handles.youtube"
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>LinkedIn</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.handles.linkedIn}
                  name="handles.linkedIn"
                  type="text"
                ></input>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Website</label>
                <input
                  onChange={changeHandler}
                  value={basicFormData.handles.website}
                  name="handles.website"
                  type="text"
                ></input>
              </div>
            </div>

            <button type="submit" className="updateBtn">
              Update
            </button>
          </form>
        </div>
      )}
      {activeSection === "art" && (
        <div className="ArtProfile_Infoform">
          <form onSubmit={artSubmitHandler}>
            <h4>ART INFORMATION</h4>
            <div className="ArtProfile_ArtInfo">
              <div className="ArtProfile_inputfield">
                <label>Nature of Art</label>
                <input
                  onChange={artChangeHandler}
                  name="natureOfArt"
                  value={artFormData.natureOfArt}
                  type="text"
                ></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Area of Interest</label>
                <input
                  onChange={artChangeHandler}
                  value={artFormData.areaOfInterest}
                  name="areaOfInterest"
                  type="text"
                ></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Genre</label>
                <input
                  onChange={artChangeHandler}
                  value={artFormData.genre}
                  name="genre"
                  type="text"
                ></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Performance Type</label>
                <select
                  onChange={artChangeHandler}
                  value={artFormData.performanceType}
                  name="performanceType"
                >
                  <option selected hidden>
                    Select type
                  </option>
                </select>
              </div>
              <div className="ArtProfile_inputfield artedu">
                <label>Art Education / Learning</label>
                <div className="Arteduinfo">
                  <label>
                    <input
                      type="radio"
                      name="artEducation"
                      value="Traditional /Gurukul"
                      checked={
                        artFormData.artEducation === "Traditional /Gurukul"
                      }
                      onChange={artChangeHandler}
                    />
                    Traditional /Gurukul
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="artEducation"
                      value="Professional Institute"
                      checked={
                        artFormData.artEducation === "Professional Institute"
                      }
                      onChange={artChangeHandler}
                    />
                    Professional Institute
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Both"
                      name="artEducation"
                      checked={artFormData.artEducation === "Both"}
                      onChange={artChangeHandler}
                    />
                    Both
                  </label>
                </div>
              </div>
            </div>
            <h4>TRADITIONAL</h4>
            <div className="ArtProfile_Traditional">
              <div className="ArtProfile_inputfield">
                <label>Name of Art</label>
                <input
                  type="text"
                  value={artFormData.artName}
                  name="artName"
                  onChange={artChangeHandler}
                ></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Name of Guru</label>
                <input
                  type="text"
                  value={artFormData.nameOfGuru}
                  name="nameOfGuru"
                  onChange={artChangeHandler}
                ></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Duration</label>
                <div className="Artprofile_duration">
                  <input
                    type="text"
                    name="artEduDuration.start"
                    value={artFormData.artEduDuration.start}
                    onChange={artChangeHandler}
                    placeholder="Start Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                  <input
                    name="artEduDuration.end"
                    value={artFormData.artEduDuration.end}
                    onChange={artChangeHandler}
                    type="text"
                    placeholder="End Date"
                    // onChange={(e) => console.log(e.target.value)}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Year of Completion</label>
                <input
                  value={artFormData.yearOfCompletation}
                  name="yearOfCompletation"
                  onChange={artChangeHandler}
                  type="text"
                />
              </div>
              <div className="ArtProfile_inputfield">
                <label>Certificate</label>
                <input
                  type="file"
                  value={artFormData.certificateOfArt}
                  name="certificateOfArt"
                  onChange={artChangeHandler}
                ></input>
              </div>
            </div>
            <div className="ArtProfile_Professional_Courses">
              <h4>PROFESSIONAL</h4>
              <div className="ArtProfile_Professional">
                <div className="ArtProfile_inputfield">
                  <label>Academic Qualification</label>
                  <input
                    value={artFormData.academicQualification}
                    name="academicQualification"
                    onChange={artChangeHandler}
                    type="text"
                  ></input>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Course</label>
                  <select
                    value={artFormData.course}
                    onChange={artChangeHandler}
                    name="course"
                  >
                    <option selected hidden>
                      Select Course
                    </option>
                  </select>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Specialization</label>
                  <select
                    value={artFormData.specialization}
                    name="specialization"
                    onChange={artChangeHandler}
                  >
                    <option selected hidden>
                      Select Specialization
                    </option>
                  </select>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Institute</label>
                  <select
                    value={artFormData.institute}
                    name="institute"
                    onChange={artChangeHandler}
                  >
                    <option selected hidden>
                      Select Institute
                    </option>
                  </select>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Duration</label>
                  <div className="Artprofile_duration">
                    <input
                      onChange={artChangeHandler}
                      name="academicQualificationDuration.start"
                      value={artFormData.academicQualificationDuration.start}
                      type="text"
                      placeholder="Start Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    />
                    <input
                      onChange={artChangeHandler}
                      name="academicQualificationDuration.end"
                      value={artFormData.academicQualificationDuration.end}
                      type="text"
                      placeholder="End Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    />
                  </div>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Certificate</label>
                  <input
                    onChange={artChangeHandler}
                    value={artFormData.certificateOfAcademicQualification}
                    name="certificateOfAcademicQualification"
                    type="file"
                  ></input>
                </div>
              </div>
              <h4>CERTIFICATE COURSES</h4>
              <div className="ArtProfile_Certificate">
                <div className="ArtProfile_inputfield">
                  <label>Course</label>
                  <select>
                    <option selected hidden>
                      Select Course
                    </option>
                  </select>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Institute</label>
                  <select>
                    <option selected hidden>
                      Select Institute
                    </option>
                  </select>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Duration</label>
                  <div className="Artprofile_duration">
                    <input
                      type="text"
                      placeholder="Start Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    />
                    <input
                      type="text"
                      placeholder="End Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    />
                  </div>
                </div>
                <div className="ArtProfile_inputfield">
                  <label>Certificate</label>
                  <input type="file"></input>
                </div>
              </div>
            </div>

            <button type="submit" className="updateBtn">
              Update
            </button>
          </form>
        </div>
      )}

      {activeSection === "performance" && (
        <div className="PerformanceProfile_Infoform">
          <form onSubmit={perforSubmitHandler}>
            <h4>PERFORMANCE INFORMATION</h4>
            <div className="PerformanceProfile_PerformInfo">
              <div className="PerformanceProfile_inputfield">
                <label>Performance Type</label>
                <select>
                  <option selected hidden>
                    Select Type
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Years of Experience</label>
                <input
                  value={performanceFormData.yearOfExperience}
                  onChange={perforChangeHandler}
                  name="yearOfExperience"
                  type="text"
                ></input>
              </div>
              <div className="PerformanceProfile_inputfield affiliatedgrp">
                <label>Affiliated to any Group</label>
                <div className="affiliatedgrpinfo">
                  <label>
                    <input
                      value="true"
                      onChange={perforChangeHandler}
                      name="affiliatedToAnyGroup"
                      type="radio"
                      checked={
                        performanceFormData.affiliatedToAnyGroup == "true" ||
                        performanceFormData.affiliatedToAnyGroup === true
                      }
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="false"
                      onChange={perforChangeHandler}
                      name="affiliatedToAnyGroup"
                      checked={
                        performanceFormData.affiliatedToAnyGroup === "false" ||
                        performanceFormData.affiliatedToAnyGroup === false
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>If Yes, What’s the Name of the Group</label>
                <input
                  type="text"
                  value={performanceFormData.nameOfTheAffiliatedGroup}
                  onChange={perforChangeHandler}
                  name="nameOfTheAffiliatedGroup"
                ></input>
              </div>

              <div className="PerformanceProfile_inputfield affiliatedgrp">
                <label>Affiliated to any Organization</label>
                <div className="affiliatedgrpinfo">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      onChange={perforChangeHandler}
                      name="affiliatedToAnyOrg"
                      checked={
                        performanceFormData.affiliatedToAnyOrg === "true" ||
                        performanceFormData.affiliatedToAnyOrg === true
                      }
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="false"
                      onChange={perforChangeHandler}
                      name="affiliatedToAnyOrg"
                      checked={
                        performanceFormData.affiliatedToAnyOrg == "false" ||
                        performanceFormData.affiliatedToAnyOrg === false
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>If Yes, What’s the Name of the Organization</label>
                <input
                  type="text"
                  value={performanceFormData.nameOfTheAffiliatedOrg}
                  onChange={perforChangeHandler}
                  name="nameOfTheAffiliatedOrg"
                ></input>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Total No of Performances</label>
                <input
                  value={performanceFormData.totalNoOfPerformance}
                  onChange={perforChangeHandler}
                  name="totalNoOfPerformance"
                  type="text"
                ></input>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Highest Level of Performance</label>
                <select
                  value={performanceFormData.highestLevelOfPerformance}
                  onChange={perforChangeHandler}
                  name="highestLevelOfPerformance"
                >
                  <option selected hidden>
                    Select level
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Name Top 5 Performance of Yours</label>
                <input
                  value={performanceFormData.topFivePerformance}
                  onChange={perforChangeHandler}
                  name="topFivePerformance"
                  type="text"
                  style={{ height: "190px" }}
                ></input>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label
                  value={performanceFormData.performanceEvents}
                  onChange={perforChangeHandler}
                  name="performanceEvents"
                >
                  Performance Events
                </label>
                <select>
                  <option selected hidden>
                    Select multiple
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Thematic</label>
                <select
                  value={performanceFormData.thematic}
                  onChange={perforChangeHandler}
                  name="thematic"
                >
                  <option selected hidden>
                    Select thematic
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>No of Performances(Last Year)</label>
                <input
                  value={performanceFormData.NoOfPerformanceLastYear}
                  onChange={perforChangeHandler}
                  name="NoOfPerformanceLastYear"
                  type="number"
                ></input>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Performance Duration</label>
                <select
                  value={performanceFormData.performanceDuration}
                  onChange={perforChangeHandler}
                  name="performanceDuration"
                >
                  <option selected hidden>
                    Select Duration
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Charges Per Performance</label>
                <select
                  value={performanceFormData.chargesPerPerformance}
                  onChange={perforChangeHandler}
                  name="chargesPerPerformance"
                >
                  <option selected hidden>
                    Select any
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>Average Performance Income</label>
                <select
                  value={performanceFormData.averagePerformanceIncome}
                  onChange={perforChangeHandler}
                  name="averagePerformanceIncome"
                >
                  <option selected hidden>
                    Select average income
                  </option>
                </select>
              </div>
              <div className="PerformanceProfile_inputfield">
                <label>About My Journey</label>
                <input
                  value={performanceFormData.aboutJourney}
                  onChange={perforChangeHandler}
                  name="aboutJourney"
                  type="text"
                  style={{ height: "166px", width: "935px" }}
                ></input>
              </div>
              <h4>PERFORMANCE IMAGES</h4>
              <div className="PerformanceProfile_inputfield performancefilebox">
                <input
                  type="file"
                  id="Profile_fileinputimg"
                  value={
                    performanceFormData.performanceImages === ""
                      ? null
                      : performanceFormData.performanceImages
                  }
                  onChange={perforChangeHandler}
                  name="performanceImages"
                  accept="image/*"
                ></input>
                <label
                  htmlFor="Profile_fileinputimg"
                  className="fileinput_uploadfile"
                >
                  Upload file
                </label>
                <p className="performancefileboxtext">
                  (You can upload multiple images - max size : 40 mb)
                </p>
              </div>
              <h4>PERFORMANCE VIDEOS</h4>
              <div className="PerformanceProfile_inputfield performancefilebox">
                <input
                  type="file"
                  id="Profile_fileinputvideo"
                  accept="video/*"
                  value={performanceFormData.performancevideos}
                  onChange={perforChangeHandler}
                  name="performancevideos"
                ></input>
                <label
                  htmlFor="Profile_fileinputvideo"
                  className="fileinput_uploadfile"
                >
                  Upload file
                </label>
                <p className="performancefileboxtext">
                  (You can upload multiple videos - max size : 500 mb)
                </p>
              </div>
            </div>
            <button className="updateBtn">Update</button>
          </form>
        </div>
      )}

      {activeSection === "award" && (
        <div className="AwardProfile_Infoform">
          <form onSubmit={awardSubmitHandler}>
            <h4>AWARDS</h4>
            <div className="AwardProfile_AwardInfo">
              <div className="AwardProfile_inputfield">
                <label>Total Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalAwards}
                  name="totalAwards"
                  type="text"
                ></input>
              </div>
              <div className="AwardProfile_inputfield">
                <label>Total No of Local Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalNoOfLocalAwards}
                  name="totalNoOfLocalAwards"
                  type="text"
                ></input>
              </div>
              <div className="AwardProfile_inputfield">
                <label>Total No of District Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalNoOfDistrictAwards}
                  name="totalNoOfDistrictAwards"
                  type="text"
                ></input>
              </div>
              <div className="AwardProfile_inputfield">
                <label>Total No of State Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalNoOfStateAwards}
                  name="totalNoOfStateAwards"
                  type="text"
                ></input>
              </div>
              <div className="AwardProfile_inputfield">
                <label>Total No of National Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalNoOfNationalAwards}
                  name="totalNoOfNationalAwards"
                  type="text"
                ></input>
              </div>
              <div className="AwardProfile_inputfield">
                <label>Total No of International Awards</label>
                <input
                  onChange={awardChangeHandler}
                  value={awardFormData.totalNoOfInternationalAwards}
                  name="totalNoOfInternationalAwards"
                  type="text"
                ></input>
              </div>
            </div>
            <h4>AWARD DETAILS</h4>

            {awardFormData.awards.map((award, index) => (
              <React.Fragment key={index} >
                {
                  index === awardFormData.awards.length - 1 ?(
                    // last index => add plus button
                    <>
                    
                    <div className="AwardProfile_Awarddetials">
                    <div className="AwardProfile_inputfield">
                      <label>Award Name</label>
                      <input value={award.name}  onChange={(e) => handleInputChange(index, "name", e.target.value)}  type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Award Level</label>
                      <select value={award.level}  onChange={(e) => handleInputChange(index, "level", e.target.value)}>
                        <option selected hidden>
                          Select level
                        </option>
                      </select>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Category</label>
                      <select value={award.category}  onChange={(e) => handleInputChange(index, "category", e.target.value)} >
                        <option selected hidden>
                          Select Category
                        </option>
                      </select>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Name of the Stage</label>
                      <input value={award.nameOfTheStage}  onChange={(e) => handleInputChange(index, "nameOfTheStage", e.target.value)} type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Award Year</label>
                      <input value={award.year}  onChange={(e) => handleInputChange(index, "year", e.target.value)} type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Given By</label>
                      <input value={award.givenBy}  onChange={(e) => handleInputChange(index, "givenBy", e.target.value)} type="text"></input>
                    </div>
                  </div>
  
                  <div className="AwardProfile_Addmorebtn">
                    <p>Add More Awards Details</p>
                    <button type="button">
                      {" "}
                      <svg onClick={addNewAward}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                        <text
                          x="50%"
                          y="50%"
                          text-anchor="middle"
                          fill="white"
                          font-size="24px"
                          font-family="Arial"
                          dy=".3em"
                        >
                          +
                        </text>
                      </svg>
                    </button>
                  </div>
                </>
                  ):(
                    // not last index => add - button
                    <>
                    
                    <div className="AwardProfile_Awarddetials">
                    <div className="AwardProfile_inputfield">
                      <label>Award Name</label>
                      <input value={award.name}  onChange={(e) => handleInputChange(index, "name", e.target.value)}  type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Award Level</label>
                      <select value={award.level}  onChange={(e) => handleInputChange(index, "level", e.target.value)}>
                        <option selected hidden>
                          Select level
                        </option>
                      </select>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Category</label>
                      <select value={award.category}  onChange={(e) => handleInputChange(index, "category", e.target.value)}>
                        <option selected hidden>
                          Select Category
                        </option>
                      </select>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Name of the Stage</label>
                      <input value={award.nameOfTheStage}  onChange={(e) => handleInputChange(index, "nameOfTheStage", e.target.value)} type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Award Year</label>
                      <input value={award.year}  onChange={(e) => handleInputChange(index, "year", e.target.value)} type="text"></input>
                    </div>
                    <div className="AwardProfile_inputfield">
                      <label>Given By</label>
                      <input value={award.givenBy}  onChange={(e) => handleInputChange(index, "givenBy", e.target.value)} type="text"></input>
                    </div>
                  </div>
  
                  <div className="AwardProfile_Addmorebtn">
                    <p>Remove</p>
                    <button type="button">
                      {" "}
                      <svg onClick={removeLastAward}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                        <text
                          x="50%"
                          y="50%"
                          text-anchor="middle"
                          fill="white"
                          font-size="24px"
                          font-family="Arial"
                          dy=".3em"
                        >
                          -
                        </text>
                      </svg>
                    </button>
                  </div>
                </>
                  )
                }
              
              </React.Fragment>
            ))}

            <button className="updateBtn">Update</button>
          </form>
        </div>
      )}

      {activeSection === "expected" && (
        <div className="ExpectedoppoProfile_Infoform">
          <form onSubmit={expectedSubmitHandler}>
            <h4>EXPECTED OPPORTUNITIES</h4>
            <div className="ExpectedoppoProfile_Expectedoppo">
              <div className="ExpectedoppoProfile_inputfield">
                <label>Nature of Art</label>
                <input
                  value={expectedFormData.natureOfExpectedOpp}
                  name="natureOfExpectedOpp"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Name of the Art you Perform</label>
                <input
                  value={expectedFormData.nameOfTheArtPerformed}
                  name="nameOfTheArtPerformed"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Type of Performance</label>
                <select
                  value={expectedFormData.typeOfExpectedOpp}
                  name="typeOfExpectedOpp"
                  onChange={expecChangeHandler}
                >
                  <option selected hidden>
                    Select type
                  </option>
                </select>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Current Location</label>
                <input
                  value={expectedFormData.currentLocation}
                  name="currentLocation"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Expected Opportunity Location</label>
                <input
                  value={expectedFormData.ExpectedOppLocation}
                  name="ExpectedOppLocation"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>No of Languages Known</label>
                <input
                  value={expectedFormData.NoOfLanguagesKnown}
                  name="NoOfLanguagesKnown"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Name the Languages you Know</label>
                <input
                  value={expectedFormData.nameOfLanguagesKnown}
                  name="nameOfLanguagesKnown"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Minimum Performance Time</label>
                <select
                  value={expectedFormData.minPerformanceTime}
                  name="minPerformanceTime"
                  onChange={expecChangeHandler}
                >
                  <option selected hidden>
                    Select duration time
                  </option>
                </select>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Minimum Budget</label>
                <input
                  value={expectedFormData.minimumBudget}
                  name="minimumBudget"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Level of Stages Want to Perform</label>
                <select
                  value={expectedFormData.levelOfStagesWantToPerform}
                  name="levelOfStagesWantToPerform"
                  onChange={expecChangeHandler}
                >
                  <option selected hidden>
                    Select multiple
                  </option>
                </select>
              </div>
            </div>
            <h4>NEED SUPPORT</h4>
            <div className="ExpectedoppoProfile_Needsupport">
              <div className="ExpectedoppoProfile_inputfield">
                <label>Upskilling</label>
                <input
                  value={expectedFormData.upskilling}
                  name="upskilling"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Collaboration</label>
                <input
                  value={expectedFormData.collaboration}
                  name="collaboration"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Promotion</label>
                <input
                  value={expectedFormData.promotion}
                  name="promotion"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
              <div className="ExpectedoppoProfile_inputfield">
                <label>Performance Support</label>
                <input
                  value={expectedFormData.performanceSupport}
                  name="performanceSupport"
                  onChange={expecChangeHandler}
                  type="text"
                ></input>
              </div>
            </div>
            <button className="updateBtn">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}
