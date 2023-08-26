import "./rejectedApplicationItem.css"
import ApplicationButton from "./ApplicationButton";
import hireNoData from "./assets/hireNoData.svg"
import { Link } from 'react-router-dom';


function RejectedApplicationItems({currentEvent}){
  const jobData = [
    {
      title: "Dancer for Entertain the Regular Audience",
      location: "Mumbai Hotel",
      dateOfPerformance: "23/08/23",
      amount: "5,000 INR",
      language: "Hindi",
      applicationDueDate: "08/08/23",
      postedondate: "28/07/23",
      description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      role: "Kathak Dancer",
      expertise: "Acting, Dancing, Time Management",
      opening: "5",
      category: "Dance",
      appliedOn: "Applied on 06/08/23",
      perk1: "Accommodation",
      perk2: "Food",
      perk3: "Paycheck"
    },
    {
      title: "Foreign Delegation",
      location: "Delhi",
      dateOfPerformance: "23/08/23",
      amount: "5,000 INR",
      language: "English",
      applicationDueDate: "08/08/23"
    },
    // Add more job objects as needed
  ];
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