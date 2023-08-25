import noData from "./assets/noData.svg";
import location from "./assets/location.svg";
import language from "./assets/language.svg";
import applicationDueDate from "./assets/applicationDueDate.svg";
import amount from "./assets/amount.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import "./saveApplicationItems.css";
import ApplicationButton from "./ApplicationButton";
import NoDataTemplate from "./NoDataTemplate";
import { Link } from 'react-router-dom';
function SaveApplicationItems({ currentEvent }) {
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
    <div className="saveApplicationItems_Wrapper">
      <p className="saved_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      <div className="saved_event_Detail_Container">
        {jobData.length === 0 ? (
         <NoDataTemplate image={noData} para={"You haven't saved for any events application"}  />
        ) : (
          <div className="saved_event_details">
            {jobData.map((event, index) => (
                <>
              <div key={index} className="single_saved_event">
                {/* left part  */}
                <div className="saved_event_leftPart">
                  <h3 className="saved_event_heading">{event.title}</h3>
                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={location} alt="location" />
                      <p className="save_event_data_para">Location:</p>
                    </div>
                    <p className="save_event_data_ans">{event.location}</p>
                  </div>

                  <div className="saved_event_data" >
                    <div className="saved_event_data_left">
                      <img src={dateOfPerformance} alt="dop" />
                      <p className="save_event_data_para">Date of Performance :</p>
                    </div>
                    <p className="save_event_data_ans">{event.dateOfPerformance}</p>
                  </div>

                  <div  className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={amount} alt="dop" />
                      <p className="save_event_data_para">Amount :</p>
                    </div>
                    <p className="save_event_data_ans">{event.amount}</p>
                  </div>

                  <div  className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={language} alt="dop" />
                      <p className="save_event_data_para">Language :</p>
                    </div>
                    <p className="save_event_data_ans">{event.language}</p>
                  </div>

                  <div  className="saved_event_data">
                    <div  className="saved_event_data_left">
                      <img src={applicationDueDate} alt="dop" />
                      <p className="save_event_data_para">Application Due Date :</p>
                    </div>
                    <p className="save_event_data_ans">{event.applicationDueDate}</p>
                  </div>
                </div>
                {/* right part  */}
                <div className="saved_event_rightPart">
                <Link to="/Artist_OpportunityDetails" style={{ textDecoration: "none" }} state={{ job: jobData[index] }}><ApplicationButton
                    text={"More Information"}
                    background_flag={true}
                  /></Link>
                  
                  <ApplicationButton text={"Apply Now"} />
                </div>
              </div>
              <div className="remove_from_saved_text">Remove from Saved</div>
            </>
            ))}

            <ApplicationButton text={'View More Events'} />
          </div>
        )}
      </div>
      </div>
      );
}

export default SaveApplicationItems;
