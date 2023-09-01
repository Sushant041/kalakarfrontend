import "./portfolioDisplay.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import tick from "./assets/tick.svg";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioCardTemplate from "./PortfolioCardTemplate";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import PortfolioPhotoSection from "./PortfolioPhotoSection";
import PortfolioVideoSection from "./PortfolioVideoSection";
import mail from "./assets/Mail.svg"
import { artistProfilePoints } from "../../../services/apis";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { patronProfilePoints } from "../../../services/apis";

const userProfessionDetail = [
  {
    title: "Category : ",
    info: "Dancer",
  },
  {
    title: "Talents :",
    info: "Dancing, Signing",
  },
  {
    title: "Location :",
    info: "Bangalore",
  },
  {
    title: "Experience :",
    info: "2 Years",
  },
  {
    title: "Events Type :",
    info: "Wedding, House Party",
  },
  {
    title: "Minimum Budget :",
    info: "10K - 20K",
  },
  {
    title: "Instagram :",
    info: "randomusername_1234",
  },
  {
    title: "Facebook :",
    info: "Random_Username",
  },
  {
    title: "Youtube :",
    info: "Random__Channel",
  },
];
const socalMedia = [
  {
    image: instagram,
    data: "randomusername_1234",
  },
  {
    image: facebookimg,
    data: "Random_Username",
  },
];
const userDetails = [
  {
    image: phone,
    data: "1234568901",
  },
  {
    image: mail,
    data: "randomemail@gmail.com",
  },
  {
    image: location,
    data: "123 random street, random city - 123456 random district random state",
  },
];

const aboutMe =
  "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.";

const userName = "Mano Selva Vijay";
const profession = "Dancer";

function PatronPortfolioDisplay() {
  const {accessToken} = useSelector((state)=>state.auth);
  const {id} = useParams();

  const [artistData , setArtistData] = useState([]);


  const [portfolioData , setPortfolioData] = useState(null);

  const fetchArtistData = async()=>{
    try{

      const response = await makeAuthenticatedGETRequest( patronProfilePoints.FETCH_SINGLE_ARTIST_API +`/${id}`, accessToken);
      console.log(`res` ,response);
      if(response.success === 'success'){
        setArtistData(response.data);

      }
      else{
        toast.error(response.message);
      }
    } catch(error){
      console.log(error);
      toast.error('something went wrong ,please try again');
    }
  }

  useEffect(()=>{
  fetchArtistData();
  },[])



  return (
    <div className="portfolioDisplay_wrapper">
      <nav className="portfolio_actual_navbar"></nav>

      <h1 className="portfolio_display_heading">{artistData?.userId?.fullName} </h1>

      {/* portfolio card */}
      <PortfolioCardTemplate portfolioData={portfolioData} socalMedia={socalMedia} userDetails={userDetails} userName={userName} />

      {/* two buttons */}
      <section className="card_button_wrapper">
        <ApplicationButton text={"Share Card"} />
        <ApplicationButton text={"Edit Card"} />
      </section>

      {/* user details section */}
      <section className="portfolio_usersDetails">
        {/* name and 5 star  */}
        <div className="userName_review_container">
          <div className="portfolio_verify_userName">
            <p className="portfolio_userName">{userName}</p>
            <div className="portfolio_verify_img">
              {" "}
              <img src={tick} alt="tick" />{" "}
            </div>
          </div>

          {/* review part  */}
          <div className="user_star_review_container">
            <div className="star_container">
              {/* star */}
              <div className="all_stars">
                <AiFillStar className="filledStar" />
                <AiFillStar className="filledStar" />
                <AiFillStar className="filledStar" />
                <AiFillStar className="filledStar" />
                <AiOutlineStar className="emptyStar" />
              </div>

              <p className="No_review_text">(45 Reviews )</p>
            </div>

            <p className="read_review_text">Read Reviews</p>
          </div>
        </div>

        <div className="userAbout_section">
          <h1 className="about_me_text">About Me</h1>
          <p className="user_aboutMe_detail">{aboutMe}</p>
        </div>

        <div className="user_profession_details">
         
        <div  className="single_userProfession_detail">
              <p className="profession_title">Profession :</p>
              <p className="profession_info">{portfolioData?.natureOfArt ?(portfolioData?.natureOfArt):('your Profession')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Talents :</p>
              <p className="profession_info">{portfolioData?.handles.youtube ?(portfolioData?.handles.youtube):('your_talent')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Location :</p>
              <p className="profession_info">{portfolioData?.address.state ?(portfolioData.address.state):('your_location')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Experience :</p>
              <p className="profession_info">{portfolioData?.experience ?(portfolioData.experience):('your_experience')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Events Type :</p>
              <p className="profession_info">{portfolioData?.eventType ?(portfolioData.eventType):('your_eventType')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Minimum Budget :</p>
              <p className="profession_info">{portfolioData?.minimumBudget ?(portfolioData.minimumBudget):('your_minBudget')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Instagram :</p>
              <p className="profession_info">{portfolioData?.handles.instagram ?(portfolioData?.handles.instagram):('Random__Channel')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Facebook :</p>
              <p className="profession_info">{portfolioData?.handles.facebook ?(portfolioData?.handles.facebook):('Random__Channel')}</p>
            </div>
            <div  className="single_userProfession_detail">
              <p className="profession_title">Youtube :</p>
              <p className="profession_info">{portfolioData?.handles.youtube ?(portfolioData?.handles.youtube):('Random__Channel')}</p>
            </div>
         
        </div>
      </section>

      <PortfolioPhotoSection />

      <PortfolioVideoSection />

      <ApplicationButton  text={"Send Invite"} />
    </div>
  );
}

export default PatronPortfolioDisplay;
