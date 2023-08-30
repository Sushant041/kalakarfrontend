import ApplicationButton from "./ApplicationButton";
import "./inProgressApplicationEvent.css"
import NoDataTemplate from "./NoDataTemplate";
import inProgressNoData from "./assets/inProgressNoData.svg"
import { Link } from "react-router-dom";
import { useState } from 'react';

function InProgressApplicationItems({ currentEvent , jobData }) {
  
  return (
    <div className="inProgress_Application_wrapper">
      <p className="progress_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="progress_event_Detail_Container">
        {jobData.length === 0 ? (
          <NoDataTemplate
            image={inProgressNoData}
            para={"There is no In-progress events application."}
          />
        ) : (
          <div className="progress_Event_details">
            {
              jobData.map((event, index) => (
                <div key={index} className="single_progress_eventWrapper" >
                  <div>

                    <p className="progress_text">In-Progress</p>
                    <h1 className="single_progress_heading">{event.title}</h1>
                    <p className="single_progress_para">{event.location}</p>
                    <p className="single_progress_para">{event.role}</p>
                    <p className="single_progress_para">{event.appliedOn}</p>
                  </div>
                  <div className="progress_button_wrapper">
                    <ApplicationButton text={'Chat with Patron'} background_flag={true} />
                    <Link to="/Artist_OpportunityDetails" style={{textDecoration:"none"}} state={{ job: jobData[index] }}><ApplicationButton text={'View Details'} /></Link>

                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default InProgressApplicationItems;