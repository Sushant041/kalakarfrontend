import noData from "./assets/noData.svg";
import location from "./assets/location.svg";
import language from "./assets/language.svg";
import applicationDueDate from "./assets/applicationDueDate.svg";
import amount from "./assets/amount.svg";
import dateOfPerformance from "./assets/dateOfPerformance.svg";
import "./saveApplicationItems.css";
import ApplicationButton from "./ApplicationButton";
import NoDataTemplate from "./NoDataTemplate";
import { Link } from "react-router-dom";
import { makeAuthenticatedDELETERequest } from "../../../services/serverHelper";
import { statusOfAppliPoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useEffect, useState } from "react";
import artnature from "./assets/natureOfArt.svg"
import category from "./assets/category.svg"

function SaveApplicationItems({ loading, setLoading, currentEvent }) {
  const { accessToken } = useSelector((state) => state.auth);

  const [jobData, setJobData] = useState([]);

  const fetchSavedApplication = async () => {
    setLoading(true);
    try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_SAVED_APPLI_API,
        accessToken
      );
      console.log("avedresponse", response);
      if (response.success === "success") {
        setJobData(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please  try again");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSavedApplication();
  }, []);

  const unsaveHandler = async (id) => {
    console.log("id", id);
    setLoading(true);
    try {
      const response = await makeAuthenticatedDELETERequest(
        statusOfAppliPoints.FETCH_SAVED_APPLI_API + `/${id}`,
        accessToken
      );
      console.log("[res", response);
      if (response.success === "success") {
        toast.success("Successfully Unsaved the Application");
        fetchSavedApplication();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
  };

  return (
    <div className="saveApplicationItems_Wrapper">
      <p className="saved_event_text">
        {currentEvent} Events : {jobData.length}{" "}
      </p>
      {loading ? (
        <div className="custom-loader" style={{ margin: "0 auto" }}></div>
      ) : (
        <div className="saved_event_Detail_Container">
          {jobData.length === 0 ? (
            <NoDataTemplate
              image={noData}
              para={"You haven't saved for any events application"}
            />
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
                        state={{ job: jobData[index] }}
                      >
                        <ApplicationButton
                          text={"More Information"}
                          background_flag={true}
                        />
                      </Link>

                      <ApplicationButton text={"Apply Now"} />
                    </div>
                  </div>
                  <div
                    onClick={() => unsaveHandler(event._id)}
                    className="remove_from_saved_text"
                  >
                    Remove from Saved
                  </div>
                </>
              ))}

           <Link style={{textDecoration:"none"}} to={"/Artist_Opportunities"}>
              <ApplicationButton text={"View More Events"} />
           </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SaveApplicationItems;
