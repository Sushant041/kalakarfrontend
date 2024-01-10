import React, { useState } from "react";
import "./UploadOpportunities.css";
// import Patron_Navbar from "../Patron_Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";
// import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
// import { patronProfilePoints } from "../../../services/apis";
import { useNavigate } from "react-router-dom";
import { makeAuthenticatedPOSTRequest } from "../../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function UploadOpportunities() {
  // const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({});
  const [uploadTab, setUploadTab] = useState(1);
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken")

  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      // if (e.target.name === "languages" || e.target.name === "incentives") {
      //   const array = e.target.value.split(/\s*,\s*/);
      //   return { ...prevState, [e.target.name]: array };
      // }

      if (e.target.name === "start" || e.target.name === "end") {
        const applicationPeriod = {
          [e.target.name]: e.target.value,
        };

        return {
          ...prevState,
          applicationPeriod: {
            ...prevState.applicationPeriod,
            ...applicationPeriod,
          },
        };
      }

      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      contactPersonName: "william",
      contactEmail: "william@gmail.com",
      contactPersonNumber: "1234567890",
    });

    console.log(formData);
    const toastId = toast.loading("Loading...");
    
    toast.success("hello world")
    try {
      const response = await makeAuthenticatedPOSTRequest(`${BASE_URL}/admin/postopps`, formData, token);
       console.log(response.status);
      if (response.status === 201) {

        toast.success("Successfully uploaded");

        // Clear date inputs
        setFormData((prevState) => ({
          ...prevState,
          applicationPeriod: {
            start: "",
            end: "",
          },
        }));

        // Clear other inputs (you may want to clear other fields as well)
        setFormData((prevState) => ({
          ...prevState,
          artNature: "",
          location: "",
          description: "",
          // Clear other fields here
        }));

        // navigate("/UploadedOpps");
      } else {
        console.log(response);
        toast.error("Please provide all the required fields");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
     toast.dismiss(toastId);
  };

  let allLanguages = [
    "Assamese",
    "Bengali",
    "Bhili",
    "Bhojpuri",
    "Dogri",
    "Garhwali",
    "Gujarati",
    "Haryanvi",
    "Hindi",
    "Kannada",
    "Kashmiri",
    "Khasi",
    "Kokborok",
    "Konkani",
    "Kumaoni",
    "Maithili",
    "Malayalam",
    "Manipuri",
    "Marathi",
    "Mizo (Lushai)",
    "Nepali",
    "Odia",
    "Punjabi",
    "Rajasthani",
    "Santali",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Tulu",
    "Urdu",
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Chinese (Simplified)",
    "Japanese",
    "Korean",
    "Russian",
  ];

  const purposeOfPerformance = [
    "Annual / Foundation Day",
    "Conference/ Workshop/ Training",
    "Employee Engagement",
    "Family functions",
    "National/ State Day Celebration",
    "Office Functions",
    "Performance for hotel guests",
    "Product Launch",
    "Special Day – Marriage, Anniversary",
    "Special Events",
    "Any other",
  ];

  const ArtNames = [
    "Bharatanatyam",
    "Bihu",
    "Chhau",
    "Dandiya Raas",
    "Dollu Kunitha",
    "Dumhal",
    "Garba",
    "Gaur Dance",
    "Giddha",
    "Gotipua",
    "Jhumar",
    "Kacchi Ghodi",
    "Kalbelia",
    "Karakattam",
    "Kathak",
    "Kathakali",
    "Kathakar",
    "Koli",
    "Kuchipudi",
    "Lavani",
    "Manipuri",
    "Mayurbhanj Chhau",
    "Mohiniyattam",
    "Odissi",
    "Raas Leela",
    "Sattriya",
    "Tamasha",
    "Tera Tali",
    "Thang-Ta",
    "Yakshagana",
    "Dhrupad",
    "Khayal",
    "Thumri",
    "Tappa",
    "Ghazal",
    "Qawwali",
    "Kriti",
    "Varnam",
    "Tillana",
    "Ragamalika",
    "Javali",
    "Swarajati",
    "Bhajans",
    "Kirtan",
    "Sufi Music",
    "Abhangas",
    "Shabad Kirtan (Sikh)",
    "Bansuri",
    "Dilruba",
    "Dholak",
    "Ektara",
    "Esraj",
    "Flute (Bansuri)",
    "Ghatam",
    "Harmonium",
    "Jal Tarang",
    "Mridangam",
    "Nadaswaram",
    "Pakhawaj",
    "Ravanahatha",
    "Sarangi",
    "Sarod",
    "Santoor",
    "Shehnai",
    "Sitar",
    "Tabla",
    "Tanpura",
    "Tumbi",
    "Veena",
    "Bhavai",
    "Bhand Pather",
    "Jatra",
    "Koodiyattam",
    "Mudiyettu",
    "Nautanki",
    "Pandavani",
    "Pothu Koothu",
    "Ramlila",
    "Ram Lila",
    "Ras Leela",
    "Sattriya",
    "Tamaasha",
    "Therukoothu",
    "Yakshagana",
  ];

  const venueTypes = [
    "Banquette Hall",
    "Classroom",
    "Corporate",
    "Hotel",
    "Open Ground",
    "Private House",
    "Theater",
    "Training Center",
    "Any other",
  ];
  const performanceFacilitiesaArr = [
    "Accommodation",
    "Food",
    "Light",
    "Local Travel",
    "Musical Instruments",
    "Outstation Travel",
    "Photography",
    "Sound",
    "Stage",
    "Video",
    "Any other",
  ];
  return (
    <>
      <div className="ArtistOpportunities_Page">
        <div className="opportunity_container">
        <div className="" >
            <strong style={{marginTop: "3%", color : "#AD2F3B", fontSize: "35px"}}>Create Opportunity</strong>
        </div>
        <div className="ArtistOpportunities_Page_Infoform">
          <form onSubmit={submitHandler}>
            <div className="ArtistOpportunities_Page_Infoform_Contentone">

              <div className="opp_top">
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
              >
                <label>
                  <strong>Name of the event*</strong>
                  </label>
                <select
                  required
                  name="purpose"
                  value={formData?.purpose}
                  onChange={inputChangeHandler}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select purpose
                  </option>
                  {purposeOfPerformance?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Date of Performance*</strong>
                </label>
                <input
                  required
                  value={formData?.performanceDate}
                  name="performanceDate"
                  onChange={inputChangeHandler}
                  type="date"
                  placeholder="Enter event date"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
              >
                <label>
                  <strong>Type of organization*</strong>
                  </label>
                <select
                  required
                  name="purpose"
                  // value={formData?.purpose}
                  // onChange={inputChangeHandler}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select purpose
                  </option>
                  {purposeOfPerformance?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Application Last Date*</strong>
                </label>
                <input
                  required
                  onChange={inputChangeHandler}
                  name="end"
                  value={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
             

              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "90%" }}
              >
                <label>
                  <strong>Description*</strong>
                </label>
                <textarea
                  required
                  name="description"
                  value={formData?.description}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{ width: "100%", height: "65px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                  placeholder="Enter art Description"
                />
              </div>

              <div style={{margin: "20px", width: "90%", fontSize: "30px", color: "#AD2F3B", fontWeight: "600"}}>
                Performance
                </div>
              
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Location of Performance*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="location"
                  value={formData?.location}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select location
                  </option>
                  <option value="City/District">City/District</option>
                  <option value="State">State</option>
                  <option value="Country">Country</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Language of Performance*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="languages"
                  value={formData?.languages}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected>Enter Language</option>
                  {allLanguages?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
             
                <label>
                  <strong>Approx. Budget for Performance*</strong>
                </label>
                <select
                  required
                  onChange={inputChangeHandler}
                  value={formData?.budget}
                  name="budget"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select budget
                  </option>
                  <option value="24000">Below 25000</option>
                  <option value="35000">25000-50000</option>
                  <option value="70000">50000-100000</option>
                  <option value="200000">100000-250000</option>
                  <option value="800000">250000-1000000</option>
                  <option value="1200000">Above 1000000</option>
                </select>
              </div>
              
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
               
                <label>
                  <strong>Duration of Performance (hrs)*</strong>
                </label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.performanceDuration}
                  name="performanceDuration"
                  type="number"
                  placeholder="Enter Performance Duration"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
             

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
              
                <label>
                  <strong>Type of Art*</strong>
                </label>
                <select
                  required
                  value={formData?.artType}
                  name="artType"
                  onChange={inputChangeHandler}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected>Select Art</option>
                  <option value="Folk">Folk</option>
                  <option value="Classical">Classical</option>
                  <option value="Fusion">Fusion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
               
                <label>
                  <strong>Category of Art*</strong>
                </label>
                <select
                  required
                  onChange={inputChangeHandler}
                  name="artCategory"
                  value={formData?.artCategory}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected>Enter Category</option>
                  <option value="dance">Dance</option>
                  <option value="song">song</option>
                  <option value="music">Music</option>
                  <option value="theater">Theater</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Name of Art*</strong>
                </label>
                <select
                  required
                  value={formData?.artName}
                  name="artName"
                  onChange={inputChangeHandler}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  {ArtNames?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
      
                <label>
                  <strong>Theme of Performance*</strong>
                </label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Theme for Performmance/Event"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
  
                <label>
                  <strong>Live/Recorded/Part Live*</strong>
                </label>
                <select onChange={inputChangeHandler} name="mediaType"
                style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Live">Live</option>
                  <option value="Recorded">Recorded</option>
                  <option value="PartLive">Part Live</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
   
                <label>
                  <strong>Need Customized/ curated Performance*</strong>
                </label>
                <select onChange={inputChangeHandler} name="customization" 
                style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div style={{margin: "20px", width: "90%", fontSize: "30px", color: "#AD2F3B", fontWeight: "600"}}>
                Artist
                
               <div className="art_two">
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
             
                <label>
                  <strong>No. of Required Artist*</strong>
                </label>
                <select
                  required
                  value={formData?.requiredArtists}
                  name="requiredArtists"
                  onChange={inputChangeHandler}
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="1">1</option>
                  <option value="3">2-5</option>
                  <option value="7">5-10</option>
                  <option value="20">10-50</option>
                  <option value="60">Above 50</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                
                <label>
                  <strong>Level of Artist*</strong>
                </label>
                <select
                  required
                  onChange={inputChangeHandler}
                  value={formData?.artistLevel}
                  name="artistLevel"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="international">International</option>
                  <option value="national">National</option>
                  <option value="state">State</option>
                  <option value="district">District</option>
                  <option value="taluka">Taluka</option>
                  <option value="local">Local</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              </div>

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
            
                <label>
                  <strong>Location of Artist*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="artistLocation"
                  value={formData?.artistLocation}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="local">Local</option>
                  <option value="outstation">Outstation</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              </div>
              <div style={{margin: "20px", width: "90%", fontSize: "30px", color: "#AD2F3B", fontWeight: "600"}}>
                Audience & Venue
                </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">

                <label>
                  <strong>Size of Audience*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceSize"
                  value={formData?.audienceSize}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="20">Below 25</option>
                  <option value="35">25-50</option>
                  <option value="70">50-100</option>
                  <option value="300">100-500</option>
                  <option value="800">500-1000</option>
                  <option value="1200">Above 1000</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Profile of Audience*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceProfile"
                  value={formData?.audienceProfile}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Hotel inhouse Guests ">
                    Hotel inhouse Guests
                  </option>
                  <option value="Professional/ Executives">
                    Professional/ Executives
                  </option>
                  <option value="Students">Students</option>
                  <option value="Family Guests">Family Guests</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Venue of Performance*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="venue"
                  value={formData?.venue}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  {venueTypes?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
              >
                <label>
                  <strong>Performance Facilities*</strong>
                </label>
                <select
                  onChange={inputChangeHandler}
                  name="facilities"
                  value={formData?.facilities}
                  required
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                >
                  <option selected hidden>
                    Select
                  </option>
                  {performanceFacilitiesaArr?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* </div> */}
              {/* <div className="ArtistOpportunities_Page_Infoform_Contenttwo"> */}

              <div
                className="ArtistOpportunities_Page_Infoform_inputfield textareafield"
                style={{ width: "90%" }}
              >
                <label>
                  <strong>Other Requirement:</strong>
                </label>
                {/* <input onChange={inputChangeHandler} name="otherRequirements" value={formData?.otherRequirements} style={{ height: "200px" }} type="text" placeholder="Enter Any Other requirements" /> */}
                <textarea
                  onChange={inputChangeHandler}
                  name="otherRequirements"
                  value={formData?.otherRequirements}
                  style={{ height: "60px", resize: "none", width: "100%", boxShadow: "#a2a2a2 0px 3px" }}
                  placeholder="Enter Any Other requirements"
                ></textarea>
              </div>

              <div style={{margin: "20px", width: "90%", fontSize: "30px", color: "#AD2F3B", fontWeight: "600"}}>
                Contact
                </div>

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>
                  <strong>Name*</strong>
                </label>
                <input
                  name="Name"
                  type="text"
                  placeholder="Name of User"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
      
                <label>
                  <strong>Contact Number*</strong>
                </label>
                <input
                  name="Name"
                  type="text"
                  placeholder="Contact Number"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
            
                <label>
                  <strong>Email*</strong>
                </label>
                <input
                  name="Email"
                  type="text"
                  placeholder="Email of User"
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
            
                <label>
                  <strong>Perks & Benefits*</strong>
                </label>
                <input
                  name="Perks_Benefits"
                  type="text"
                  placeholder=""
                  style={{ width: "100%", height: "50px", boxShadow: "#a2a2a2 0px 3px", marginTop : "10px" }}
                />
              </div>
              
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns" style={{textAlign: "center", width: "100%"}}>
              <button type="Submit" style={{cursor: "pointer"}}>Upload</button>
              {/* <Link
                style={{ textDecoration: "none" }}
                to={"/UploadedOpportunities"}
              >
                <button type="button">Uploaded Opportunities</button>
              </Link> */}
            </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default UploadOpportunities;
