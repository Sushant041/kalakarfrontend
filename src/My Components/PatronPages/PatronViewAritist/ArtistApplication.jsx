import "./artistApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import background from "./assets/background.svg";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate  } from "react-router-dom";


const filterData = [
  {
    title: "Posted at",
  },
  {
    title: "Events",
  },
  {
    title: "Status ",
  },
  {
    title: "Sort by",
  },
];



function ArtistApplication() {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [artistForm, setArtistForm] = useState([]);

  const fetchArtistAppli = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        patronProfilePoints.GET_PATRON_APPLI_API,
        accessToken
      );
      console.log("res", response);
      if (response.success === "success") {
        setArtistForm(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
  };

  useEffect(() => {
    fetchArtistAppli();
  }, []);

  return (
    <div className="patron_artist_appli_wrapper">
      <section className="artist_image_section">
        <img src={background} alt="background" className="artist_bgImg" />
        <img src={bgFilter} alt="" className="artist_bgFilter" />
        <p className="artist_application_text">Applications</p>
      </section>

      <section className="artist_filter_section">
        {  filterData.map((data, index) => (
          <div key={index} className="single_artist_filter">
            <p className="single_artist_title">{data.title}</p>
            <select name="" id="" className="single_artist_select">
              <option
                selected
                disabled
                value=""
                className="single_artist_options"
              >
                Select
              </option>
            </select>
          </div>
        ))}
      </section>

      {/* table section  for large width */}
      <section className="artist_application_form_container">
        <div className="artist_form_head">
          <p className="artist_head_date">Date</p>
          <p className="artist_head_Event">Event</p>
          <p className="artist_head_appli">Applications</p>
          <p className="artist_head_status">Application Status</p>
          <p className="artist_head_deadline">Deadline</p>
        </div>

        <div className="artist_form_body">
          {artistForm.length > 0 &&  artistForm.map((data, index) => (
            
            <div key={index} className="single_artist_body_row">
              <p className="body_date artist_body ">{new Date(data.applicationPeriod.start)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              <p className="body_event artist_body">{data.position?.split("").slice(0,30).join("")}..</p>
           =
             <p onClick={()=>navigate(`/patron-event-appli/${data._id}` , {state : {dataObj :data}}) } className="body_appli artist_body">
                {data.application}{" "}
                <span className="view_appli_text artist_body">
                  {data.totalApplicants}(View Applications)
                </span>{" "}
              </p>
           
              <p
                className={`body_status artist_body ${
                  !data.active ? "statusClose" : "statusOpen"
                } `}
              >
                {data.active ?('Open'):('Close')}
              </p>
              <p className="body_deadline artist_body">{new Date(data.applicationPeriod.end)
  .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
          ))}
        </div>
      </section>

      {/* table section for small width */}
      <section className="artist_event_appli_container">
        {artistForm.map((data, index) => (
          <div key={index} className="single_artist_event">
            <div className="single_element">
              <p className="single_ele_title">Date</p>
              <p>{data.date}</p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Event</p>
              <p>{data.event}</p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Applications</p>
             <Link to={`/patron-event-appli/${data._id}`}  >
             <p style={{cursor:"pointer"}}>
                {data.application}{" "}
                <span className="view_appli_text">(View Applications)</span>
              </p>
             </Link> 
            </div>
            <div className="single_element">
              <p className="single_ele_title">Application Status</p>
              <p
                className={`${
                  data.status === "Closed" ? "statusClose" : "statusOpen"
                }`}
              >
                {data.status}
              </p>
            </div>
            <div className="single_element">
              <p className="single_ele_title">Deadline</p>
              <p>{data.deadline}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ArtistApplication;
