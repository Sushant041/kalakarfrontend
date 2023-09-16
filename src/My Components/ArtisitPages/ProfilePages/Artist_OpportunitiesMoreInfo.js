import React, { useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Artist_OpportunitiesMoreInfo.css";
import { useState } from "react";
import Artist_navbar from "../Artist_navbar";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest, makeAuthenticatedPOSTRequestWithoutBody } from "../../../services/serverHelper";
import { artistOpportunityPoints } from "../../../services/apis";


export function Artist_OpportunitiesMoreInfo() {

  const navigate = useNavigate();
  const location = useLocation();

  let job = location.state?.job;

  const [currentId , setCurrentId] = useState(null);

  const [OpportunityapplynowPopup, setOpportunityapplynowPopup] = useState(null);

  const { accessToken } = useSelector((state) => state.auth);
  
  const [applyAns, setApplyAns] = useState("");

  console.log("josb", job);

  const [jobData , setJobData] = useState(null);

  // for fetch the data 
  const fetchAppliedOpp =async() =>{
    const response = await makeAuthenticatedGETRequest(artistOpportunityPoints.FETCH_OPPOR_BY_ID + `/${job.id}` , accessToken);
    console.log('fiteres' , response);
      if(response.success  ===  'success'){
        setJobData(response.data);
        
      }
      else{
        toast.error('something went wrong , please try again' , {
          position:"top-center"
        });
      }
  }

  useEffect(()=>{
   if(job?.status === 'Applied'){
    setCurrentId(job._id);
    setJobData(job);
    // fetchAppliedOpp();
   }
   else {
    setCurrentId(job._id);
    setJobData(job);
   }
  },[])

  console.log('currentId' , currentId);

  const applySubmitHandler = async (event) => {
    const toastId = toast.loading("Loading..."  ,{
      position:"top-center"
    });
    try {
      event.preventDefault();
      const response = await makeAuthenticatedPOSTRequest(artistOpportunityPoints.APPLY_OPPOR_API + `/${job._id}/apply`, { applyAns }, accessToken);
      console.log("response", response);

      if (response.success === "success") {
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
    if(response.success === 'success'){
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
          <h1>{jobData?.title}</h1>
          <div className="OpportunitiesMoreInfoPage_Topboxcontent">
            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
              <p>
                Category :&emsp;<span>{jobData?.category}</span>
              </p>
              <p>
                Posted on :&emsp;<span>{new Date(jobData?.applicationPeriod?.start).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                Due Date :&emsp; <span>{new Date(jobData?.applicationPeriod?.end).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
              </p>
              <p>
                {" "}
                Opening :&emsp; <span>{jobData?.requiredArtists}</span>
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
          <p>{jobData?.description}</p>
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
                <span>{jobData?.expertise}</span>
              </p>
              <p>
                <span>{jobData?.location}</span>
              </p>
              <p>
                <span>
                  {jobData?.languages?.map((lag, index) => (
                    <span key={index}>{lag} </span>
                  ))}
                </span>
              </p>
              <p>
                <span>{jobData?.budget}</span>
              </p>
              <p>
                <span>{jobData?.theme}</span>
              </p>
              <p>
                <span>{jobData?.timeSlot}</span>
              </p>
              <p>
                <span>{jobData?.performanceDuration}</span>
              </p>
              <p>
                <span>{jobData?.artNature}</span>
              </p>
              <p>
                <span>{jobData?.performanceType}</span>
              </p>
              <p>
                <span>{jobData?.mediaType}</span>
              </p>
              <p>
                <span>{jobData?.artLevel}</span>
              </p>
              <p>
                <span>{jobData?.location}</span>
              </p>
              <p>
                <span>{jobData?.postedBy}</span>
              </p>
            </div>
          </div>
          <h1>Perks and Benefits</h1>
          <div className="OpportunitiesMoreInfoPage_bottombox_PB">
            {jobData?.incentives?.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
          {
            job?.status === 'Applied' ?(
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
                  Opening :&emsp;&emsp; <span>{jobData?.requiredArtists}</span>
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
