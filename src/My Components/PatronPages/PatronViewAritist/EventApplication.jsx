import "./eventApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import { useState } from "react";
import category from "./assets/category.svg";
import date from "./assets/date.svg";
import opening from "./assets/opening.svg";
import posted from "./assets/posted.svg";
import RectangleImg from "./assets/RectangleImg.svg";
import ekalakaa from "./assets/ekalakaa.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import DP from "./assets/DP.svg";
import anvelop from "./assets/anvelop.svg";
import eventBg from "./assets/eventBg.jpg";

const jobDescPara =
  "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.Gorem ipsum dolor sit amet, consectetur adipiscing elit.";

const jobDesList = [
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
  {
    title:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,",
  },
];

const btnData = [
  {
    title: "Application",
  },
  {
    title: "Shortlisted",
  },
  {
    title: "Hired",
  },
];

const jobOverview = [
  {
    image: category,
    title1: "category",
    title2: "Kathak Dance",
  },
  {
    image: posted,
    title1: "Application Posted",
    title2: "28/07/23",
  },
  {
    image: date,
    title1: "application due date",
    title2: "08/08/23",
  },
  {
    image: opening,
    title1: "openings",
    title2: "5",
  },
];

const cardDetail = [
  {
    image: phone,
    title: "1234568901",
  },
  {
    image: anvelop,
    title: "randomemail@gmail.com",
  },
  {
    image: location,
    title:
      "123 random street, random city - 123456 random district random state",
  },
];

const socialDetail = [
  {
    image: instagram,
    title: "randomusername_1234",
  },
  {
    image: facebookimg,
    title: "Random_Username",
  },
];



const userName = "Mano Selva Vijay";
const userProfession = "Dancer";

