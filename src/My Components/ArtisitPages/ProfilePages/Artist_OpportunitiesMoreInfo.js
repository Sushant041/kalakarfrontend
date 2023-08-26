import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Artist_OpportunitiesMoreInfo.css";
import { Navbar_frontpage } from "../../FrontPage/Navbar";
import { useState } from "react";
import Artist_navbar from "../Artist_navbar";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { artistOpportunityPoints } from "../../../services/apis";
import applyFilter from "./assets/applyFilter.svg";

export function Artist_OpportunitiesMoreInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state.job;
  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] = useState(null);

  const { accessToken } = useSelector((state) => state.auth);
  const [applyAns, setApplyAns] = useState("");

  console.log("josb", job);

  const applySubmitHandler = async (event) => {
    const toastId = toast.loading("Loading...");
    try {
      event.preventDefault();
      const response = await makeAuthenticatedPOSTRequest(artistOpportunityPoints.APPLY_OPPOR_API + `/${job._id}/apply`, { applyAns }, accessToken);
      console.log("response", response);

      if (response.success === "success") {
        toast.success("successfully applied");
        setOpportunityapplynowPopup(null);
        setApplyAns("");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again");
    }

    toast.dismiss(toastId);
  };

  return (
    <>
      <Artist_navbar />
      <div className="OpportunitiesMoreInfoPage">
        <div className="OpportunitiesMoreInfoPage_Topbox">
          <h1>{job.title}</h1>
          <div className="OpportunitiesMoreInfoPage_Topboxcontent">
            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
              <p>
                Category :&emsp;<span>{job.role}</span>
              </p>
              <p>
                Posted on :&emsp;<span>{new Date(job.applicationPeriod.start).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                Due Date :&emsp; <span>{new Date(job.applicationPeriod.end).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                {" "}
                Opening :&emsp; <span>{job.openings}</span>
              </p>
            </div>
            <div className="OpportunitiesMoreInfoPage_Topboxbtns">
              <button className="btnone">Share</button>
              <button className="btntwo">Save</button>
            </div>
          </div>
        </div>

        <div className="OpportunitiesMoreInfoPage_bottombox">
          <h1>Description</h1>
          <p>{job.description}</p>
          <h1>Other Details</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_RSO">
            <div>
              <p>Expertise :</p>
              <p>Location : </p>
              <p>Language : </p>
              <p>Amount : </p>
              <p>Theme : </p>
              <p>Performance Time : </p>
              <p>Duration of Performance : </p>
              <p>Nature of Art : </p>
              <p>Performance Type : </p>
              <p>Live / Recorded :</p>
              <p>Level of Artist : </p>
              <p>Artist Location :</p>
              <p>Posted By : </p>
            </div>
            <div>
              <p>
                <span>{job.expertise}</span>
              </p>
              <p>
                <span>{job.location}</span>
              </p>
              <p>
                <span>
                  {job.languages?.map((lag, index) => (
                    <span key={index}>{lag} </span>
                  ))}
                </span>
              </p>
              <p>
                <span>{job.budget}</span>
              </p>
              <p>
                <span>{job.theme}</span>
              </p>
              <p>
                <span>{job.timeSlot}</span>
              </p>
              <p>
                <span>{job.performanceDuration}</span>
              </p>
              <p>
                <span>{job.artNature}</span>
              </p>
              <p>
                <span>{job.performanceType}</span>
              </p>
              <p>
                <span>{job.mediaType}</span>
              </p>
              <p>
                <span>{job.artLevel}</span>
              </p>
              <p>
                <span>{job.location}</span>
              </p>
              <p>
                <span>{job.postedBy}</span>
              </p>
            </div>
          </div>
          <h1>Perks and Benefits</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_PB">
            {job.incentives?.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
          <div className="OpportunitiesMoreInfoPage_bottombox_btns">
            <button className="btnone" onClick={() => navigate(-1)}>
              Back
            </button>
            <button className="btntwo" onClick={() => setOpportunityapplynowPopup(true)}>
              Apply Now
            </button>
          </div>
        </div>

        {/* this is for pop up  */}

        {OpportunityapplynowPopup && (
          // <div className='oppor_applyNowPop_container'>

          <div className="Opportunityapplynowpopup_fullscreen">
            <div className="Opportunityapplynowpopup">
              <button onClick={() => setOpportunityapplynowPopup(false)}>X</button>
              <div className="Opportunityapplynowpopup_content">
                <h4>{job.title}</h4>
                <div className="Opportunityapplynowpopup_contentone">
                  <p>
                    Posted on: <span>{job.postedondate}</span>
                  </p>
                  <p>
                    Last Date to apply: <span>{job.applicationDueDate}</span>
                  </p>
                </div>
              </div>
              <h1>Description</h1>
              <p>{job.description}</p>
              <div className="Opportunityapplynowpopup_contentone">
                <h1>Other Details</h1>
                <a href="#" style={{ color: "#AD2F3B" }}>
                  View all info
                </a>
              </div>
              <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                <p>
                  Role : &emsp;&emsp;&emsp;&emsp; <span>{job.role}</span>
                </p>
                <p>
                  Expertise :&emsp;&emsp;<span>{job.expertise}</span>
                </p>
                <p>
                  Location :&emsp;&emsp; <span>{job.location}</span>
                </p>
                <p>
                  Language : &emsp; <span>{job.language}</span>
                </p>
                <p>
                  Amount : &emsp; &emsp;<span>{job.amount}</span>
                </p>
                <p>
                  {" "}
                  Opening :&emsp;&emsp; <span>{job.opening}</span>
                </p>
              </div>
              <h1>Why do you want ot Apply for this Role?</h1>
              <div className="Opportunityapplynowpopup_contentform">
                <form onSubmit={applySubmitHandler}>
                  <textarea name="applyAns" value={applyAns} onChange={(e) => setApplyAns(e.target.value)} required />
                  <button type="submit">Submit</button>
                  <button onClick={() => setOpportunityapplynowPopup(false)}>Cancel</button>
                </form>
              </div>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
}
