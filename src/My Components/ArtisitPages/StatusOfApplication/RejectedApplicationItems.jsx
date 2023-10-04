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



function RejectedApplicationItems({currentEvent , jobData ,loading}){


 return (
    <div className="rejected_Application_wrapper">
      <p className="rejected_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      {
        loading ?(
          <div className="custom-loader" style={{ margin: "0 auto" }}></div>

        ):(
          <div className="rejected_event_Detail_Container">
          {
            
          }
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
                    <h3 className="single_inprogress_heading">{event?.opportunity?.position}</h3>
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={artnature} alt="location" />
                        <p className="inprogress_text">Nature Of Art:</p>
                      </div>
                      <p  className="inprogress_text">{event?.opportunity?.artNature}</p>
                    </div>
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={category} alt="location" />
                        <p className="inprogress_text">Category:</p>
                      </div>
                      <p className="inprogress_text">{event?.opportunity?.category}</p>
                    </div>
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={location} alt="location" />
                        <p className="inprogress_text">Location:</p>
                      </div>
                      <p className="inprogress_text">{event?.opportunity?.location}</p>
                    </div>
  
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={dateOfPerformance} alt="dop" />
                        <p className="inprogress_text">
                          Date of Performance :
                        </p>
                      </div>
                      <p className="inprogress_text">
                      {new Date(
                            event?.opportunity?.performanceDate
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                      </p>
                    </div>
  
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={amount} alt="dop" />
                        <p className="inprogress_text">Amount :</p>
                      </div>
                      <p className="inprogress_text">{event?.opportunity?.budget}</p>
                    </div>
  
                    <div className="saved_event_data">
                      <div className="saved_event_data_left">
                        <img src={language} alt="dop" />
                        <p className="inprogress_text">Language :</p>
                      </div>
                      <p className="inprogress_text">
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
                        <p className="inprogress_text">
                          Application Due Date :
                        </p>
                      </div>
                      <p className="inprogress_text">
                        {new Date(
                          event?.opportunity?.applicationPeriod.end
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
             <Link to={'/Artist_Opportunities'}>
            <ApplicationButton text={"View More Events"} />
             </Link>
          </div>
          )}
        </div>
        )
      }
   
    </div>
 )
}

export default RejectedApplicationItems;