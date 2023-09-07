import "./eventApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { patronProfilePoints } from "../../../services/apis";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import PatronPortfolioDisplay from "../../ArtisitPages/PortfollioDisplay/PatronPortfolioDisplay";



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
  const {accessToken} = useSelector((state)=>state.auth);
  const [eventDetail , setEventDetail] = useState([]);

  const [cardDetail , setCardDetail] = useState( [
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
  ]
  );
  
  const [appliId , setAppliId] = useState(null);
  const {id} = useParams();


  const [jobOverview , setJobOverview] = useState([
    {
      image: category,
      title1: "category",
      title2: "",
    },
    {
      image: posted,
      title1: "Application Posted",
      title2: "",
    },
    {
      image: date,
      title1: "application due date",
      title2: "",
    },
    {
      image: opening,
      title1: "openings",
      title2: "",
    },
  ])

  const updateTitle2 = (index, newTitle2) => {
    setJobOverview(prevJobOverview => {
      const updatedJobOverview = prevJobOverview.map((item, i) =>
        i === index ? { ...item, title2: newTitle2 } : item
      );
      return updatedJobOverview;
    });
  };


  const fetchArtistApplication = async()=>{
    try{

      const response = await makeAuthenticatedGETRequest(patronProfilePoints.FETCH_PATRON_ALL_APPLI_API +`/${id}` , accessToken);
      console.log('fetchappli' , response);

    } catch(error){
      console.log(error);
      toast.error('Something went wrong , please try again');
    }
  }

  useEffect(()=>{
 fetchArtistApplication();
  },[])



  // const fetchOpporById = async()=>{
  //   try{
  //     const response = await makeAuthenticatedGETRequest(patronProfilePoints.FETCH_PATRON_APPLI_API + `/${id}` , accessToken);
  //     console.log('res',response);
  //     if(response.success === 'success'){
            


  //         const {applicationPeriod , requiredArtists , artNature ,_id} = response.data;
  //         console.log('idd' ,_id);
          
  //         setAppliId(_id);

  //           updateTitle2(0 , artNature);
  //           updateTitle2(1 , new Date(applicationPeriod.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
  //           updateTitle2(2 , new Date(applicationPeriod.end).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
  //           updateTitle2(3 , requiredArtists);

  //       setEventDetail(response.data);
        
  //     }
  //     else{
  //       toast.error(response.message);
  //     }
  //   } catch(error){
  //     console.log(error);
  //     toast.error('something went wrong , please try again');
  //   }
  // }

//   console.log('evend' ,eventDetail);
// useEffect(()=>{
//  fetchOpporById();
// },[])

// const fetchOpporApplication = async()=>{
//   try{

//     const response = await makeAuthenticatedGETRequest(patronProfilePoints.FETCH_SINGLE__APPLI_API + `/${appliId}` , accessToken);
//     console.log('alpppli' ,response);

//   } catch(error){
//     console.log(error);
//     toast.error('something went wrong , please try again');
//   }
// }

// useEffect(()=>{
//  fetchOpporApplication();
// },[appliId])

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
          <p className="job_description_para">{eventDetail.description}</p>
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

      {/* ⚠️ for application section  */}
      {
        currentEvent === 'Application' && 
      
      <section className="patron_event_detail_Section">
        {/*box ka left part ==> card  */}
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

{/* ṃiddle part */}
<div style={{width:"90%" , }}>
  <p style={{fontFamily:"Poppins" , fontWeight:"500" , opacity:"0.7" ,color:"black" ,textAlign:"left"}}>Why do you want ot Apply for this Role?</p>
  <p style={{fontFamily:"Poppins" , fontWeight:"500" , opacity:"0.7" ,color:"black" ,textAlign:"left"}}>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
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
