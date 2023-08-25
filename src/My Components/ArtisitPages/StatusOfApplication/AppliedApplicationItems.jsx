import appliedNoData from "./assets/appliedNoData.svg";
import "./appliedApplicationItems.css";
import NoDataTemplate from "./NoDataTemplate";
import ApplicationButton from "./ApplicationButton";
import { Link } from "react-router-dom";
function AppliedApplicationItems({ currentEvent }) {
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
        appliedOn:"Applied on 06/08/23",
        applied:"In-progress",
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
        applicationDueDate: "08/08/23",
        applied:"Hired"
    },
    // Add more job objects as needed
];
  return (
    <div className="applied_Application_wrapper">
      <p className="applied_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="applied_event_Detail_Container">
        {jobData.length === 0 ? (
          <NoDataTemplate
            image={appliedNoData}
            para={"You haven't applied for any events application"}
          />
        ) : (
          <div className="applied_Event_details">
            {
                jobData.map((event , index)=>(
                    <div key={index} className="single_applied_eventWrapper" >
                        <div>

                    <p className={`${event.applied==='Hired'?('Hired_text'):('InProgress_text')}`}>{event.applied}</p>
                    <h1 className="single_applied_heading">{event.title}</h1>
                    <p className="single_applied_para">{event.location}</p>
                    <p className="single_applied_para">{event.role}</p>
                    <p className="single_applied_para">{event.appliedOn}</p>
                        </div>
                       <div className="applied_button_wrapper">

                       <Link to="/Artist_OpportunityDetails" style={{textDecoration:"none"}} state={{ job: jobData[index] }}><ApplicationButton text={'View Details'} /></Link>
                       </div>
                    </div>
                ))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default AppliedApplicationItems;
