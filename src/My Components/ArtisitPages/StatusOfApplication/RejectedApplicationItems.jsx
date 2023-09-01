import "./rejectedApplicationItem.css"
import ApplicationButton from "./ApplicationButton";
import hireNoData from "./assets/hireNoData.svg"
import { Link } from 'react-router-dom';
import category from "./assets/category.svg";
import artNature from "./assets/natureOfArt.svg";
import artnature from "./assets/natureOfArt.svg"
import location from "./assets/location.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import amount from "./assets/amount.svg";
import language from "./assets/language.svg";
import applicationDueDate from "./assets/applicationDueDate.svg";

import appliDueDate from "./assets/applicationDueDate.svg";

const appli_Data = [
  {
    img:artNature , 
    title:"Nature of Art :"
  },
  {
    img: category , 
    title:"Category :"
  },
  {
    img: location , 
    title:"Location :"
  },
  {
    img: dateOfPerformance , 
    title:"Date of Performance :"
  },
  {
    img: amount , 
    title:"Amount :"
  },
  {
    img: language , 
    title:"Language :"
  },
  {
    img: appliDueDate , 
    title:"Application Due Date :"
  },
 ]

function RejectedApplicationItems({currentEvent , jobData}){

  console.log('rejectjob' , jobData);

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
          <div className="saved_event_details">
          {jobData.map((event, index) => (
            <>
              <div key={index} className="single_saved_event">
                {/* left part  */}
                <div className="saved_event_leftPart">
                  <h3 className="saved_event_heading">{event.position}</h3>
                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={artnature} alt="location" />
                      <p className="save_event_data_para">Nature Of Art:</p>
                    </div>
                    <p className="save_event_data_ans">{event.artNature}</p>
                  </div>
                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={category} alt="location" />
                      <p className="save_event_data_para">Category:</p>
                    </div>
                    <p className="save_event_data_ans">{event.category}</p>
                  </div>
                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={location} alt="location" />
                      <p className="save_event_data_para">Location:</p>
                    </div>
                    <p className="save_event_data_ans">{event.location}</p>
                  </div>

                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={dateOfPerformance} alt="dop" />
                      <p className="save_event_data_para">
                        Date of Performance :
                      </p>
                    </div>
                    <p className="save_event_data_ans">
                      {event.performanceDate}
                    </p>
                  </div>

                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={amount} alt="dop" />
                      <p className="save_event_data_para">Amount :</p>
                    </div>
                    <p className="save_event_data_ans">{event.budget}</p>
                  </div>

                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={language} alt="dop" />
                      <p className="save_event_data_para">Language :</p>
                    </div>
                    <p className="save_event_data_ans">
                      {" "}
                      <span>
                        {event.languages?.map((lan, index) => (
                          <span key={index}>{lan}</span>
                        ))}
                      </span>
                    </p>
                  </div>

                  <div className="saved_event_data">
                    <div className="saved_event_data_left">
                      <img src={applicationDueDate} alt="dop" />
                      <p className="save_event_data_para">
                        Application Due Date :
                      </p>
                    </div>
                    <p className="save_event_data_ans">
                      {new Date(
                        event.applicationPeriod.end
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                {/* right part  */}
                <div className="saved_event_rightPart">
                  <Link
                    to="/Artist_OpportunityDetails"
                    style={{ textDecoration: "none" }}
                    state={{ job: jobData[index].applicationId }}
                  >
                    <ApplicationButton
                      text={"View Information"}
                      background_flag={true}
                    />
                  </Link>

                 
                </div>
              </div>
            
            </>
          ))}

          <ApplicationButton text={"View More Events"} />
        </div>
        )}
      </div>
    </div>
 )
}

export default RejectedApplicationItems;