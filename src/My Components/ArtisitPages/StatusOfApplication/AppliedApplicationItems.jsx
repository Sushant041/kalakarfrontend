import appliedNoData from "./assets/appliedNoData.svg";
import "./appliedApplicationItems.css";
import NoDataTemplate from "./NoDataTemplate";
import ApplicationButton from "./ApplicationButton";
import { Link } from "react-router-dom";




function AppliedApplicationItems({ currentEvent , loading , jobData }) {

  return (
    <div className="applied_Application_wrapper">
      <p className="applied_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="applied_event_Detail_Container">
        
        {
          loading ?(
<div class="custom-loader"></div>
          ):(
            jobData.length === 0 ? (
              <NoDataTemplate
                image={appliedNoData}
                para={"You haven't applied for any events application"}
              />) : (
              <div className="applied_Event_details">
                {
                    jobData?.map((event , index)=>(
                        <div key={index} className="single_applied_eventWrapper" >
                            <div>
    
                        <p className={`appliedAppli`}>{event.status}</p>
                        <h1 className="single_applied_heading">{event.position}</h1>
                        <p className="single_applied_para">{event.location}</p>
                        <p className="single_applied_para">{event.role}</p>
                        <p className="single_applied_para" >AppliedOn: {new Date(event.appliedOn).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                            </div>
                           <div className="applied_button_wrapper">
    
                           <Link to="/Artist_OpportunityDetails"  style={{textDecoration:"none"}} state={{ job: { id:jobData[index].opportunityId , status:'Applied' } }}><ApplicationButton text={'View Details'} /></Link>
                           </div>
                        </div>
                    ))
                }
              </div>
            )
          )
        }
        
        
      </div>
    </div>
  );
}

export default AppliedApplicationItems;
