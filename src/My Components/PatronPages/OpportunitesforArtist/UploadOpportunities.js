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
        <div className="ArtistOpportunities_Page_Infoform">
          <form onSubmit={submitHandler}>
            <div className="ArtistOpportunities_Page_Infoform_Contentone">
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Nature of Art*</label>
                <input
                  required
                  value={formData?.artNature}
                  name="artNature"
                  onChange={inputChangeHandler}
                  type="text"
                  placeholder="Enter nature of art"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance*</label>
                <input
                  required
                  value={formData?.location}
                  name="location"
                  onChange={inputChangeHandler}
                  type="text"
                  placeholder="Enter location"
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
              <div className="ArtistOpportunities_Page_Infoform_inputfield" style={{width:"100%"}}>
                <label>Description*</label>
                <input
                  required
                  name="description"
                  value={formData?.description}
                  onChange={inputChangeHandler}
                  type="text"
                  style={{width:"100%"}}
                  placeholder="Enter art Description"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Performance*</label>
                <input
                  required
                  value={formData?.performanceType}
                  name="performanceType"
                  onChange={inputChangeHandler}
                  type="text"
                  placeholder="Enter performance type"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Languages</label>
                <input
                  value={formData?.languages}
                  name="languages"
                  onChange={inputChangeHandler}
                  type="text"
                  placeholder="Enter languages"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live / Record *</label>
                <select onChange={inputChangeHandler} name="mediaType">
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Live">Live</option>
                  <option value="Recorded">Recorded</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Theme*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.theme}
                  name="theme"
                  type="text"
                  placeholder="Enter theme"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Number of Artist*</label>
                <input
                  required
                  value={formData?.requiredArtists}
                  name="requiredArtists"
                  onChange={inputChangeHandler}
                  type="number"
                  placeholder="Enter number of artist"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Time of Performance*</label>
                <select onChange={inputChangeHandler} name="timeSlot">
                  <option selected hidden>
                    Select Time Slot
                  </option>
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Position*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  type="text"
                  value={formData?.position}
                  placeholder="Enter Position"
                  name="position"
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
                <label>Artist Level*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.artistLevel}
                  name="artistLevel"
                  type="text"
                  placeholder="Enter Artist Level"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Expertise*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  value={formData?.expertise}
                  name="expertise"
                  type="text"
                  placeholder="Enter Artist Expertise"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Category*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  type="text"
                  name="category"
                  value={formData?.category}
                  placeholder="Enter Category"
                />
              </div>
              {/* </div> */}
              {/* <div className="ArtistOpportunities_Page_Infoform_Contenttwo"> */}

              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Proposed Budget*</label>
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
                <label>Start Date of Application*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  name="start"
                  value={formData?.applicationPeriod?.start}
                  type="date"
                  placeholder="Enter application Start date"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Last Date of Application*</label>
                <input
                  required
                  onChange={inputChangeHandler}
                  name="end"
                  value={formData?.applicationPeriod?.end}
                  type="date"
                  placeholder="Enter application last date"
                />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_Contenttwo">
              <div className="ArtistOpportunities_Page_Infoform_inputfield textareafield" >
                <label>Any Other Requirements:</label>
                {/* <input onChange={inputChangeHandler} name="otherRequirements" value={formData?.otherRequirements} style={{ height: "200px" }} type="text" placeholder="Enter Any Other requirements" /> */}
                <textarea
                  onChange={inputChangeHandler}
                  name="otherRequirements"
                  value={formData?.otherRequirements}
                  style={{ height: "100px", resize: "none" }}
                  placeholder="Enter Any Other requirements"
                ></textarea>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield textareafield">
                <label>
                  Do you Offer any Additional Facilities(incentives):
                </label>
                {/* <input
                  onChange={inputChangeHandler}
                  name="incentives"
                  value={formData?.incentives}
                  style={{ height: "200px" }}
                  type="text"
                  placeholder="Enter Incentives"
                /> */}
                <textarea
                  onChange={inputChangeHandler}
                  name="incentives"
                  value={formData?.incentives}
                  style={{ height: "100px",resize:"none" }}
                  placeholder="Enter Incentives"
                ></textarea>
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
