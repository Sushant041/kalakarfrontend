import React, { useState } from "react";
import "./UploadOpportunities.css";
import Patron_Navbar from "../Patron_Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { Link, useNavigate } from "react-router-dom";

function UploadOpportunities() {
  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({});
  const [uploadTab, setUploadTab] = useState(1);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      if (e.target.name === "languages" || e.target.name === "incentives") {
        const array = e.target.value.split(/\s*,\s*/);
        return { ...prevState, [e.target.name]: array };
      }

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

    const toastId = toast.loading("Loading...");

    try {
      const response = await makeAuthenticatedPOSTRequest(
        patronProfilePoints.UPLOAD_OPPOR_API,
        formData,
        accessToken
      );

      if (response.statusCode === 201) {
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

        navigate("/UploadedOpportunities");
      } else {
        console.log(response.message);
        toast.error("Please provide all the required fields");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
    toast.dismiss(toastId);
  };

  let performanceFacilitiesaArr = [
    "Stage / Light/ Sound/ Camera/ Video",
    "Outstation Travel/ Local Travel/ Food/ Accommodation etc",
  ];
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
  let citiesInIndia = [
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Ahmednagar",
    "Ajmer",
    "Akola",
    "Aligarh",
    "Allahabad",
    "Ambattur",
    "Amravati",
    "Amritsar",
    "Asansol",
    "Aurangabad",
    "Bareilly",
    "Belgaum",
    "Bellary",
    "Bharatpur",
    "Bhatpara",
    "Bhavnagar",
    "Bhilai",
    "Bhilwara",
    "Bhiwandi",
    "Bhopal",
    "Bhubaneswar",
    "Bihar Sharif",
    "Bijapur",
    "Bikaner",
    "Bilaspur",
    "Bokaro",
    "Brahmapur",
    "Chandigarh",
    "Chandrapur",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Darbhanga",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Dhule",
    "Durgapur",
    "Faridabad",
    "Firozabad",
    "Gaya",
    "Ghaziabad",
    "Gorakhpur",
    "Gulbarga",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Howrah",
    "Hubli",
    "Hyderabad",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jamnagar",
    "Jamshedpur",
    "Jammu",
    "Jhansi",
    "Jodhpur",
    "Kakinada",
    "Kamarhati",
    "Kanpur",
    "Kochi",
    "Kolkata",
    "Kollam",
    "Kota",
    "Kozhikode",
    "Kulti",
    "Kurnool",
    "Latur",
    "Loni",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Maheshtala",
    "Malegaon",
    "Mangalore",
    "Mathura",
    "Meerut",
    "Moradabad",
    "Mumbai",
    "Muzaffarpur",
    "Muzaffarnagar",
    "Mysore",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Navi Mumbai",
    "Nellore",
    "Nizamabad",
    "Noida",
    "Panihati",
    "Panipat",
    "Patiala",
    "Patna",
    "Pune",
    "Raipur",
    "Rajahmundry",
    "Rajkot",
    "Rajpur Sonarpur",
    "Rampur",
    "Rohtak",
    "Rourkela",
    "Saharanpur",
    "Salem",
    "Sangli-Miraj & Kupwad",
    "Shahjahanpur",
    "Siliguri",
    "Srinagar",
    "Surat",
    "Thane",
    "Thrissur",
    "Tiruchirappalli",
    "Tumkur",
    "Udaipur",
    "Ujjain",
    "Ulhasnagar",
    "Vadodara",
    "Varanasi",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "South Dumdum",
    "Navi Mumbai",
    "Bally",
    "Pune",
    "South Dumdum",
    "Ozhukarai",
    "Rajpur Sonarpur",
  ];

  return (
    <>
      <Patron_Navbar />
      <div className="ArtistOpportunities_Page">
        <div className="ArtistOpportunities_Image">
          <div
            style={{ textAlign: "center" }}
            className="ArtistOpportunities_Image_Content"
          >
            <p>Upload Opportunities for Artist</p>
          </div>
        </div>
        <div className="oppurtunity_tab p-2 mt-3 d-flex">
          <p
            className={uploadTab == 1 ? "active" : ""}
            onClick={() => setUploadTab(1)}
          >
            Upload Opportunities
          </p>
          <p
            className={uploadTab == 2 ? "active" : ""}
            onClick={() => setUploadTab(2)}
          >
            Uploaded Opportunities
          </p>
        </div>
        <div className="ArtistOpportunities_Page_Infoform">
          <form onSubmit={submitHandler}>
            <div className="ArtistOpportunities_Page_Infoform_Contentone">
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>PURPOSE OF PERFORMANCE</label>
                <input
                  required
                  name="purpose"
                  value={formData?.purpose}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Enter art Description"
                />
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>Description*</label>
                <input
                  required
                  name="description"
                  value={formData?.description}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Enter art Description"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="location"
                  value={formData?.location}
                  required
                >
                  <option selected>City,Country</option>
                  {citiesInIndia?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Language of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="languages"
                  value={formData?.languages}
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
                <label>Approx. Budget for Performance</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.budget}
                  name="budget"
                  type="text"
                  placeholder="Enter proposed budget"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Date of Performance*</label>
                <input
                  required
                  value={formData?.performanceDate}
                  name="performanceDate"
                  onChange={inputChangeHandler}
                  type="date"
                  placeholder="Enter event date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Duration of Performance*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.performanceDuration}
                  name="performanceDuration"
                  type="text"
                  placeholder="Enter Performance Duration"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Application Last Date</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  name="end"
                  value={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                />
              </div>

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Art*</label>
                <select
                  required
                  value={formData?.artType}
                  name="artType"
                  onChange={inputChangeHandler}
                >
                  <option selected>Select Art</option>
                  <option value="Folk">Folk</option>
                  <option value="Classical">Classical</option>
                  <option value="Fusion">Fusion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Category of Art</label>
                <select
                  required
                  onChange={inputChangeHandler}
                  name="categoryOfArt"
                  value={formData?.categoryofArt}
                >
                  <option selected>Enter Category</option>
                  <option value="dance">Dance</option>
                  <option value="music">Music</option>
                  <option value="theater">Theater</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name of Art</label>
                <input
                  required
                  value={formData?.nameOfArt}
                  name="nameOfArt"
                  onChange={inputChangeHandler}
                  type="text"
                  placeholder="Enter name of art"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Theme of Performance</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Theme for Performmance/Event"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live/Recorded/Part Live</label>
                <select onChange={inputChangeHandler} name="mediaType">
                  <option selected>Select</option>
                  <option value="Live">Live</option>
                  <option value="Recorded">Recorded</option>
                  <option value="PartLive">Part Live</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Need Customized/ curated Performance</label>
                <select onChange={inputChangeHandler} name="needCustomize">
                  <option selected>Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>No. of Required Artist*</label>
                <select
                  required
                  value={formData?.requiredArtists}
                  name="requiredArtists"
                  onChange={inputChangeHandler}
                >
                  <option selected>Select</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Level of Artist</label>
                <select
                  required
                  onChange={inputChangeHandler}
                  value={formData?.artistLevel}
                  name="artistLevel"
                >
                  <option selected>Select</option>
                  <option value="international">International</option>
                  <option value="national">National</option>
                  <option value="state">State</option>
                  <option value="district">District</option>
                  <option value="local">Local</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Artist</label>
                <select
                  onChange={inputChangeHandler}
                  name="artistLocation"
                  value={formData?.artistLocation}
                  required
                >
                  <option selected>City,Country</option>
                  {citiesInIndia?.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Size of Audience</label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceSize"
                  value={formData?.audienceSize}
                  required
                >
                  <option selected>select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Profile of Audience</label>
                <select
                  onChange={inputChangeHandler}
                  name="audienceProfile"
                  value={formData?.audienceProfile}
                  required
                >
                  <option selected>select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Venue of Performance</label>
                <select
                  onChange={inputChangeHandler}
                  name="performanceVenue"
                  value={formData?.performanceVenue}
                  required
                >
                  <option selected>select</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Banquet Hall">Banquet Hall</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Private Property">Private Property</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div
                className="ArtistOpportunities_Page_Infoform_inputfield"
                style={{ width: "100%" }}
              >
                <label>Performance Facilities</label>
                <select
                  style={{ width: "100%" }}
                  onChange={inputChangeHandler}
                  name="performanceFacilities"
                  value={formData?.performanceFacilities}
                  required
                >
                  <option selected>select</option>
                  {performanceFacilitiesaArr.map((item, index) => {
                    <option key={index} value={item}>
                      {item}
                    </option>;
                  })}
                </select>
              </div>

              {/* </div> */}
              {/* <div className="ArtistOpportunities_Page_Infoform_Contenttwo"> */}

              <div
                className="ArtistOpportunities_Page_Infoform_inputfield textareafield"
                style={{ width: "100%" }}
              >
                <label>Any Other Requirements:</label>
                {/* <input onChange={inputChangeHandler} name="otherRequirements" value={formData?.otherRequirements} style={{ height: "200px" }} type="text" placeholder="Enter Any Other requirements" /> */}
                <textarea
                  onChange={inputChangeHandler}
                  name="otherRequirements"
                  value={formData?.otherRequirements}
                  style={{ height: "60px", resize: "none", width: "100%" }}
                  placeholder="Enter Any Other requirements"
                ></textarea>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Name</label>
                <input
                  readOnly
                  value={formData?.theme}
                  name="Name"
                  type="text"
                  placeholder="Name of User"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Contact Number</label>
                <input
                  readOnly
                  value={formData?.theme}
                  name="Name"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Email</label>
                <input
                  readOnly
                  value={formData?.theme}
                  name="Email"
                  type="text"
                  placeholder="Email of User"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns">
              <button type="Submit">Upload Opportunity</button>
              {/* <Link
                style={{ textDecoration: "none" }}
                to={"/UploadedOpportunities"}
              >
                <button type="button">Uploaded Opportunities</button>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadOpportunities;
