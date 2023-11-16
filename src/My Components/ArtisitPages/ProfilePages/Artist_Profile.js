import React from "react";
import "./Artist_Profile.css";
import { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../FrontPage/Navbar.css";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
  makeAuthenticatedPOSTRequest,
  makeAuthenticated_Multi_Patch_REQ,
} from "../../../services/serverHelper";
// import {
//   makeAuthenticatedGETRequest,
//   makeAuthenticatedPATCHRequest,
//   makeAuthenticatedPOSTRequest,
//   makeAuthenticated_Multi_Patch_REQ,
// } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { artistProfilePoints } from "../../../services/apis";
import Artist_navbar from "../Artist_navbar";
import art from "./assets/art.svg";
import star from "./assets/star.svg";
import performance from "./assets/performance.svg";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import Globe from "./assets/Globe.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import TwitterX from "./assets/TwitterX.svg";
import YouTube from "./assets/YouTube.svg";
import {
  specialization,
  languages,
  artform,
  performanceduration,
  artTypeData,
  performancetype,
  natureofArt,
  nameofart,
  courses,
  categories,
  disabilitiesArray,
  highestLevelOfPerformance,
  ChargesPerPerformance,
  artInfo1,
} from "../../../Data/artistProfile";
import Select from "react-select";

export function Artist_Profile() {
  const { accessToken } = useSelector((state) => state.auth);
  const defaultPic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  // const defaultPic =
  //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const initialActiveSection = "basic";

  const [activeSection, setActiveSection] = useState(initialActiveSection);

  //multiple select languages
  const languageoptions = languages.map((item) => ({
    value: item,
    label: item,
  }));
  const [languagesoptions, setlanguagesoptions] = useState(null);

  // ! this is for avatar
  const [profileAvatar, setProfileAvatar] = useState(null);
  // ! this is for avatar
  // const [profileAvatar, setProfileAvatar] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  const statesOFIndiaData = [
    {
      key: "AN",
      name: "Andaman and Nicobar Islands",
    },
    {
      key: "AP",
      name: "Andhra Pradesh",
    },
    {
      key: "AR",
      name: "Arunachal Pradesh",
    },
    {
      key: "AS",
      name: "Assam",
    },
    {
      key: "BR",
      name: "Bihar",
    },
    {
      key: "CG",
      name: "Chandigarh",
    },
    {
      key: "CH",
      name: "Chhattisgarh",
    },
    {
      key: "DH",
      name: "Dadra and Nagar Haveli",
    },
    {
      key: "DD",
      name: "Daman and Diu",
    },
    {
      key: "DL",
      name: "Delhi",
    },
    {
      key: "GA",
      name: "Goa",
    },
    {
      key: "GJ",
      name: "Gujarat",
    },
    {
      key: "HR",
      name: "Haryana",
    },
    {
      key: "HP",
      name: "Himachal Pradesh",
    },
    {
      key: "JK",
      name: "Jammu and Kashmir",
    },
    {
      key: "JH",
      name: "Jharkhand",
    },
    {
      key: "KA",
      name: "Karnataka",
    },
    {
      key: "KL",
      name: "Kerala",
    },
    {
      key: "LD",
      name: "Lakshadweep",
    },
    {
      key: "MP",
      name: "Madhya Pradesh",
    },
    {
      key: "MH",
      name: "Maharashtra",
    },
    {
      key: "MN",
      name: "Manipur",
    },
    {
      key: "ML",
      name: "Meghalaya",
    },
    {
      key: "MZ",
      name: "Mizoram",
    },
    {
      key: "NL",
      name: "Nagaland",
    },
    {
      key: "OR",
      name: "Odisha",
    },
    {
      key: "PY",
      name: "Puducherry",
    },
    {
      key: "PB",
      name: "Punjab",
    },
    {
      key: "RJ",
      name: "Rajasthan",
    },
    {
      key: "SK",
      name: "Sikkim",
    },
    {
      key: "TN",
      name: "Tamil Nadu",
    },
    {
      key: "TS",
      name: "Telangana",
    },
    {
      key: "TR",
      name: "Tripura",
    },
    {
      key: "UK",
      name: "Uttar Pradesh",
    },
    {
      key: "UP",
      name: "Uttarakhand",
    },
    {
      key: "WB",
      name: "West Bengal",
    },
  ];

  const MajorIndianCities = [
    {
      city: "Mumbai",
      state: "Maharashtra",
    },
    {
      city: "Delhi",
      state: "Delhi",
    },
    {
      city: "Bangalore",
      state: "Karnataka",
    },
    {
      city: "Kolkata",
      state: "West Bengal",
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
    },
    {
      city: "Hyderabad",
      state: "Telangana",
    },
    {
      city: "Pune",
      state: "Maharashtra",
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
    },
    {
      city: "Jaipur",
      state: "Rajasthan",
    },
    {
      city: "Lucknow",
      state: "Uttar Pradesh",
    },
  ];

  const MajorInternationalCities = [
    "United States",
    "China",
    "India",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Ethiopia",
    "Philippines",
    "Egypt",
    "Vietnam",
    "DR Congo",
    "Turkey",
    "Iran",
    "Germany",
    "Thailand",
    "United Kingdom",
    "France",
    "Italy",
    "South Africa",
    "Myanmar",
    "South Korea",
    "Colombia",
    "Spain",
    "Ukraine",
    "Tanzania",
  ];

  // !  for basic proile
  const [basicFormData, setBasicFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: {
      countryCode: "",
      number: "",
    },
    age: "",
    gender: "",
    language: "",
    monthlyIncome: "",
    about: "",
    pwd: "",
    incomeSrc: "",
    socialCategory: "",
    idProof: {
      name: "",
      num: "",
    },
    address: {
      state: "",
      city: "",
      pincode: "",
      details: "",
    },
    anunalIncomeByPerf: "",
    numOfperformanceLastYear: "",
    handles: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedIn: "",
      website: "",
      twitter: "",
    },
    gstIn: "",
    aadharNumber: "",
    panNumber: "",
    upiId: "",
    passportNumber: "",
  });
  console.log(basicFormData.countryCode);
  const [numberOfAward, setNumberOfAward] = useState("");
  const [hightLevel, sethightLevel] = useState("");
  // ! change  handler for basic profile
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNumberOfAward(value);
    sethightLevel(value);
    if (name.startsWith("address.")) {
      // If the change is related to address, update the nested state
      PinFetch(value);
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
    } else if (name.startsWith("contactNumber.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        contactNumber: {
          ...prevData.contactNumber,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("idProof.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        idProof: {
          ...prevData.idProof,
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

  const PinFetch = async (value) => {
    try {
      if (value.length === 6) {
        const url = `https://api.postalpincode.in/pincode/` + value;
        const Responce = await fetch(url);
        const data = await Responce.json();
        // console.log("checkPin",data[0].Status);
        if (data[0].Status === "Success") {
          setBasicFormData((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              state: data[0].PostOffice[0].State,
              city: data[0].PostOffice[0].District,
            },
          }));
        } else {
          toast.error("PIN Code not found");
        }
      } else {
        setBasicFormData((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            state: "",
            city: "",
          },
        }));
      }
    } catch (error) {
      toast.error(error);
    }
  };

  //   ! submit update handler for basic profile
  const basicSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");

    let address = basicFormData.address;
    let idProof = basicFormData.idProof;

    let {
      firstName,
      lastName,
      about,
      age,
      email,
      contactNumber,
      gender,
      socialCategory,
      monthlyIncome,
      aadharNumber,
      panNumber,
      upiId,
      anunalIncomeByPerf,
      passportNumber,
      numOfperformanceLastYear,
      handles,
      pwd,
      incomeSrc,
      gstIn,
    } = basicFormData;

    let personalInfo = {
      firstName,
      lastName,
      about,
      age,
      pwd,
      email,
      contactNumber,
      gender,
      monthlyIncome,
      socialCategory,

      incomeSrc,
    };

    // personalInfo.language = languagesoptions
    //   .map((option) => option.value)
    //   .join(" ");

    let otherInfo = {
      aadharNumber,
      panNumber,
      upiId,
      passportNumber,
      numOfperformanceLastYear,
      idProof,
      gstIn,
      anunalIncomeByPerf,
    };

    let socialLinks = handles;

    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { address, personalInfo, otherInfo, socialLinks },
        accessToken
      );

      if (response.status === "success") {
        toast.success(" successFully updated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setActiveSection("art");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
        toast.error("server error please try again", {
          position: "top-center",
        });
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
    artForm: "",
    performanceType: "",
    artEducation: "",
    artName: "",
    nameOfGuru: "",
    traditionArtName: "",
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
    certificateInstitute: "",
    certificateCourse: "",
    certificateDuration: {
      start: "",
      end: "",
    },
  });
  const [traditionalTable, setTraditionalTable] = useState([
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      artName: "",
      guruName: "",
      location: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
  ]);
  const handleArtProfileChanges = (e, rowIdx, key) => {
    const newData = [...professionalTable];
    newData[rowIdx][key] = e.target.value;
    setProfessionalTable(newData);
  };
  const [artInfoFormData, setArtInfoFormData] = useState({
    aboutArt: "",
    artCategory: [],
    artEducation: "",
    artName: [],
    artType: [],
  });
  // console.log("table",professionalTable);
  const [art, setArt] = useState([]);

  const artChangesHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("artCategory")) {
      setArt(artInfo1.find((ctr) => ctr.art === value).category);
      setArtInfoFormData((prev) => ({
        ...prev,
        artCategory: value,
      }));
    } else {
      setArtInfoFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  // const [artTypeDataState, setArtTypeDataState] = useState("");
  // const artChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setArtTypeDataState(value);
  //   if (name.startsWith("artEduDuration.")) {
  //     // If the change is related to address, update the nested state
  //     setArtInfoFormData((prevData) => ({
  //       ...prevData,
  //       artEduDuration: {
  //         ...prevData.artInfoFormData,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //   } else if (name.startsWith("academicQualificationDuration.")) {
  //     // If the change is related to address, update the nested state
  //     setArtInfoFormData((prevData) => ({
  //       ...prevData,
  //       academicQualificationDuration: {
  //         ...prevData.academicQualificationDuration,
  //         [name.split(".")[1]]: value,
  //       },
  //     }));
  //   } else {
  //     setArtInfoFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  const artSubmitHandler = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");

    const {
      artEduDuration,
      artForm,
      // artName,
      performanceType,
      natureOfArt,
      // nameOfGuru,
      yearOfCompletation,
      traditionArtName,
      academicQualification,
      course,
      specialization,
      institute,
      academicQualificationDuration,
      certificateCourse,
      certificateInstitute,
      certificateDuration,
    } = artFormData;

    const { aboutArt, artCategory, artEducation, artName, artType } =
      artInfoFormData;

    let artInfo = {
      aboutArt: aboutArt,
      artCategory: artCategory,
      artEducation: artEducation,
      artName: artName,
      artType: artType,
    };
    let traditionalInfo = traditionalTable;

    let professionalInfo = professionalTable;
    // professionalTable
    // let certificateInfo = {
    //   course: certificateCourse,
    //   duration: certificateDuration,
    //   institute: certificateInstitute,
    // };

    console.log(professionalInfo, traditionalInfo);
    console.log(artInfoFormData);

    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { artInfo, professionalInfo, traditionalInfo },
        accessToken
      );

      // console.log("artrespone", response);

      if (response.status === "success") {
        toast.success("successfuly update", {
          position: "top-center",
        });
        setActiveSection("performance");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Not Updated Successfully , Please try again", {
        position: "top-center",
      });
    }

    toast.dismiss(toastId);
  };

  //  ! for performance profile section

  const [tableData, setTableData] = useState([
    // Initial data with column headings
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
    {
      eventName: "",
      duration: "",
      level: "",
      location: "",
      collaborator: "",
      link: "",
    },
  ]);
  const [performanceFormData, setPerformanceFormData] = useState({
    affiliatedToAnyGroup: "",
    nameOfArtistGroupOrg: "",
    locationOfGroupOrg: "",
    contactNoOfGroupOrg: "",
    typeOfPerformance: "",
    highestLevelOfPerformance: "",
    totalPerfs: "",
    experience: "",
    avgPerfDurationIn: "",
    avgPerfFeeIn: "",
    avgPerfDurationInternational: "",
    avgPerfFeeInternational: "",
    majorPerfCityIndia: "",
    majorPerfCountryInternational: "",
    aboutJourney: "",
    topFivePerformance: [],
    performanceImages: [],
    performancevideos: [],

    // nameOfTheAffiliatedGroup: "",
    // affiliatedToAnyOrg: "",
    // nameOfTheAffiliatedOrg: "",
    // totalNoOfPerformance: "",
    // performanceEvents: "",
    // thematic: "",
    // NoOfPerformanceLastYear: "",
    // performanceDuration: "",
    // performanceType: "",
    // chargesPerPerformance: "",
    // averagePerformanceIncome: "",
    // aboutJourney: "",
  });

  const perforChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("topFivePerformance.")) {
      // Parse the index from the name
      const index = parseInt(name.replace("topFivePerformance.", ""), 10);

      // Create a copy of the current topFivePerformance array
      const updatedPerformanceArray = [
        ...performanceFormData.topFivePerformance,
      ];

      // Update the specific element at the index with the new value
      updatedPerformanceArray[index] = value;

      // Update the performanceFormData state with the modified array
      setPerformanceFormData((prevData) => ({
        ...prevData,
        topFivePerformance: updatedPerformanceArray,
      }));
    } else {
      // Handle other form fields as needed
      setPerformanceFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const perforSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");

    // try {
    //   const {
    //     affiliatedToAnyGroup,
    //     nameOfArtistGroupOrg,
    //     locationOfGroupOrg,
    //     contactNoOfGroupOrg,
    //     typeOfPerformance,
    //     highestLevelOfPerformance,
    //     totalPerfs,
    //     experience,
    //     avgPerfDurationIn,
    //     avgPerfFeeIn,
    //     avgPerfDurationInternational,
    //     avgPerfFeeInternational,
    //     aboutJourney,
    //     majorPerfCityIndia,
    //     majorPerfCountryInternational,
    //     performanceImages,
    //     performancevideos,
    //     // yearOfExperience,
    //     // affiliatedToAnyGroup,
    //     // nameOfTheAffiliatedGroup,
    //     // affiliatedToAnyOrg,
    //     // nameOfTheAffiliatedOrg,
    //     // totalNoOfPerformance,
    //     // highestLevelOfPerformance,
    //     // performanceEvents,
    //     // thematic,
    //     // NoOfPerformanceLastYear,
    //     // performanceDuration,
    //     // chargesPerPerformance,
    //     // averagePerformanceIncome,
    //     // performanceType,
    //   } = performanceFormData;

    //   let performanceInfo = {
    //     affiliation: {
    //       name: nameOfArtistGroupOrg,
    //       isAffiliated: affiliatedToAnyGroup,
    //       location: locationOfGroupOrg,
    //       conactNumber: contactNoOfGroupOrg,
    //     },
    //     perfDuration: {
    //       india: avgPerfDurationIn,
    //       international: avgPerfDurationInternational,
    //     },
    //     perfCharge: {
    //       india: avgPerfFeeIn,
    //       international: avgPerfFeeInternational,
    //     },
    //     perfType: typeOfPerformance,
    //     experience: experience,
    //     highlights: aboutJourney,
    //     totalPerfs: totalPerfs,
    //     peakPerf: highestLevelOfPerformance,
    //     majorPerfCity: majorPerfCityIndia,
    //     majorPerfCountry: majorPerfCountryInternational,
    //     perfDetails: tableData,
    //     perfImgs: performanceImages,
    //     perfVideos: performancevideos,
    //   };
    //   // console.log(performanceFormData);

    //   const response = await makeAuthenticatedPATCHRequest(
    //     artistProfilePoints.UPDATE_PROFILE_DATA_API,
    //     { performanceInfo },
    //     accessToken
    //   );
    //   // console.log("response ", response);
    //   if (response.status === "success") {
    //     toast.success("successfully updated ", {
    //       position: "top-center",
    //     });
    //     setActiveSection("award");
    //     localStorage.setItem("activeSection", activeSection);
    //   } else {
    //     toast.error(response.message, {
    //       position: "top-center",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("cannot updated successfully , please try again", {
    //     position: "top-center",
    //   });
    // }

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

  // Professional Profile
  const [artProfile, setArtProfile] = useState({
    categoryOfArt: "",
    nameOfArt: "",
    typeOFArt: "",
    artEducation: "",
    professional: [],
    Traditional: [],
  });

  const awardChangeHandler = (event) => {
    const { name, value } = event.target;

    setAwardFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ! in this for awardd
  const handleInputChange = (index, field, value) => {
    const newAwards = [...awardFormData.awards];
    newAwards[index][field] = value;

    setAwardFormData({
      ...awardFormData,
      awards: newAwards,
    });
  };

  // ! award section update
  const awardSubmitsHandler = async (event) => {
    event.preventDefault();
    const taostId = toast.loading("Loding...");
    try {
      const {
        totalAwards,
        totalNoOfLocalAwards,
        totalNoOfDistrictAwards,
        totalNoOfStateAwards,
        totalNoOfNationalAwards,
        totalNoOfInternationalAwards,
        awards,
      } = awardFormData;

      let awardsInfo = {
        districtAwards: totalNoOfDistrictAwards,
        internationalAwards: totalNoOfInternationalAwards,
        localAwards: totalNoOfLocalAwards,
        nationalAwards: totalNoOfNationalAwards,
        stateAwards: totalNoOfStateAwards,
        totalAwards: totalAwards,
        awardsDetails: [...awards],
      };

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { awardsInfo },
        accessToken
      );
      // console.log("response", response);
      if (response.status === "success") {
        toast.success("successfully update", {
          position: "top-center",
        });

        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }

    toast.dismiss(taostId);
  };

  // ! this is to add the new award in award section
  const addNewAward = () => {
    const newAward = {
      NameOfGuru: "",
      Location: "",
      Duration: "",
      year: "",
      Document: "",
    };
    setAwardFormData({
      ...awardFormData,
      awards: [...awardFormData.awards, newAward],
    });
  };

  // this is add button in Professional Art Education

  const addProfessional = () => {
    const filled = {
      NameOfGuru: "",
      Location: "",
      Duration: "",
      year: "",
      Document: "",
    };
    setArtProfile({
      ...artProfile,
      professional: [...artProfile.professional, filled],
    });
  };

  const addTraditional = () => {
    const newTradition = {
      Course: "",
      Specialisation: "",
      Institute: "",
      Duration: "",
      Completion: "",
      Document: "",
    };
    setArtProfile({
      ...artProfile,
      Traditional: [...artProfile.Traditional, newTradition],
    });
  };

  //remove the //remove the Professional
  const removeLastTradition = () => {
    const newTradition = [...artProfile.Traditional];
    newTradition.pop(); // Remove the last element

    setArtProfile({
      ...artProfile,
      Traditional: newTradition,
    });
  };
  const removeLastProfessional = () => {
    const filled = [...artProfile.professional];
    filled.pop(); // Remove the last element

    setArtProfile({
      ...artProfile,
      professional: filled,
    });
  };

  // ! remove the award detail in award section
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
      console.log("fetchdata", response.data);

      const {
        address,
        appliedOpportunities,
        artInfo,
        awardsInfo,
        certificateInfo,
        otherInfo,
        performanceInfo,
        personalInfo,
        professionalInfo,
        savedOpportunities,
        socialLinks,
        traditionalInfo,
      } = response.data;

      if (personalInfo.avatar.url) {
        setProfileAvatar(personalInfo.avatar.url);
      }

      setArtInfoFormData((prev) => ({
        ...prev,
        aboutArt: artInfo?.aboutArt,
        artCategory: artInfo?.artCategory,
        artEducation: artInfo?.artEducation,
        artName: artInfo?.artName,
        artType: artInfo?.artType,
      }));
      // console.log("ioioo");
      // console.log("iiiio", artInfoFormData);

      setAwardData((prev) => ({
        ...prev,
        highlights: awardsInfo?.highlights,
        level: awardsInfo?.level,
        totalAwards: awardsInfo?.totalAwards,
        awardsDetails: awardsInfo?.awardsDetails,
      }));

      if (awardsInfo?.awardsDetails.length > 0) {
        setAwardTable(awardsInfo?.awardsDetails);
      }
      if (traditionalInfo?.length > 0) {
        setTraditionalTable(traditionalInfo);
      }
      if (professionalInfo?.length > 0) {
        setProfessionalTable(professionalInfo);
      }

      setBasicFormData((prev) => ({
        ...prev,
        firstName: personalInfo?.firstName,
        lastName: personalInfo?.lastName,
        email: personalInfo?.email,
        age: personalInfo?.age,
        gender: personalInfo?.gender,
        about: personalInfo?.about,
        language: personalInfo?.language,
        monthlyIncome: personalInfo?.monthlyIncome,
        socialCategory: personalInfo?.socialCategory,
        pwd: personalInfo?.pwd,
        incomeSrc: personalInfo?.incomeSrc,
        aadharNumber: otherInfo?.aadharNumber,
        panNumber: otherInfo?.panNumber,
        anunalIncomeByPerf: otherInfo?.anunalIncomeByPerf,
        upiId: otherInfo?.upiId,
        gstIn: otherInfo?.gstIn,
        numOfperformanceLastYear: otherInfo?.lastYearPerfsCount,
        passportNumber: otherInfo?.passportNumber,
        address: {
          ...prev.address,
          ...response.data.address,
        },
        handles: {
          ...prev.handles,
          ...response.data.socialLinks,
        },
        contactNumber: {
          ...prev.contactNumber,
          ...response.data.personalInfo.contactNumber,
        },
        idProof: {
          ...prev.idProof,
          ...response.data.otherInfo.idProof,
        },
      }));
      setlanguagesoptions(
        personalInfo?.language
          ?.split(" ")
          .map((item) => ({ value: item, label: item }))
      );

      setArtFormData((prev) => ({
        ...prev,
        natureOfArt: artInfo?.artCategory,
        // check
        areaOfInterest: artInfo?.areaOfInterest,

        // genre,

        traditionArtName: traditionalInfo?.artName,

        artForm: artInfo?.artForm,
        performanceType: artInfo?.perfType,
        // check
        artEducation: artInfo?.learningSrc,
        artName: artInfo?.artName,

        nameOfGuru: traditionalInfo?.guruName,
        yearOfCompletation: traditionalInfo?.completionYear,
        certificateOfArt: traditionalInfo?.certificate,
        academicQualification: professionalInfo?.qualification,
        course: professionalInfo?.course,
        specialization: professionalInfo?.specialization,
        institute: professionalInfo?.institute,

        // certificateOfAcademicQualification,
        certificateInstitute: certificateInfo?.institute,

        certificateCourse: certificateInfo?.course,

        artEduDuration: {
          ...prev.artEduDuration,
          ...response.data?.traditionalInfo?.duration,
        },

        academicQualificationDuration: {
          ...prev.academicQualificationDuration,
          // check
          ...professionalInfo?.duration,
        },

        certificateDuration: {
          ...prev.certificateDuration,
          // check
          ...certificateInfo?.duration,
        },
      }));

      // setProfessionalTable(())
      console.log("->>");
      console.log("art Imfo ", response.data);
      console.log("->>");

      setPerformanceFormData((prev) => ({
        ...prev,
        experience: performanceInfo?.experience,
        typeOfPerformance: performanceInfo?.perfType,
        nameOfArtistGroupOrg: performanceInfo?.affiliation?.name,
        affiliatedToAnyGroup: performanceInfo?.affiliation?.isAffiliated,
        totalPerfs: performanceInfo?.totalPerfs,
        highestLevelOfPerformance: performanceInfo?.peakPerf,
        topFivePerformance: performanceInfo?.perfDetails,
        locationOfGroupOrg: performanceInfo?.affiliation?.location,
        contactNoOfGroupOrg: performanceInfo?.affiliation?.contactNumber,
        avgPerfDurationIn: performanceInfo?.perfDuration?.india,
        avgPerfFeeIn: performanceInfo?.perfCharge?.india,
        avgPerfDurationInternational:
          performanceInfo?.perfDuration?.international,
        avgPerfFeeInternational: performanceInfo?.perfCharge?.international,
        majorPerfCityIndia: performanceInfo?.majorPerfCity,
        majorPerfCountryInternational: performanceInfo?.majorPerfCountry,
        aboutJourney: performanceInfo?.highlights,
        performanceImages: performanceInfo?.perfImgs,
        performancevideos: performanceInfo?.perfVideos,
      }));
      if (performanceInfo?.perfDetails.length > 0) {
        setTableData(performanceInfo?.perfDetails);
      }

      // setAwardFormData((prev) => ({
      //   ...prev,
      //   totalAwards: awardsInfo?.totalAwards,
      //   totalNoOfLocalAwards: awardsInfo?.localAwards,
      //   totalNoOfDistrictAwards: awardsInfo?.districtAwards,
      //   totalNoOfStateAwards: awardsInfo?.stateAwards,
      //   totalNoOfNationalAwards: awardsInfo?.nationalAwards,
      //   totalNoOfInternationalAwards: awardsInfo?.internationalAwards,
      //   awards:
      //     awardsInfo?.awardsDetails.length === 0
      //       ? [
      //           {
      //             title: "",
      //             level: "",
      //             category: "",
      //             stage: "",
      //             year: "",
      //             givenBy: "",
      //           },
      //         ]
      //       : awardsInfo?.awardsDetails,
      // }));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePerformanceTableChange = (e, rowIdx, key) => {
    const newData = [...tableData];
    newData[rowIdx][key] = e.target.value;
    setTableData(newData);
  };

  const handleAwardTable = (e, rowIdx, key) => {
    const newData = [...awardsTable];
    newData[rowIdx][key] = e.target.value;
    setAwardTable(newData);
  };

  useEffect(() => {
    fetchProileData();
  }, []);

  // ! this is to add avatar file
  // ! this is to add avatar file
  const handleButtonClick = () => {
    // const fileInput = document.createElement("input");
    // fileInput.type = "file";
    // fileInput.accept = ".jpg, .jpeg, .png";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".jpg, .jpeg, .png";
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  // ! this is to add the avatar
  // ! this is to add the avatar
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // console.log("sele", selectedFile);
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const response = await makeAuthenticated_Multi_Patch_REQ(
        artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
        formData,
        accessToken
      );
      // console.log("res", response);
      setProfileAvatar(response?.data?.avatar);
      // const response = await makeAuthenticated_Multi_Patch_REQ(
      //   artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
      //   formData,
      //   accessToken
      // );
      // console.log("res", response);
      // setProfileAvatar(response?.data?.avatar);
    }
  };

  const handelMultipleImages = async (e) => {
    // const [selectedImages, setSelectedImages] = useState([]);

    // console.log("okko");
    const Files = e.target.files;
    // console.log(e.target.files);

    // Convert the FileList to an array
    const newImages = Array.from(Files);

    setPerformanceFormData({
      ...performanceFormData,
      performanceImages: [...newImages],
    });
  };

  //! this is for remove avatart
  const handleRemoveAvatar = async (event) => {
    //! this is for remove avatart
    const handleRemoveAvatar = async (event) => {
      event.preventDefault();

      const response = await makeAuthenticatedPOSTRequest(
        artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
        { avatar: "" },
        accessToken
      );
      setProfileAvatar(null);
    };

    const response = await makeAuthenticatedPOSTRequest(
      artistProfilePoints.UPDATE_ARTIST_AVATAR_API,
      { avatar: "" },
      accessToken
    );
    setProfileAvatar(null);
  };

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
  //   ! dont change this
  // const mystyle = {
  //   fontSize: "large",
  //   fontWeight: "500",
  // };
  // const back = {
  //   backgroundColor: "transparent",
  //   marginLeft: "0vh",
  //   marginTop: "-2vh",
  // };

  //Art Profile page

  const [artTable, setArtTable] = useState([
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
    {
      art: "",
      guru: "",
      Location: "",
      duration: "",
      completion: "",
      link: "",
    },
  ]);

  //new Award Page
  const [awardData, setAwardData] = useState({
    highlights: "",
    level: "",
    totalAwards: "",
    awardsDetails: [],
  });

  const handleTraditional = (e, rowIdx, key) => {
    const newData = [...traditionalTable];
    newData[rowIdx][key] = e.target.value;
    setTraditionalTable(newData);
  };

  const [professionalTable, setProfessionalTable] = useState([
    {
      course: "",
      specialisation: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      course: "",
      specialisation: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
    {
      course: "",
      specialisation: "",
      institute: "",
      duration: "",
      completionYear: 0,
      link: "",
    },
  ]);

  const [awardsTable, setAwardTable] = useState([
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
    {
      title: "",
      awardingBody: "",
      level: "",
      location: "",
      year: "",
      documentUrl: "",
    },
  ]);

  const awardHandle = (event) => {
    const { name, value } = event.target;

    setAwardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // console.log("Award",awardData);

  const awardSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(awardsTable);
    const toastId = toast.loading("Loading...");
    console.log(awardData);
    try {
      let awardsInfo = {
        awardsDetails: awardsTable,
        level: awardData.level,
        highlights: awardData.highlights,
        totalAwards: awardData.totalAwards,
      };
      console.log("awaD Ta", awardsInfo);

      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { awardsInfo },
        accessToken
      );
      // console.log("response ", response);
      if (response.status === "success") {
        toast.success("successfully updated ", {
          position: "top-center",
        });
        setActiveSection("award");
        localStorage.setItem("activeSection", activeSection);
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("cannot updated successfully , please try again", {
        position: "top-center",
      });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const awardTableHandle = (e, rowIdx, key) => {
    const newAwardsTable = [...awardsTable];
    newAwardsTable[rowIdx][key] = e.target.value;
    setAwardData(awardsTable);
  };
  // console.log("award Page",awardData);
  return (
    <div className="Profile_Page">
      <div
        className="ProfilePage_Navbar"
        style={{ position: "sticky", top: "0" }}
      >
        <Artist_navbar />
        <Navbar
          style={{ zIndex: "99" }}
          className="navbar nav_frontpage navbar-expand-lg "
          expand="lg"
        >
          {/* <Container> */}
          <div className="container-fluid">
            {/* <!--Art Lover : i am comment the Navbar.Toggle for remove the menu Button--> */}
            {/* <!--Art Lover : i am comment the Navbar.Toggle for remove the menu Button--> */}

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
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
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

      <div className="chiku-ProfileSection">
        <div className="profile-left">
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
            {/* <button
              className={activeSection === "art" ? "active" : ""}
              onClick={() => handleClick("art")}
            >
              <img src={art} /> Art Profile
            </button> */}
            <button
              className={activeSection === "art" ? "active" : ""}
              onClick={() => handleClick("art")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "5px" }} // Adding some margin between the symbol and text
              >
                <path
                  d="M12.516 6.40817L9.45853 3.41073C9.41227 2.76086 9.57065 2.11273 9.91237 1.55351C10.2541 0.994286 10.7628 0.550788 11.37 0.282666C11.9772 0.0145445 12.6538 -0.0653421 13.3088 0.0537512C13.9638 0.172845 14.5659 0.485205 15.0339 0.948823C15.5065 1.40762 15.8246 1.99658 15.9456 2.63693C16.0666 3.27728 15.9847 3.93849 15.7109 4.5321C15.4371 5.12572 14.9845 5.62345 14.4135 5.95871C13.8426 6.29397 13.1806 6.45078 12.516 6.40817ZM1.15268 12.2432L8.67372 4.89746L10.9873 7.15953L3.46622 14.5133L1.16086 12.2432H1.15268ZM0.00817504 14.5053L1.73311 12.8107L2.89397 13.9458L1.16086 15.6403L0 14.5053H0.00817504ZM7.81534 12.0034L9.45035 10.4048V16H7.81534V12.0034Z"
                  fill="black"
                />
              </svg>
              Art Profile
            </button>

            <button
              className={activeSection === "performance" ? "active" : ""}
              onClick={() => handleClick("performance")}
            >
              <img src={performance} /> Performance Profile
            </button>
            <button
              className={activeSection === "award" ? "active" : ""}
              onClick={() => handleClick("award")}
            >
              <img src={star} /> Award Profile
            </button>
          </div>

          {/* profile picture update yash */}
          <div className="BasicProfile_avatar">
            {/* <img loading="lazy" src={(profileAvatar === undefined || profileAvatar === null) ?(`https://ui-avatars.com/api/?name=${basicFormData.firstName}+${basicFormData.lastName}`):(`https://api.ekalakaar.com/uploads/avatars/${profileAvatar}`)} /> */}
            <div className="profileImg">
              <img loading="lazy" src={defaultPic} />
              <div className="progressBar">25%</div>
            </div>
            <p style={{ fontWeight: "500", fontSize: "30px" }}>
              {" "}
              {basicFormData.firstName.toUpperCase()}{" "}
              {basicFormData.lastName.toUpperCase()}(eK ID: 12334)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#61C6FF" />
                <path
                  d="M14 26.7143L19.4935 32.2791C19.885 32.6757 20.5252 32.6757 20.9168 32.2791L36 17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <b></b>
            </p>
            <button
              onClick={handleButtonClick}
              className="BasicProfile_editavatar"
            >
              Upload/Edit Profile Picture
            </button>
            {/* <button onClick={handleRemoveAvatar} className="BasicProfile_removeavatar">Remove Avatar</button> */}
          </div>
        </div>

        {/* this is for basic  */}

        <div className="profile-right">
          {activeSection === "basic" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="BasicProfile_Infoform"
            >
              <form onSubmit={basicSubmitHandler}>
                <h4>BASIC PROFILE</h4>
                {/* //PERSONAL INFORMATIONAL */}
                <div className="BasicProfile_PersonalINfo">
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="firstName">
                      First Name <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      name="firstName"
                      value={basicFormData.firstName}
                      type="text"
                    ></input>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="lastName">
                      Last Name <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      value={basicFormData.lastName}
                      name="lastName"
                      type="text"
                    ></input>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="email">
                      Email Id <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      value={basicFormData.email}
                      name="email"
                      type="email"
                      readOnly
                      style={{ backgroundColor: " rgba(0, 0, 0, 0.15);" }}
                    />
                  </div>
                  {/* <div className="BasicProfile_inputfield">
                    <label htmlFor="phoneNumber">
                      Contact Number <span className="red">*</span>
                    </label>
                    <input
                      onChange={changeHandler}
                      name="phoneNumber"
                      value={basicFormData.phoneNumber}
                      placeholder="+91"
                      type="tel"
                    ></input>
                  </div> */}
                  <div className="BasicProfile_inputfield">
                    <label htmlFor="">
                      Contact Number <span className="red">*</span>
                    </label>
                    <div>
                      <select
                        onChange={changeHandler}
                        name="contactNumber.countryCode"
                        value={basicFormData?.contactNumber?.countryCode}
                        style={{
                          width: "15%",
                          marginRight: "4px",
                          paddingRight: "2px",
                        }}
                      >
                        <option value="+91">+91</option>
                        <option value="+355">+355</option>
                        <option value="+213">+213</option>
                        <option value="+376">+376</option>
                        <option value="+244">+244</option>
                        <option value="+1268">+1268</option>
                        <option value="+54">+54</option>
                        <option value="+374">+374</option>
                        <option value="+61">+61</option>
                        <option value="+43">+43</option>
                        <option value="+994">+994</option>
                        <option value="+1242">+1242</option>
                        <option value="+973">+973</option>
                        <option value="+880">+880</option>
                        <option value="+1246">+1246</option>
                        <option value="+375">+375</option>
                        <option value="+32">+32</option>
                        <option value="+501">+501</option>
                        <option value="+229">+229</option>
                        <option value="+975">+975</option>
                        <option value="+591">+591</option>
                        <option value="+387">+387</option>
                        <option value="+267">+267</option>
                        <option value="+55">+55</option>
                        <option value="+673">+673</option>
                        <option value="+359">+359</option>
                        <option value="+226">+226</option>
                        <option value="+257">+257</option>
                        <option value="+855">+855</option>
                        <option value="+237">+237</option>
                        <option value="+1">+1</option>
                        <option value="+238">+238</option>
                        <option value="+236">+236</option>
                        <option value="+235">+235</option>
                        <option value="+56">+56</option>
                        <option value="+86">+86</option>
                        <option value="+57">+57</option>
                        <option value="+269">+269</option>
                        <option value="+242">+242</option>
                        <option value="+506">+506</option>
                        <option value="+385">+385</option>
                        <option value="+53">+53</option>
                        <option value="+357">+357</option>
                        <option value="+420">+420</option>
                        <option value="+45">+45</option>
                        <option value="+253">+253</option>
                        <option value="+1767">+1767</option>
                        <option value="+1809">+1809</option>
                        <option value="+670">+670</option>
                        <option value="+593">+593</option>
                        <option value="+20">+20</option>
                        <option value="+503">+503</option>
                        <option value="+240">+240</option>
                        <option value="+291">+291</option>
                        <option value="+372">+372</option>
                        <option value="+251">+251</option>
                        <option value="+679">+679</option>
                        <option value="+358">+358</option>
                        <option value="+33">+33</option>
                        <option value="+241">+241</option>
                        <option value="+220">+220</option>
                        <option value="+995">+995</option>
                        <option value="+49">+49</option>
                        <option value="+233">+233</option>
                        <option value="+30">+30</option>
                        <option value="+1473">+1473</option>
                        <option value="+502">+502</option>
                        <option value="+224">+224</option>
                        <option value="+245">+245</option>
                        <option value="+592">+592</option>
                        <option value="+509">+509</option>
                        <option value="+504">+504</option>
                        <option value="+36">+36</option>
                        <option value="+354">+354</option>
                        <option value="+91">+91</option>
                        <option value="+62">+62</option>
                        <option value="+98">+98</option>
                        <option value="+964">+964</option>
                        <option value="+353">+353</option>
                        <option value="+972">+972</option>
                        <option value="+39">+39</option>
                        <option value="+225">+225</option>
                        <option value="+1876">+1876</option>
                        <option value="+81">+81</option>
                        <option value="+962">+962</option>
                        <option value="+7">+7</option>
                        <option value="+254">+254</option>
                        <option value="+686">+686</option>
                        <option value="+383">+383</option>
                        <option value="+965">+965</option>
                        <option value="+996">+996</option>
                        <option value="+856">+856</option>
                        <option value="+371">+371</option>
                        <option value="+961">+961</option>
                        <option value="+266">+266</option>
                        <option value="+231">+231</option>
                        <option value="+218">+218</option>
                        <option value="+423">+423</option>
                        <option value="+370">+370</option>
                        <option value="+352">+352</option>
                        <option value="+389">+389</option>
                        <option value="+261">+261</option>
                        <option value="+265">+265</option>
                        <option value="+60">+60</option>
                        <option value="+960">+960</option>
                        <option value="+223">+223</option>
                        <option value="+356">+356</option>
                        <option value="+692">+692</option>
                        <option value="+222">+222</option>
                        <option value="+230">+230</option>
                        <option value="+52">+52</option>
                        <option value="+691">+691</option>
                        <option value="+373">+373</option>
                        <option value="+377">+377</option>
                        <option value="+976">+976</option>
                        <option value="+382">+382</option>
                        <option value="+212">+212</option>
                        <option value="+258">+258</option>
                        <option value="+95">+95</option>
                        <option value="+264">+264</option>
                        <option value="+674">+674</option>
                        <option value="+977">+977</option>
                        <option value="+31">+31</option>
                        <option value="+64">+64</option>
                        <option value="+505">+505</option>
                        <option value="+227">+227</option>
                        <option value="+234">+234</option>
                        <option value="+850">+850</option>
                        <option value="+47">+47</option>
                        <option value="+968">+968</option>
                        <option value="+92">+92</option>
                        <option value="+680">+680</option>
                        <option value="+507">+507</option>
                        <option value="+675">+675</option>
                        <option value="+595">+595</option>
                        <option value="+51">+51</option>
                        <option value="+63">+63</option>
                        <option value="+48">+48</option>
                        <option value="+351">+351</option>
                        <option value="+974">+974</option>
                        <option value="+40">+40</option>
                        <option value="+7">+7</option>
                        <option value="+250">+250</option>
                        <option value="+1869">+1869</option>
                        <option value="+1758">+1758</option>
                        <option value="+1784">+1784</option>
                        <option value="+685">+685</option>
                        <option value="+378">+378</option>
                        <option value="+239">+239</option>
                        <option value="+966">+966</option>
                        <option value="+221">+221</option>
                        <option value="+381">+381</option>
                        <option value="+248">+248</option>
                        <option value="+232">+232</option>
                        <option value="+65">+65</option>
                        <option value="+421">+421</option>
                        <option value="+386">+386</option>
                        <option value="+677">+677</option>
                        <option value="+252">+252</option>
                        <option value="+27">+27</option>
                        <option value="+82">+82</option>
                        <option value="+211">+211</option>
                        <option value="+34">+34</option>
                        <option value="+94">+94</option>
                        <option value="+249">+249</option>
                        <option value="+597">+597</option>
                        <option value="+268">+268</option>
                        <option value="+46">+46</option>
                        <option value="+41">+41</option>
                        <option value="+963">+963</option>
                        <option value="+886">+886</option>
                        <option value="+992">+992</option>
                        <option value="+255">+255</option>
                        <option value="+66">+66</option>
                        <option value="+228">+228</option>
                        <option value="+676">+676</option>
                        <option value="+1868">+1868</option>
                        <option value="+216">+216</option>
                        <option value="+90">+90</option>
                        <option value="+993">+993</option>
                        <option value="+688">+688</option>
                        <option value="+256">+256</option>
                        <option value="+380">+380</option>
                        <option value="+971">+971</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                        <option value="+598">+598</option>
                        <option value="+998">+998</option>
                        <option value="+678">+678</option>
                        <option value="+379">+379</option>
                        <option value="+58">+58</option>
                        <option value="+84">+84</option>
                        <option value="+967">+967</option>
                        <option value="+260">+260</option>
                        <option value="+263">+263</option>
                      </select>
                      <input
                        name="contactNumber.number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onChange={changeHandler}
                        value={basicFormData?.contactNumber?.number}
                        placeholder="1234567890"
                        style={{ width: "83%" }}
                        required
                      />
                    </div>
                  </div>
                  <div
                    className="BasicProfile_inputfield"
                    style={{ width: "30%" }}
                  >
                    <label htmlFor="age">
                      Age <span className="red">*</span>
                    </label>
                    {/* <input
                      type="number"
                      name="age"
                      onChange={changeHandler}
                      value={basicFormData.age}
                      style={{ width: "100%" }}
                    ></input> */}
                    {/* <select
                      name="age"
                      onChange={changeHandler}
                      value={basicFormData.age}
                      style={{ width: "100%" }}
                      required
                    >
                      {Array.from({ length: 100 - 17 }, (_, index) => (
                        <option key={index} value={index + 18}>
                          {index + 18}
                        </option>
                      ))}
                    </select> */}
                    <select
                      name="age"
                      onChange={changeHandler}
                      value={basicFormData.age}
                      style={{ width: "100%" }}
                      required
                    >
                      {Array.from({ length: 96 }, (_, index) => (
                        <option key={index} value={index + 5}>
                          {index + 5}
                        </option>
                      ))}
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <div
                    className="BasicProfile_inputfield gender"
                    style={{ width: "30%" }}
                  >
                    <label>
                      Gender <span className="red">*</span>
                    </label>

                    {/* <div className="Genderinfo">
                  <label>
                    <input type="radio" name="gender" value="Male" checked={basicFormData.gender === "Male"} onChange={changeHandler} />
                    &nbsp; Male
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Female" checked={basicFormData.gender === "Female"} onChange={changeHandler} />
                    &nbsp; Female
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Others" checked={basicFormData.gender === "Others"} onChange={changeHandler} />
                    &nbsp; Others
                  </label>
                </div> */}

                    <div className="Genderinfo1">
                      <select
                        style={{
                          width: "100%",
                          fontFamily: "Poppins",
                          background: "transparent",
                          color: "black",
                          height: "60px",
                          border: "1px solid black",
                        }}
                        onChange={changeHandler}
                        value={basicFormData.gender}
                      >
                        <option selected hidden>
                          Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Any Other">Any Other</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="BasicProfile_inputfield"
                    style={{ width: "30%" }}
                  >
                    <label>
                      Language Known <span className="red">*</span>
                    </label>
                    {/* <select
                      onChange={changeHandler}
                      style={{
                        fontFamily: "Poppins",
                        background: "transparent",
                        color: "black",
                        height: "60px",
                        width: "100%",
                        border: "1px solid black",
                      }}
                      value={basicFormData?.language}
                      name=""
                      id=""
                    >
                      <option value="" selected defaultChecked>
                        You can select multiple languages
                      </option>
                      {languages.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </select> */}
                    <Select
                      defaultValue={languagesoptions}
                      value={languagesoptions}
                      isMulti
                      onChange={setlanguagesoptions}
                      options={languageoptions}
                    />
                  </div>
                  <div>
                    {/* <div> */}
                    <h4>ADDRESS</h4>
                    <div className="BasicProfile_Address">
                      <div className="BasicProfile_Addressshort">
                        <div
                          className="BasicProfile_inputfield"
                          style={{ width: "30%" }}
                        >
                          <label>
                            Pincode <span className="red">*</span>
                          </label>
                          <input
                            maxLength={6}
                            pattern="[0-9]{6}"
                            onChange={changeHandler}
                            value={basicFormData.address.pincode}
                            name="address.pincode"
                            type="number"
                            style={{ width: "100%" }}
                            required
                          ></input>
                        </div>
                        <div
                          className="BasicProfile_inputfield"
                          style={{ width: "30%" }}
                        >
                          <label>State</label>
                          <select
                            onChange={changeHandler}
                            name="address.state"
                            value={basicFormData.address.state}
                            style={{ width: "100%" }}
                          >
                            <option selected hidden>
                              Select State
                            </option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Andaman and Nicobar Islands">
                              Andaman and Nicobar Islands
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
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
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jammu and Kashmir">
                              Jammu and Kashmir
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
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
                        <div
                          className="BasicProfile_inputfield"
                          style={{ width: "30%" }}
                        >
                          <label>City</label>
                          <input
                            onChange={changeHandler}
                            name="address.city"
                            value={basicFormData.address.city}
                            type="text"
                            style={{ width: "100%" }}
                          ></input>
                        </div>
                      </div>

                      {/* <div className="BasicProfile_inputfield BasicProfile_Addresslong">
                <label>Detailed Address</label>
                <textarea style={{width:"100%" , height:"150px" , resize:"none" , borderRadius:"10px" , padding:"10px"}} onChange={changeHandler} name="address.details" value={basicFormData.address.details} type="text" />
              </div> */}
                    </div>
                    {/* </div> */}
                    {/* </div> */}

                    <div className="BasicProfile_OtherDetails">
                      {/* <div className="BasicProfile_inputfield">
                <label>No of Performance Last Year</label>
                <input onChange={changeHandler} name="numOfperformanceLastYear" placeholder="Enter no of performance" value={basicFormData.numOfperformanceLastYear} type="text"></input>
              </div> */}
                      <div className="BasicProfile_inputfield">
                        <label>Social Category </label>
                        <select
                          onChange={changeHandler}
                          name="socialCategory"
                          value={basicFormData.socialCategory}
                        >
                          <option selected hidden>
                            Select socialCategory
                          </option>
                          <option value="General">General</option>
                          <option value="OBC">
                            OBC (Other Backward Classes)
                          </option>
                          <option value="SC">SC (Scheduled Caste)</option>
                          <option value="ST">ST (Scheduled Tribe)</option>
                          <option value="Any Other">Any Other</option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Person With Disability (PwD)</label>
                        <select
                          onChange={changeHandler}
                          name="pwd"
                          value={basicFormData.pwd}
                        >
                          <option selected hidden>
                            Select
                          </option>
                          <option value="No">No</option>
                          {disabilitiesArray.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>{" "}
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Primary Source Of Income</label>
                        <select
                          onChange={changeHandler}
                          name="incomeSrc"
                          value={basicFormData.incomeSrc}
                        >
                          <option selected hidden>
                            Select income Source
                          </option>
                          {categories.map((option) => (
                            <option value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="BasicProfile_inputfield">
                        <label>Annual Income from Performing Art (INR)</label>
                        <select
                          onChange={changeHandler}
                          name="anunalIncomeByPerf"
                          value={basicFormData.anunalIncomeByPerf}
                        >
                          <option selected hidden>
                            Select Income
                          </option>
                          <option value="<5000">below ₹5,000</option>
                          <option value="5000-10000">₹5,000 - ₹10,000</option>
                          <option value="10000-20000">₹10,000 - ₹20,000</option>
                          <option value="20000-50000">₹20,000 - ₹50,000</option>
                          <option value="50000-100000">
                            ₹50,000 - ₹100,000
                          </option>
                          <option value="100000-250000">
                            ₹100,000 - ₹250,000
                          </option>
                          <option value="250000-500000">
                            ₹250,000 - ₹500,000
                          </option>
                          <option value=">500000">above ₹500,000</option>
                        </select>
                      </div>

                      <div className="BasicProfile_inputfield">
                        <label>Identity Proof</label>
                        <select
                          onChange={changeHandler}
                          name="idProof.name"
                          value={basicFormData.idProof.name}
                        >
                          <option selected hidden>
                            Select ID Proof
                          </option>
                          <option value="Aadhar Card">Aadhar Card</option>
                          <option value="Bank Statement">Bank Statement</option>
                          <option value="Birth Certificate">
                            Birth Certificate
                          </option>
                          <option value="Driver's License">
                            Driver's License
                          </option>
                          <option value="National ID Card">
                            National ID Card
                          </option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Passport">Passport</option>
                          <option value="Social Security Card">
                            Social Security Card
                          </option>
                        </select>
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>ID Proof No</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.idProof.num}
                          placeholder="Enter Id Num"
                          name="idProof.num"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Pan Card</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.panNumber}
                          placeholder="Enter Pan Number"
                          name="panNumber"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>Valid Passport</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.passportNumber}
                          placeholder="No/MM-YYYY"
                          name="passportNumber"
                          type="text"
                        />
                      </div>
                      <div className="BasicProfile_inputfield">
                        <label>UPI Id (Optional)</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.upiId}
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="text"
                        />
                      </div>
                      {/* <div className="BasicProfile_inputfield"> */}
                      {/* <label>Upload Profile (If Any)</label>
                        <input
                          style={{ display: "none" }}
                          onChange={changeHandler}
                          id="fileID"
                          placeholder="Enter UPI Id"
                          name="upiId"
                          type="file"
                        />
                        <div className="input">
                          <label id="upload" htmlFor="fileID">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                fill="black"
                                fill-opacity="0.54"
                              />
                            </svg>
                          </label>
                        </div> */}
                      {/* </div> */}
                      <div className="BasicProfile_inputfield">
                        <label>GSI IN</label>
                        <input
                          onChange={changeHandler}
                          value={basicFormData.gstIn}
                          placeholder="Enter GST IN"
                          name="gstIn"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>SOCIAL Media</h4>
                  <div className="BasicProfile_Social">
                    <div className="BasicProfile_inputfield">
                      <label>Instagram</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.instagram}
                        name="handles.instagram"
                        type="text"
                      ></input>
                      <img src={Instagram} alt="Instagram" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Facebook</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.facebook}
                        name="handles.facebook"
                        type="text"
                      ></input>
                      <img src={Facebook} alt="Facebook" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Youtube</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.youtube}
                        name="handles.youtube"
                        type="text"
                      ></input>
                      <img src={YouTube} alt="Youtube" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>LinkedIn</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.linkedIn}
                        name="handles.linkedIn"
                        type="text"
                      ></input>
                      <img src={LinkedIn} alt="LinkedIn" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>Website</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.website}
                        name="handles.website"
                        type="text"
                      ></input>
                      <img src={Globe} alt="Globe" />
                    </div>
                    <div className="BasicProfile_inputfield">
                      <label>X</label>
                      <input
                        onChange={changeHandler}
                        value={basicFormData?.handles?.twitter}
                        name="handles.twitter"
                        type="text"
                      ></input>
                      <img src={TwitterX} alt="TwitterX" />
                    </div>
                  </div>

                  <div style={{ width: "100%", marginTop: "20px" }}>
                    <label htmlFor="about">About My Journey</label>
                    <textarea
                      name="about"
                      value={basicFormData.about}
                      onChange={changeHandler}
                      style={{
                        width: "100%",
                        border: "2px solid rgb(0,0,0,0.5)",
                        padding: "10px",
                        borderRadius: "10px",
                        resize: "none",
                        height: "166px",
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="updateBtn">
                  Update
                </button>
              </form>
            </div>
          )}

          {/* this is for art profile */}
          {activeSection === "art" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="ArtProfile_Infoform"
            >
              <form onSubmit={artSubmitHandler}>
                <h4>ART INFORMATION</h4>
                <div className="ArtProfile_ArtInfo">
                  <div className="ArtProfile_inputfield">
                    <label>
                      Category of Art <span className="red">*</span>
                    </label>

                    <select
                      name="artCategory"
                      placeholder="Select nature of art"
                      onChange={artChangesHandler}
                      defaultValue={artInfoFormData.artCategory[0]}
                    >
                      <option selected hidden>
                        Select nature of art
                      </option>
                      {artInfo1.map((option, index) => (
                        <option key={index} value={option.art}>
                          {option.art}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ArtProfile_inputfield">
                    <label>
                      Name Of Art <span className="red">*</span>
                    </label>
                    <select
                      placeholder="Select art forms"
                      name="artName"
                      defaultValue={artInfoFormData.artName[0]}
                      onChange={artChangesHandler}
                    >
                      <option selected hidden>
                        Select art form
                      </option>
                      {art.map((option, index) => (
                        <option key={index} value={option.type}>
                          {option.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="ArtProfile_inputfield">
                    <label>Type of Art</label>
                    <select
                      onChange={artChangesHandler}
                      name="artType"
                      placeholder="Select name of the art "
                      value={artInfoFormData.artType[0]}
                    >
                      <option value={""} disabled>
                        Select name of the art
                      </option>
                      {artTypeData.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ArtProfile_inputfield">
                    <label>Art Education</label>
                    <select
                      onChange={artChangesHandler}
                      name="artEducation"
                      placeholder="Select name of the art "
                      value={artInfoFormData.artEducation}
                    >
                      <option value={""} disabled>
                        Select performance type
                      </option>
                      {performancetype.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <div className="ArtProfile_inputfield">
                <label>Genre</label>
                <input onChange={artChangeHandler} value={artFormData.genre} name="genre" type="text"></input>
              </div>
              <div className="ArtProfile_inputfield">
                <label>Performance Type</label>
                <select onChange={artChangeHandler} value={artFormData.performanceType} name="performanceType">
                  <option selected hidden>
                    Select type
                  </option>
                </select>
              </div> */}
                </div>
                <h4>Professional Art Education </h4>

                <table className="performance_table">
                  <thead>
                    <tr>
                      <th> Name of Course </th>
                      <th> Specialisation</th>
                      <th> Name of Institute </th>
                      <th> Duration (Month)</th>
                      <th> Year of Completion </th>
                      <th>Upload Document </th>
                    </tr>
                  </thead>
                  <tbody>
                    {professionalTable.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.keys(row).map((key, colIndex) => (
                          <td key={colIndex}>
                            <input
                              type="text"
                              value={row[key]}
                              // defaultValue={awardData.highlight}
                              onChange={(e) =>
                                handleArtProfileChanges(e, rowIndex, key)
                              }
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h4>Traditional Art Education </h4>
                <div className="ArtProfile_Traditional">
                  <table className="performance_table">
                    <thead>
                      <tr>
                        <th> Name of Art </th>
                        <th> Name of Guru</th>
                        <th> Location </th>
                        <th> Duration (Month)</th>
                        <th> Year of Completion </th>
                        <th>Upload Document </th>
                      </tr>
                    </thead>
                    <tbody>
                      {traditionalTable.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {Object.keys(row).map((key, colIndex) => (
                            <td key={colIndex}>
                              <input
                                type="text"
                                value={row[key]}
                                // defaultValue={awardData.highlight}
                                onChange={(e) =>
                                  handleTraditional(e, rowIndex, key)
                                }
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ width: "100%", marginTop: "20px" }}>
                  <label htmlFor="aboutArt">About The Art</label>
                  <textarea
                    name="aboutArt"
                    onChange={artChangesHandler}
                    value={artInfoFormData.aboutArt}
                    style={{
                      width: "100%",
                      border: "2px solid rgb(0,0,0,0.5)",
                      padding: "10px",
                      borderRadius: "10px",
                      resize: "none",
                      height: "166px",
                    }}
                  />
                </div>

                {artProfile.professional.map((professional, index) => (
                  <React.Fragment key={index}>
                    <h4>Professional Art Education +</h4>

                    {index === artProfile.professional.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Guru</label>
                            <input
                              value={professional.NameOfGuru}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Location</label>
                            <input
                              value={professional.Location}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Location",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={professional.Duration}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Art
                              </option>
                              <option>1</option>
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={professional.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              value={professional.Document}
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addProfessional}
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
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Guru</label>
                            <input
                              value={professional.NameOfGuru}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Location</label>
                            <input
                              value={professional.Location}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Location",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={professional.Duration}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={professional.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              value={professional.Document}
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastProfessional}
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
                    )}
                  </React.Fragment>
                ))}

                {
                  //comment
                }
                {awardFormData.awards.map((award, index) => (
                  <React.Fragment key={index}>
                    <h4>Traditional Art Education +</h4>

                    {index === awardFormData.awards.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Specialisation </label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addProfessional}
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
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Specialisation</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>

                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="BasicProfile_inputfield">
                            <label>Upload Document</label>
                            <input
                              style={{ display: "none" }}
                              onChange={changeHandler}
                              id="fileID"
                              placeholder="Enter UPI Id"
                              name="upiId"
                              type="file"
                            />
                            <div className="input">
                              <label id="upload" htmlFor="fileID">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                                    fill="black"
                                    fill-opacity="0.54"
                                  />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastProfessional}
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
                    )}
                  </React.Fragment>
                ))}

                <button type="submit" className="updateBtn">
                  Update
                </button>
              </form>
            </div>
          )}

          {/* this is for performance */}
          {activeSection === "performance" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="PerformanceProfile_Infoform"
            >
              <form onSubmit={perforSubmitHandler}>
                <h4>PERFORMANCE INFORMATION</h4>

                <div className="PerformanceProfile_PerformInfo">
                  {/* <div className="PerformanceProfile_inputfield">
                <label>Performance Type</label>
                <select name="performanceType" onChange={perforChangeHandler} value={performanceFormData?.performanceType} >
                  <option  disabled value={""} >
                    Select Type
                  </option>
                  {performancetype.map((option , index) => (
          <option key={index}  value={option}>
            {option}
          </option>
        ))}
                </select>
              </div> */}
                  <div className="BasicProfile_inputfield">
                    <label>Affiliated To Any Group/Organization</label>
                    <select
                      onChange={perforChangeHandler}
                      name={"affiliatedToAnyGroup"}
                      value={performanceFormData.affiliatedToAnyGroup}
                    >
                      <option selected>Select</option>

                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Name Of Artist Group/Organisation </label>
                    <input
                      onChange={(e) =>
                        setPerformanceFormData({
                          ...performanceFormData,
                          nameOfArtistGroupOrg: e.target.value,
                        })
                      }
                      name="nameOfArtistGroupOrg"
                      value={performanceFormData.nameOfArtistGroupOrg}
                    ></input>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Location of Group/Organization</label>
                    <select
                      onChange={perforChangeHandler}
                      name="locationOfGroupOrg"
                      value={performanceFormData.locationOfGroupOrg}
                    >
                      <option selected>Select</option>
                      {MajorIndianCities.map((i, index) => {
                        return (
                          <option key={index} value={i.city}>
                            {i.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="PerformanceProfile_inputfield">
                    <label htmlFor="">
                      Contact Number <span className="red">*</span>
                    </label>
                    <div>
                      <select
                        onChange={changeHandler}
                        name="contactNumber.countryCode"
                        value={basicFormData?.contactNumber?.countryCode}
                        style={{
                          width: "15%",
                          marginRight: "4px",
                          paddingRight: "2px",
                        }}
                      >
                        <option value="+91">+91</option>
                        <option value="+355">+355</option>
                        <option value="+213">+213</option>
                        <option value="+376">+376</option>
                        <option value="+244">+244</option>
                        <option value="+1268">+1268</option>
                        <option value="+54">+54</option>
                        <option value="+374">+374</option>
                        <option value="+61">+61</option>
                        <option value="+43">+43</option>
                        <option value="+994">+994</option>
                        <option value="+1242">+1242</option>
                        <option value="+973">+973</option>
                        <option value="+880">+880</option>
                        <option value="+1246">+1246</option>
                        <option value="+375">+375</option>
                        <option value="+32">+32</option>
                        <option value="+501">+501</option>
                        <option value="+229">+229</option>
                        <option value="+975">+975</option>
                        <option value="+591">+591</option>
                        <option value="+387">+387</option>
                        <option value="+267">+267</option>
                        <option value="+55">+55</option>
                        <option value="+673">+673</option>
                        <option value="+359">+359</option>
                        <option value="+226">+226</option>
                        <option value="+257">+257</option>
                        <option value="+855">+855</option>
                        <option value="+237">+237</option>
                        <option value="+1">+1</option>
                        <option value="+238">+238</option>
                        <option value="+236">+236</option>
                        <option value="+235">+235</option>
                        <option value="+56">+56</option>
                        <option value="+86">+86</option>
                        <option value="+57">+57</option>
                        <option value="+269">+269</option>
                        <option value="+242">+242</option>
                        <option value="+506">+506</option>
                        <option value="+385">+385</option>
                        <option value="+53">+53</option>
                        <option value="+357">+357</option>
                        <option value="+420">+420</option>
                        <option value="+45">+45</option>
                        <option value="+253">+253</option>
                        <option value="+1767">+1767</option>
                        <option value="+1809">+1809</option>
                        <option value="+670">+670</option>
                        <option value="+593">+593</option>
                        <option value="+20">+20</option>
                        <option value="+503">+503</option>
                        <option value="+240">+240</option>
                        <option value="+291">+291</option>
                        <option value="+372">+372</option>
                        <option value="+251">+251</option>
                        <option value="+679">+679</option>
                        <option value="+358">+358</option>
                        <option value="+33">+33</option>
                        <option value="+241">+241</option>
                        <option value="+220">+220</option>
                        <option value="+995">+995</option>
                        <option value="+49">+49</option>
                        <option value="+233">+233</option>
                        <option value="+30">+30</option>
                        <option value="+1473">+1473</option>
                        <option value="+502">+502</option>
                        <option value="+224">+224</option>
                        <option value="+245">+245</option>
                        <option value="+592">+592</option>
                        <option value="+509">+509</option>
                        <option value="+504">+504</option>
                        <option value="+36">+36</option>
                        <option value="+354">+354</option>
                        <option value="+91">+91</option>
                        <option value="+62">+62</option>
                        <option value="+98">+98</option>
                        <option value="+964">+964</option>
                        <option value="+353">+353</option>
                        <option value="+972">+972</option>
                        <option value="+39">+39</option>
                        <option value="+225">+225</option>
                        <option value="+1876">+1876</option>
                        <option value="+81">+81</option>
                        <option value="+962">+962</option>
                        <option value="+7">+7</option>
                        <option value="+254">+254</option>
                        <option value="+686">+686</option>
                        <option value="+383">+383</option>
                        <option value="+965">+965</option>
                        <option value="+996">+996</option>
                        <option value="+856">+856</option>
                        <option value="+371">+371</option>
                        <option value="+961">+961</option>
                        <option value="+266">+266</option>
                        <option value="+231">+231</option>
                        <option value="+218">+218</option>
                        <option value="+423">+423</option>
                        <option value="+370">+370</option>
                        <option value="+352">+352</option>
                        <option value="+389">+389</option>
                        <option value="+261">+261</option>
                        <option value="+265">+265</option>
                        <option value="+60">+60</option>
                        <option value="+960">+960</option>
                        <option value="+223">+223</option>
                        <option value="+356">+356</option>
                        <option value="+692">+692</option>
                        <option value="+222">+222</option>
                        <option value="+230">+230</option>
                        <option value="+52">+52</option>
                        <option value="+691">+691</option>
                        <option value="+373">+373</option>
                        <option value="+377">+377</option>
                        <option value="+976">+976</option>
                        <option value="+382">+382</option>
                        <option value="+212">+212</option>
                        <option value="+258">+258</option>
                        <option value="+95">+95</option>
                        <option value="+264">+264</option>
                        <option value="+674">+674</option>
                        <option value="+977">+977</option>
                        <option value="+31">+31</option>
                        <option value="+64">+64</option>
                        <option value="+505">+505</option>
                        <option value="+227">+227</option>
                        <option value="+234">+234</option>
                        <option value="+850">+850</option>
                        <option value="+47">+47</option>
                        <option value="+968">+968</option>
                        <option value="+92">+92</option>
                        <option value="+680">+680</option>
                        <option value="+507">+507</option>
                        <option value="+675">+675</option>
                        <option value="+595">+595</option>
                        <option value="+51">+51</option>
                        <option value="+63">+63</option>
                        <option value="+48">+48</option>
                        <option value="+351">+351</option>
                        <option value="+974">+974</option>
                        <option value="+40">+40</option>
                        <option value="+7">+7</option>
                        <option value="+250">+250</option>
                        <option value="+1869">+1869</option>
                        <option value="+1758">+1758</option>
                        <option value="+1784">+1784</option>
                        <option value="+685">+685</option>
                        <option value="+378">+378</option>
                        <option value="+239">+239</option>
                        <option value="+966">+966</option>
                        <option value="+221">+221</option>
                        <option value="+381">+381</option>
                        <option value="+248">+248</option>
                        <option value="+232">+232</option>
                        <option value="+65">+65</option>
                        <option value="+421">+421</option>
                        <option value="+386">+386</option>
                        <option value="+677">+677</option>
                        <option value="+252">+252</option>
                        <option value="+27">+27</option>
                        <option value="+82">+82</option>
                        <option value="+211">+211</option>
                        <option value="+34">+34</option>
                        <option value="+94">+94</option>
                        <option value="+249">+249</option>
                        <option value="+597">+597</option>
                        <option value="+268">+268</option>
                        <option value="+46">+46</option>
                        <option value="+41">+41</option>
                        <option value="+963">+963</option>
                        <option value="+886">+886</option>
                        <option value="+992">+992</option>
                        <option value="+255">+255</option>
                        <option value="+66">+66</option>
                        <option value="+228">+228</option>
                        <option value="+676">+676</option>
                        <option value="+1868">+1868</option>
                        <option value="+216">+216</option>
                        <option value="+90">+90</option>
                        <option value="+993">+993</option>
                        <option value="+688">+688</option>
                        <option value="+256">+256</option>
                        <option value="+380">+380</option>
                        <option value="+971">+971</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                        <option value="+598">+598</option>
                        <option value="+998">+998</option>
                        <option value="+678">+678</option>
                        <option value="+379">+379</option>
                        <option value="+58">+58</option>
                        <option value="+84">+84</option>
                        <option value="+967">+967</option>
                        <option value="+260">+260</option>
                        <option value="+263">+263</option>
                      </select>
                      <input
                        name="contactNumber.number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onChange={changeHandler}
                        value={basicFormData?.contactNumber?.number}
                        placeholder="1234567890"
                        style={{ width: "83%" }}
                        required
                      />
                    </div>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Type Of Performance (Solo,Group,Both)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="typeOfPerformance"
                      value={performanceFormData.typeOfPerformance}
                    >
                      <option selected>Select</option>
                      <option value="solo">Solo</option>
                      <option value="group">Group</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Highest Level Of Performance</label>
                    <select
                      onChange={perforChangeHandler}
                      name="highestLevelOfPerformance"
                      value={performanceFormData.highestLevelOfPerformance}
                    >
                      <option selected>Select</option>
                      <option value="International">International</option>
                      <option value="National">National</option>
                      <option value="State">State</option>
                      <option value="District">District</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>
                      Total Number Of Performance <span className="red">*</span>
                    </label>
                    {/* <select
                      onChange={perforChangeHandler}
                      name="totalPerfs"
                      value={performanceFormData.totalPerfs}
                    >
                      <option selected>Select</option>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 
                      ].map((item, index) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select> */}
                    <select
                      onChange={perforChangeHandler}
                      name="totalPerfs"
                      value={performanceFormData.totalPerfs}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {[...Array(250).keys()].map((item, index) => (
                        <option key={item} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                      <option value="250+">250+</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>
                      No Of Years Of Experience <span className="red">*</span>{" "}
                    </label>
                    <select
                      onChange={perforChangeHandler}
                      name="experience"
                      value={performanceFormData.experience}
                    >
                      <option disabled>Select</option>
                      {[...Array(100).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Average Duration Of Performance (India)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfDurationIn"
                      value={performanceFormData.avgPerfDurationIn}
                    >
                      <option selected>Select</option>
                      <option value="<10min">&lt; 10 Minutes</option>
                      <option value="10min">10 Minutes</option>
                      <option value="10-30min">10-30 Minutes</option>
                      <option value="30-60min">30-60 Minutes</option>
                      <option value="60-120min">60-120 Minutes</option>
                      <option value=">120min">&gt; 120 Minutes</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Average Fee Per Performance (India) </label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfFeeIn"
                      value={performanceFormData.avgPerfFeeIn}
                    >
                      <option selected>Select</option>
                      <option value="<5000">&lt; Rs 5000</option>
                      <option value="5000-10000">Rs 5000 - Rs 10000</option>
                      <option value="10000-20000">Rs 10000 - Rs 20000</option>
                      <option value="20000-50000">Rs 20000 - Rs 50000</option>
                      <option value="50000-100000">Rs 50000 - Rs 100000</option>
                      <option value=">100000">&gt; Rs 100000</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>
                      Average Duration Of Performance (International)
                    </label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfDurationInternational"
                      value={performanceFormData.avgPerfDurationInternational}
                    >
                      <option selected>Select</option>
                      <option value="<30min">&lt; 30 Minutes</option>
                      <option value="30-60min">30-60 Minutes+K33</option>
                      <option value="60-120min">60-120 Minutes</option>
                      <option value=">120min">&gt; 120 Minutes</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Average Fee Per Performance (International)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="avgPerfFeeInternational"
                      value={performanceFormData.avgPerfFeeInternational}
                    >
                      <option selected>Select</option>
                      <option value="<25000">&lt; Rs 25000</option>
                      <option value="25000-50000">Rs 25000 - Rs 50000</option>
                      <option value="50000-100000">Rs 50000 - Rs 100000</option>
                      <option value="100000-250000">
                        Rs 100000 - Rs 250000
                      </option>
                      <option value=">250000">&gt; Rs 250000</option>
                    </select>
                  </div>

                  <div className="BasicProfile_inputfield">
                    <label>Major Performance Cities (India)</label>
                    <select
                      onChange={perforChangeHandler}
                      name="majorPerfCityIndia"
                      value={performanceFormData.majorPerfCityIndia}
                    >
                      <option selected>Select</option>
                      {MajorIndianCities.map((i, index) => {
                        return (
                          <option key={index} value={i.city}>
                            {i.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Major Countries for Performance International</label>
                    <select
                      onChange={perforChangeHandler}
                      name="majorPerfCountryInternational"
                      value={performanceFormData.majorPerfCountryInternational}
                    >
                      <option selected>Select</option>
                      {MajorInternationalCities.map((i, index) => {
                        return (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="ArtProfile_Traditional">
                    <label>Major Performances/ Events (max. 5)</label>
                    <table className="performance_table">
                      <thead>
                        <tr>
                          <th>Name of Event</th>
                          <th>Month-Year</th>
                          <th>Level</th>
                          <th>Location</th>
                          <th>Partner/Organizer</th>
                          <th>Media Links</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {Object.keys(row).map((key, colIndex) => (
                              <td key={colIndex}>
                                <input
                                  type="text"
                                  value={row[key]}
                                  defaultValue={
                                    performanceFormData.highestLevelOfPerformance
                                  }
                                  onChange={(e) =>
                                    handlePerformanceTableChange(
                                      e,
                                      rowIndex,
                                      key
                                    )
                                  }
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="BasicProfile_inputfield position-relative">
                    <label
                      htmlFor="performanceImages"
                      className="custom-file-input"
                    >
                      Performance Photograph(Max. 5)
                    </label>
                    <input
                      style={{ color: "white" }}
                      // onChange={handelMultipleImages}
                      type="file"
                      accept="image/*"
                      multiple
                      name="performanceImages"
                    />
                    <svg
                      className="position-absolute bottom-0 end-0 mb-2 mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                        fill="black"
                        fill-opacity="0.54"
                      />
                    </svg>
                    {/* <div className="input position-absolute bottom-0">
                      
                    </div> */}
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Performance Video(Max. 3)</label>
                    <input
                      style={{ display: "none" }}
                      onChange={perforChangeHandler}
                      id="fileID"
                      placeholder="Enter UPI Id"
                      name="upiId"
                      type="file"
                    />
                    <div className="input">
                      <label id="upload" htmlFor="fileID">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M16 6V17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5V15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5V6H9.5V15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5V6H16Z"
                            fill="black"
                            fill-opacity="0.54"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  {/* <div className="PerformanceProfile_inputfield">
                <label>Income for Performing Art*</label>
                <select value={performanceFormData.averagePerformanceIncome} onChange={perforChangeHandler} name="averagePerformanceIncome">
                  <option selected >
                    Select average income
                  </option>
                  {ChargesPerPerformance.map((option) => (
          <option  value={option}>
            {option}
          </option>
        ))}
                </select>
              </div> */}
                  <div style={{ width: "100%", marginTop: "20px" }}>
                    <label htmlFor="aboutJourney">
                      Highlights of your performance
                    </label>
                    <textarea
                      name="aboutJourney"
                      value={performanceFormData.aboutJourney}
                      onChange={(e) =>
                        setPerformanceFormData({
                          ...performanceFormData,
                          aboutJourney: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        border: "2px solid rgb(0,0,0,0.5)",
                        padding: "10px",
                        borderRadius: "10px",
                        resize: "none",
                        height: "166px",
                      }}
                    />
                  </div>
                </div>
                <button className="updateBtn">Update</button>
              </form>
            </div>
          )}

          {/* this is for award  */}
          {activeSection === "award" && (
            <div
              style={{ fontFamily: "Poppins" }}
              className="AwardProfile_Infoform"
            >
              <form onSubmit={awardSubmitHandler}>
                <h4>AWARDS</h4>
                <div className="AwardProfile_AwardInfo">
                  <div className="BasicProfile_inputfield">
                    <label>Total Number of Awards</label>
                    {/* <select
                      onChange={awardHandle}
                      name="totalAwards"
                      value={awardData.totalAwards}
                    >
                      <option selected hidden>
                        Select
                      </option>
                      <option value="5">1-5</option>
                      <option value="10">5-10</option>
                      <option value="15">10-15</option>
                      <option value="20">15-20</option>
                      <option value="more">More</option>
                    </select> */}
                    <select
                      onChange={awardHandle}
                      name="award.name"
                      value={awardData.award}
                    >
                      <option value="" hidden>
                        Total Number of Awards
                      </option>
                      {[...Array(199).keys()].map((item) => {
                        const value = item + 1; // Adding 1 to start from 1 instead of 0
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        );
                      })}
                      <option value="200">200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <div className="BasicProfile_inputfield">
                    <label>Highest Level of Awards </label>
                    <select
                      onChange={awardHandle}
                      name="level"
                      value={awardData.level}
                    >
                      <option selected hidden>
                        Highest Level of Awards
                      </option>
                      <option value="International">International</option>
                      <option value="National">National</option>
                      <option value="State">State</option>
                      <option value="District">District</option>
                      <option value="Taluka">Taluka</option>
                      <option value="Local">Local</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <h4>List Of Top Awards +</h4>
                  <div className="ArtProfile_Traditional">
                    <table className="performance_table">
                      <thead>
                        <tr>
                          <th> Name Of The Award </th>
                          <th> Awarding Body</th>
                          <th> Level </th>
                          <th> Location</th>
                          <th> Year </th>
                          <th>Upload Document </th>
                        </tr>
                      </thead>
                      <tbody>
                        {awardsTable.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {Object.keys(row).map((key, colIndex) => (
                              <td key={colIndex}>
                                <input
                                  type="text"
                                  value={row[key]}
                                  defaultValue={awardData?.awardsDetails}
                                  onChange={(e) =>
                                    handleAwardTable(e, rowIndex, key)
                                  }
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div style={{ width: "100%", marginTop: "20px" }}>
                  <label htmlFor="aboutJourney">
                    Highlights of Awards (if any)
                  </label>
                  <textarea
                    onChange={awardHandle}
                    value={awardData.highlights}
                    name="highlights"
                    style={{
                      width: "100%",
                      border: "2px solid rgb(0,0,0,0.5)",
                      padding: "10px",
                      borderRadius: "10px",
                      resize: "none",
                      height: "166px",
                    }}
                  />
                </div>

                {awardFormData.awards.map((award, index) => (
                  <React.Fragment key={index}>
                    {index === awardFormData.awards.length - 1 ? (
                      // last index => add plus button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Name of Course</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "Institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name of Art</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Art
                              </option>
                              {nameofart.map((option) => (
                                <option value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          {/* <div className="AwardProfile_inputfield">
                        <label>Name of the Stage</label>
                        <input value={award.stage} onChange={(e) => handleInputChange(index, "stage", e.target.value)} type="text"></input>
                      </div> */}
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Given By</label>
                            <input
                              value={award.givenBy}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "givenBy",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Add More Awards Details</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={addNewAward}
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
                    ) : (
                      // not last index => add - button
                      <>
                        <div className="AwardProfile_Awarddetials">
                          <div className="AwardProfile_inputfield">
                            <label>Award Name</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "title",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Name Of Institute</label>
                            <input
                              value={award.title}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "institute",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Duration (Month)</label>
                            <select
                              value={award.category}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "category",
                                  e.target.value
                                )
                              }
                            >
                              <option selected hidden>
                                Select Duration (Month)
                              </option>
                            </select>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Year of Completion</label>
                            <input
                              value={award.stage}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "stage",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Award Year</label>
                            <input
                              value={award.year}
                              onChange={(e) =>
                                handleInputChange(index, "year", e.target.value)
                              }
                              type="text"
                            ></input>
                          </div>
                          <div className="AwardProfile_inputfield">
                            <label>Given By</label>
                            <input
                              value={award.givenBy}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "givenBy",
                                  e.target.value
                                )
                              }
                              type="text"
                            ></input>
                          </div>
                        </div>

                        <div className="AwardProfile_Addmorebtn">
                          <p>Remove</p>
                          <button type="button">
                            {" "}
                            <svg
                              onClick={removeLastAward}
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
                    )}
                  </React.Fragment>
                ))}

                <button className="updateBtn">Update</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
