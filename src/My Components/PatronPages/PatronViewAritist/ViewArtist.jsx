import "./viewArtist.css";
import ApplicationButton from "../../ArtisitPages/StatusOfApplication/ApplicationButton";
import tick from "./assets/tick.svg";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PortfolioCardTemplate from "./PortfolioCardTemplate"
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
// import PortfolioPhotoSection from "./PortfolioPhotoSection";
// import PortfolioVideoSection from "./PortfolioVideoSection";

const userProfessionDetail = [
    {
        title:"Profession : ",
        info:"Dancer"
    },
    {
        title:"Talents :",
        info:"Dancing, Signing"
    },
    {
        title:"Location :",
        info:"Bangalore"
    },
    {
        title:"Experience :",
        info:"2 Years"
    },
    {
        title:"Events Type :",
        info:"Wedding, House Party"
    },
    {
        title:"Minimum Budget :",
        info:"10K - 20K"
    },
    {
        title:"Instagram :",
        info:"randomusername_1234"
    },
    {
        title:"Facebook :",
        info:"Random_Username"
    },
    {
        title:"Youtube :",
        info:"Random__Channel"
    },

]
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
    // image: mail,
    data: "randomemail@gmail.com",
  },
  {
    image: location,
    data: "123 random street, random city - 123456 random district random state",
  },
];

const aboutMe = "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
const userName = "Mano Selva Vijay";
const profession = "Dancer";

function ViewArtist() {

  const navigate = useNavigate();
  
  return (
    <div className="portfolioDisplay_wrapper">
      <nav className="portfolio_actual_navbar"></nav>

      <h1 className="portfolio_display_heading">Mano Selva Vijay’s Portfolio</h1>

      {/* portfolio card */}
       <PortfolioCardTemplate socalMedia={socalMedia} userDetails={userDetails} profession={profession} userName={userName} />

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
           {
            userProfessionDetail.map((item , index)=>(
                <div key={index} className="single_userProfession_detail">
                    <p className="profession_title">{item.title}</p>
                    <p className="profession_info">{item.info}</p>
                </div>
            ))
           }
      </div>
 
        

      </section>

      {/* <PortfolioPhotoSection /> */}

      {/* <PortfolioVideoSection/> */}
         
    <div className="view_button_Wrapper">
      <button className="hire_btn view_btn " >Hire</button>
      <button className="shortlist_btn view_btn">Shortlist</button>
      <button className="reject_btn view_btn">Reject</button>
    </div>

    </div>
  );
}

export default ViewArtist;
