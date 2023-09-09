import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import PatronNavbar from "../Patron_Navbar";

import "./UploadOpportunities.css";
import { makeAuthenticatedPATCHRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";

const EditOpportunity = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({});

  const [updatedFormData, setUpdatedFormData] = useState({});

  const navigate = useNavigate();

  const { state } = useLocation();

  const { opportunity } = state || {};

  useEffect(() => {
    if (opportunity) {
      opportunity.performanceDate = opportunity.performanceDate.split("T")[0];
      opportunity.applicationPeriod.start = opportunity.applicationPeriod.start.split("T")[0];
      opportunity.applicationPeriod.end = opportunity.applicationPeriod.end.split("T")[0];
      setFormData(opportunity);
    }
  }, [opportunity]);

  const inputChangeHandler = (e) => {
    setUpdatedFormData((prevState) => {
      if (e.target.name === "languages" || e.target.name === "incentives") {
        const array = e.target.value.split(/\s*,\s*/);
        return { ...prevState, [e.target.name]: array };
      }

      if (e.target.name === "start" || e.target.name === "end") {
        const applicationPeriod = {
          [e.target.name]: e.target.value,
        };

        return { ...prevState, applicationPeriod: { ...prevState.applicationPeriod, ...applicationPeriod } };
      }

      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  console.log('aupd' , updatedFormData);

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeAuthenticatedPATCHRequest(`${patronProfilePoints.UPDATE_OPPOR_API}/${opportunity._id}`, updatedFormData, accessToken);
      console.log('res' , response);

      if (response.statusCode === 200) {
        toast.success("successfully saved");
        navigate(-1);
        
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, please try again");
    }
    toast.dismiss(toastId);
  };

  return (
    <>
      <PatronNavbar />
      <div className="ArtistOpportunities_Page">
        <div className="ArtistOpportunities_Image">
          <div className="ArtistOpportunities_Image_Content">
            <p>Edit Opportunities for Artist</p>
          </div>
        </div>
        <div className="ArtistOpportunities_Page_Infoform">
          <form onSubmit={submitHandler}>
            <div className="ArtistOpportunities_Page_Infoform_Contentone">
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Nature of Art*</label>
                <input defaultValue={formData?.artNature} name="artNature" onChange={inputChangeHandler} type="text" placeholder="Enter nature of art" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Location of Performance*</label>
                <input defaultValue={formData?.location} name="location" onChange={inputChangeHandler} type="text" placeholder="Enter location" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Description*</label>
                <input name="description" defaultValue={formData?.description} onChange={inputChangeHandler} type="text" placeholder="Enter art Description" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Date of Performance*</label>
                <input defaultValue={formData?.performanceDate} name="performanceDate" onChange={inputChangeHandler} type="date" placeholder="Enter event date" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Type of Performance*</label>
                <input defaultValue={formData?.performanceType} name="performanceType" onChange={inputChangeHandler} type="text" placeholder="Enter performance type" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Languages*</label>
                <input defaultValue={formData?.languages} name="languages" onChange={inputChangeHandler} type="text" placeholder="Enter languages" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Live / Record *</label>
                <select onChange={inputChangeHandler} name="mediaType">
                  <option selected hidden>
                    Select
                  </option>
                  <option value="Live" selected={formData?.mediaType === "Live" && true}>
                    Live
                  </option>
                  <option value="Recorded" selected={formData?.mediaType === "Recorded" && true}>
                    Recorded
                  </option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Theme*</label>
                <input onChange={inputChangeHandler} defaultValue={formData?.theme} name="theme" type="text" placeholder="Enter theme" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Number of Artist*</label>
                <input defaultValue={formData?.requiredArtists} name="requiredArtists" onChange={inputChangeHandler} type="number" placeholder="Enter number of artist" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Time of Performance*</label>
                <select onChange={inputChangeHandler} name="timeSlot">
                  <option selected hidden>
                    Select Time Slot
                  </option>
                  <option value="Day" selected={formData?.timeSlot === "Day" && true}>
                    Day
                  </option>
                  <option value="Night" selected={formData?.timeSlot === "Night" && true}>
                    Night
                  </option>
                </select>
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Position*</label>
                <input onChange={inputChangeHandler} type="text" defaultValue={formData?.position} placeholder="Enter Position" name="position" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Duration of Performance*</label>
                <input onChange={inputChangeHandler} defaultValue={formData?.performanceDuration} name="performanceDuration" type="text" placeholder="Enter Performance Duration" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Artist Level*</label>
                <input onChange={inputChangeHandler} defaultValue={formData?.artistLevel} name="artistLevel" type="text" placeholder="Enter Artist Level" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Expertise*</label>
                <input onChange={inputChangeHandler} defaultValue={formData?.expertise} name="expertise" type="text" placeholder="Enter Artist Expertise" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Category*</label>
                <input onChange={inputChangeHandler} type="text" name="category" defaultValue={formData?.category} placeholder="Enter Category" />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_Contenttwo">
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Proposed Budget*</label>
                <input onChange={inputChangeHandler} defaultValue={formData?.budget} name="budget" type="text" placeholder="Enter proposed budget" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Start Date of Application*</label>
                <input onChange={inputChangeHandler} name="start" efaultValue={formData?.applicationPeriod?.start} type="date" placeholder="Enter application Start date" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Last Date of Application*</label>
                <input onChange={inputChangeHandler} name="end" defaultValue={formData?.applicationPeriod?.end} type="date" placeholder="Enter application last date" />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Any Other Requirements*</label>
                <input
                  onChange={inputChangeHandler}
                  name="otherRequirements"
                  defaultValue={formData?.otherRequirements}
                  style={{ height: "200px" }}
                  type="text"
                  placeholder="Enter Any Other requirements"
                />
              </div>
              <div className="ArtistOpportunities_Page_Infoform_inputfield">
                <label>Do you Offer any Additional Facilities(incentives)*</label>
                <input onChange={inputChangeHandler} name="incentives" defaultValue={formData?.incentives} style={{ height: "200px" }} type="text" placeholder="Enter Incentives" />
              </div>
            </div>
            <div className="ArtistOpportunities_Page_Infoform_btns">
              <button type="Submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditOpportunity;
