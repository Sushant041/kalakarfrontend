import "./rejectedApplicationItem.css"
import ApplicationButton from "./ApplicationButton";
import hireNoData from "./assets/hireNoData.svg"
import { Link } from 'react-router-dom';


function RejectedApplicationItems({currentEvent , jobData}){

 return (
    <div className="rejected_Application_wrapper">
      <p className="rejected_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="rejected_event_Detail_Container">
        {jobData.length === 0 ? (
           <div className="noData_container">
           <img src={hireNoData} alt=""  />
           <p style={{color:"black" , fontWeight:"400",fontSize:"20px" ,fontFamily:"Poppins"}}>You are not hired by any Patron yet</p>
           <p style={{color:"black" , fontWeight:"700",fontStyle:"italic",fontSize:"20px" ,fontFamily:"Poppins"}}>NEVER GIVE UP</p>
           <p style={{color:"black" , fontWeight:"400",fontSize:"20px" ,fontFamily:"Poppins"}}>Keep applying for more events</p>
           <ApplicationButton text={"View Events"} />
         </div>
        ) : (
          <div className="rejected_Event_details">
            {
                jobData.map((event , index)=>(
                    <div key={index} className="single_rejected_eventWrapper" >
                        <div>

                    <p className="rejected_text">Rejected</p>
                    <h1 className="single_rejected_heading">{event.title}</h1>
                    <p className="single_rejected_para">{event.location}</p>
                    <p className="single_rejected_para">{event.role}</p>
                    <p className="single_rejected_para">{event.appliedOn}</p>
                        </div>
                       <div className="rejected_button_wrapper">
                       <Link to="/Artist_OpportunityDetails" style={{ textDecoration: "none" }} state={{ job: jobData[index] }}><ApplicationButton text={'View Details'} /></Link>
                  
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

export default RejectedApplicationItems;