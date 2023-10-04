import React, { useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Artist_OpportunitiesMoreInfo.css";
import { useState } from "react";
import Artist_navbar from "../Artist_navbar";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {  makeAuthenticatedPOSTRequest, makeAuthenticatedPOSTRequestWithoutBody } from "../../../services/serverHelper";
import { artistOpportunityPoints } from "../../../services/apis";


export function Artist_OpportunitiesMoreInfo() {

  const navigate = useNavigate();

  const location = useLocation();

  let job = location.state?.job;

  console.log('job' , job);

  const [currentId , setCurrentId] = useState(null);

  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] = useState(null);

  const { accessToken } = useSelector((state) => state.auth);
  
  const [applyAns, setApplyAns] = useState("");


  const [jobData , setJobData] = useState(null);



  useEffect(()=>{
   if(job?.status === 'Applied'){
    setCurrentId(job?.opportunity._id);
    setJobData(job);
   }
   else {
    setCurrentId(job?.opportunity._id);
    setJobData(job);
   }
  },[])


  const applySubmitHandler = async (event) => {
    const toastId = toast.loading("Loading..."  ,{
      position:"top-center"
    });
    try {
      event.preventDefault();
      const response = await makeAuthenticatedPOSTRequest(artistOpportunityPoints.APPLY_OPPOR_API + `/${job._id}`, { applyAns }, accessToken);
      console.log("response", response);

      if (response.status === "success") {
        toast.success("successfully applied" , {
          position:"top-center"
        });
        setOpportunityapplynowPopup(null);
        setApplyAns("");
      } else {
        toast.error(response.message , {
          position:"top-center"
        }) ;
      }
    } catch (error) {
      console.log(error);
      toast.error("server error , please try again" , {
        position:"top-center"
      });
    }

    toast.dismiss(toastId);
  };

const savedHandler = async()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPOSTRequestWithoutBody(artistOpportunityPoints.SAVE_OPPR_BY_ID + `/${currentId}`,accessToken);
    console.log('response saved' , response);
    if(response.status === 'success'){
      toast.success('successfully Saved' , {
        position:"top-center"
      });
           navigate("/statusOfApplication");
    }
    else{
      toast.error(response.message , {
        position:"top-center"
      });
    }

  }catch(error){
    console.log(error);
    toast.error('something went wrong , Please try again' ,{
      position:"top-center"
    });
  }
  toast.dismiss(toastId);
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []); 

  return (
    <>
      <Artist_navbar />
      <div className="OpportunitiesMoreInfoPage">
        <div className="OpportunitiesMoreInfoPage_Topbox">
          <h1 style={{color:"#AD2F3B"}}>{jobData?.opportunity?.position}</h1>
          <div className="OpportunitiesMoreInfoPage_Topboxcontent">
            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
              <p>
                Category :&emsp;<span>{jobData?.opportunity?.category}</span>
              </p>
              <p>
                Posted on :&emsp;<span>{new Date(jobData?.opportunity?.applicationPeriod?.start).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                Due Date :&emsp; <span>{new Date(jobData?.opportunity?.applicationPeriod?.end).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                {" "}
                Opening :&emsp; <span>{jobData?.opportunity?.requiredArtists}</span>
              </p>
            </div>
            <div className="OpportunitiesMoreInfoPage_Topboxbtns">
              <button className="btnone">Share</button>
              <button onClick={savedHandler} className="btntwo">Save</button>
            </div>
          </div>
        </div>

        <div className="OpportunitiesMoreInfoPage_bottombox">
          <h1>Description</h1>
          <p>{jobData?.opportunity?.description}</p>
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
                <span>{jobData?.opportunity?.expertise} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.location} a</span>
              </p>
              <p>
                <span>
                  {jobData?.opportunity?.languages?.map((lag, index) => (
                    <span key={index}>{lag} a </span>
                  ))}
                </span>
              </p>
              <p>
                <span>{jobData?.opportunity?.budget} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.theme} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.timeSlot} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.performanceDuration} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.artNature} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.performanceType} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.mediaType} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.artLevel} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.location} a</span>
              </p>
              <p>
                <span>{jobData?.opportunity?.postedBy} a </span>
              </p>
            </div>
          </div>
          <h1>Perks and Benefits</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_PB">
            {jobData?.opportunity?.incentives?.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
          {
            (job?.status === 'Applied' || job?.status === "In-Progress" || job?.status === "Rejected"  || job?.status === 'Hired') ?(
              <div className="OpportunitiesMoreInfoPage_bottombox_btns">

              <button className="notAppliedBtn" >
                Already Applied
              </button>
              </div>
            ):(
              <div className="OpportunitiesMoreInfoPage_bottombox_btns">
              <button className="btnone" onClick={() => navigate(-1)}>
                Back
              </button>
              <button className="btntwo" onClick={() => setOpportunityapplynowPopup(true)}>
                Apply Now
              </button>
            </div>
            )
          }
        

          
        </div>

        {/* this is for pop up  */}

        {OpportunityapplynowPopup && (
          // <div className='oppor_applyNowPop_container'>

          <div className="Opportunityapplynowpopup_fullscreen">
            <div className="Opportunityapplynowpopup">
              <button onClick={() => setOpportunityapplynowPopup(false)}>X</button>
              <div className="Opportunityapplynowpopup_content">
                <h4>{jobData?.title}</h4>
                <div className="Opportunityapplynowpopup_contentone">
                  <p>
                    Posted on: <span>{new Date(job.applicationPeriod.start).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </p>
                  <p>
                    Last Date to apply: <span>{new Date(job.applicationPeriod.end).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </p>
                </div>
              </div>
              <h1>Description</h1>
              <p>{jobData?.description}</p>
              <div className="Opportunityapplynowpopup_contentone">
                <h1>Other Details</h1>
                <a href="#" style={{ color: "#AD2F3B" }}>
                  View all info
                </a>
              </div>
              <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                <p>
                  Role : &emsp;&emsp;&emsp;&emsp; <span>{jobData?.role}</span>
                </p>
                <p>
                  Expertise :&emsp;&emsp;<span>{jobData?.expertise}</span>
                </p>
                <p>
                  Location :&emsp;&emsp; <span>{jobData?.location}</span>
                </p>
                <p>
                  Language : &emsp; <span>{job.languages?.map((lag, index) => (
                              <span key={index}>{lag} </span>
                            ))}</span>
                </p>
                <p>
                  Amount : &emsp; &emsp;<span>{jobData?.budget}</span>
                </p>
                <p>
                  {" "}
                  Opening :&emsp;&emsp; <span>{jobData?.requiredArtists }</span>
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