function EventApplication() {
  const [currentEvent, setCurrentEvent] = useState("Application");

  return (
    <div className="patron_event_appli_wrapper">
      {/* image section */}
      <section className="event_image_section">
        <img src={eventBg} alt="background" className="event_bgImg" />
        <img src={bgFilter} alt="" className="event_appli_bgFilter" />
        <p className="event_application_text">
          Event Application for Kathak Dance
        </p>
      </section>

      {/* job description */}
      <section className="patron_job_description_wrapper">
        {/* left side */}
        <div className="job_description_container">
          <p className="job_description_text">Job Description</p>
          <p className="job_description_para">{jobDescPara}</p>
          <ul className="job_des_allList">
            {jobDesList.map((desc, index) => (
              <li className="job_des_list" key={index}>
                {desc.title}
              </li>
            ))}
          </ul>

          <div className="desc_buttons">
            {btnData.map((btn, index) => (
              <button
                onClick={() => setCurrentEvent(btn.title)}
                className={`${
                  currentEvent === btn.title ? "event_currentBtn" : "event_btn"
                }`}
                key={index}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="job_overview_container">
          <p className="job_overview_text">Job Overview</p>

          <div className="all_job_overview">
            {jobOverview.map((data, index) => (
              <div key={index} className="single_job_overview">
                <img src={data.image} alt="" className="single_overview_img" />
                <p className="single_job_category">{data.title1}</p>
                <p className="single_job_title">{data.title2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* ⚠️ when actual data of all application will come , use map funtion and put this section inside it  */}
      {/* user detail box   */}

      {/* for application section  */}
      {
        currentEvent === 'Application' && 
      
      <section className="patron_event_detail_Section">
        {/*box ka left part */}
        <div className="event_card_wrapper">
          {/* card ka left part */}
          <div className="card_left_container">
            <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
            <div className="card_user_personal_details">
              {cardDetail.map((data, index) => (
                <div key={index} className="single_personalDetail">
                  <div className="personal_Detail_img">
                    {" "}
                    <img src={data.image} alt="" />{" "}
                  </div>
                  <p className="personal_detail_title">{data.title}</p>
                </div>
              ))}
            </div>

            {/* social media */}
            <div className="user_socical_details_container">
              {socialDetail.map((data, index) => (
                <div key={index} className="single_socail_detail">
                  <img src={data.image} alt="" className="socail_img" />
                  <p className="social_title">{data.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* strip */}
          <img src={RectangleImg} alt="" className="card_strip" />
          {/* ṛight part */}
          <div className="card_right_part">
            <img src={DP} alt="" className="userDP" />
            <p className="card_right_userName">{userName}</p>
            <p className="card_right_user_profession">{userProfession}</p>
          </div>
        </div>

        {/* right part */}
        <div className="event_detail_wrapper">

{/* top  */}
<div className="event_appli_details" >
   <div className="single_event_appli_detail" > 
        <p className="single_detail_title">Applied On</p>
        <p className="single_detail_ans">07/08/2023</p>
    </div>    
   <div className="single_event_appli_detail" > 
        <p  className="single_detail_title">Location</p>
        <p className="single_detail_ans">Chennai</p>
    </div>    
   <div className="single_event_appli_detail" > 
        <p  className="single_detail_title">Ratings</p>
        <p ></p>
    </div>    
  
</div>

{/* bottom button */}
<button className="view_Profile_btn">View Profile</button>

        </div>
      </section>

              }


{/* ⚠️ for shortlisted section  */}
              {
                currentEvent === 'Shortlisted' && 
                <section className="patron_event_detail_Section">
                {/*box ka left part */}
                <div className="event_card_wrapper">
                  {/* card ka left part */}
                  <div className="card_left_container">
                    <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
                    <div className="card_user_personal_details">
                      {cardDetail.map((data, index) => (
                        <div key={index} className="single_personalDetail">
                          <div className="personal_Detail_img">
                            {" "}
                            <img src={data.image} alt="" />{" "}
                          </div>
                          <p className="personal_detail_title">{data.title}</p>
                        </div>
                      ))}
                    </div>
        
                    {/* social media */}
                    <div className="user_socical_details_container">
                      {socialDetail.map((data, index) => (
                        <div key={index} className="single_socail_detail">
                          <img src={data.image} alt="" className="socail_img" />
                          <p className="social_title">{data.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* strip */}
                  <img src={RectangleImg} alt="" className="card_strip" />
                  {/* ṛight part */}
                  <div className="card_right_part">
                    <img src={DP} alt="" className="userDP" />
                    <p className="card_right_userName">{userName}</p>
                    <p className="card_right_user_profession">{userProfession}</p>
                  </div>
                </div>
        
                {/* right part */}
                <div className="event_detail_wrapper">
        
        {/* top  */}
        <div className="event_appli_details" >
           <div className="single_event_appli_detail" > 
                <p className="single_detail_title">Applied On</p>
                <p className="single_detail_ans">07/08/2023</p>
            </div>    
           <div className="single_event_appli_detail" > 
                <p  className="single_detail_title">Location</p>
                <p className="single_detail_ans">Chennai</p>
            </div>    
           <div className="single_event_appli_detail" > 
                <p  className="single_detail_title">Ratings</p>
                <p ></p>
            </div>    
          
        </div>
        
        {/* bottom button */}
        <button className="view_Profile_btn">View Profile</button>
        <button className="chat_artist_btn">Chat With Artist</button>
        
                </div>
              </section>
              }
              

              {/*! for Hired section  */}
              {
                currentEvent === 'Hired' && 
                <section className="patron_event_detail_Section">
                {/*box ka left part */}
                <div className="event_card_wrapper">
                  {/* card ka left part */}
                  <div className="card_left_container">
                    <img src={ekalakaa} className="card_left_ekalakaar" alt="" />
                    <div className="card_user_personal_details">
                      {cardDetail.map((data, index) => (
                        <div key={index} className="single_personalDetail">
                          <div className="personal_Detail_img">
                            {" "}
                            <img src={data.image} alt="" />{" "}
                          </div>
                          <p className="personal_detail_title">{data.title}</p>
                        </div>
                      ))}
                    </div>
        
                    {/* social media */}
                    <div className="user_socical_details_container">
                      {socialDetail.map((data, index) => (
                        <div key={index} className="single_socail_detail">
                          <img src={data.image} alt="" className="socail_img" />
                          <p className="social_title">{data.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* strip */}
                  <img src={RectangleImg} alt="" className="card_strip" />
                  {/* ṛight part */}
                  <div className="card_right_part">
                    <img src={DP} alt="" className="userDP" />
                    <p className="card_right_userName">{userName}</p>
                    <p className="card_right_user_profession">{userProfession}</p>
                  </div>
                </div>
        
                {/* right part */}
                <div className="event_detail_wrapper">
        
        {/* top  */}
        <div className="event_appli_details" >
           <div className="single_event_appli_detail" > 
                <p className="single_detail_title">Applied On</p>
                <p className="single_detail_ans">07/08/2023</p>
            </div>    
           <div className="single_event_appli_detail" > 
                <p  className="single_detail_title">Location</p>
                <p className="single_detail_ans">Chennai</p>
            </div>    
           <div className="single_event_appli_detail" > 
                <p  className="single_detail_title">Ratings</p>
                <p ></p>
            </div>    
          
        </div>
        
        {/* bottom button */}
        <button className="view_Profile_btn">View Profile</button>
        <button className="chat_artist_btn">Chat With Artist</button>
        
                </div>
              </section>
              }
    </div>
  );
}

export default EventApplication;
