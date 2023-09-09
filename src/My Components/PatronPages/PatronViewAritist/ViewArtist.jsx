import "./viewArtist.css";
import tick from "./assets/tick.svg";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioCardTemplate from "./PortfolioCardTemplate"
import phone from "./assets/phone.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
import { makeAuthenticatedGETRequest, makeAuthenticatedPATCHRequestWithoutBody } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";



function ViewArtist() {

  const {accessToken} = useSelector((state)=>state.auth);

  const location = useLocation();

  const applicationId = location.state?.applicationId;

  const navigate = useNavigate();

  console.log('applicid' ,applicationId);

  
  const [artistData , setArtistData] = useState([]);

  const [userDetails , setUserDetails] = useState([
    {
      image: phone,
      data: "",
    },
    {
      // image: mail,
      data: "",
    },
    {
      image: location,
      data: "",
    },
  ])
  
  const {id} = useParams();
  
  // this is for fetch the artist 
  const fetchArtistData = async()=>{
    try{
      const response = await makeAuthenticatedGETRequest(patronProfilePoints.GET_SINGLE_ARTIST_DATA_API + `${id}` , accessToken);
      console.log('ress' , response);
      if(response.success === 'success'){
        setArtistData(response.data);
      }
      else {
        toast.error(response.message);
      }
      
    } catch(error){
      console.log(error);
      
    }
  }

  const [socalMedia , setSocialMedia] = useState([
    {
      image: instagram,
      data: "",
    },
    {
      image: facebookimg,
      data: "",
    },
  ])
  
  useEffect(()=>{
    fetchArtistData();
  },[])

   useEffect(()=>{
    const updatedSocialMedia = [...socalMedia];
    
    updatedSocialMedia[0].data = `${artistData?.handles?.instagram}`;
    
    updatedSocialMedia[1].data = `${artistData?.handles?.facebook}`;
    
    setSocialMedia(updatedSocialMedia);

    // to set the userDetails
    const updatedUserDetai = [...userDetails];
    updatedUserDetai[0].data = `${artistData?.phoneNumber}`;
    updatedUserDetai[1].data = `${artistData?.email}`;
    updatedUserDetai[2].data = `${artistData?.address?.detailedAddress}`;
   },[artistData])
  
  const userName =`${artistData.firstName}  ${artistData.lastName}`;



  // this is to hired the artist 
const hireArtistHandler = async ()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequestWithoutBody(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}?status=Hired` , accessToken);
    console.log('rress' , response);
    if(response.success === 'success'){
      toast.success('successfuly hired');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);
}

// this is for rejct application
const rejectArtistHandler =  async()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequestWithoutBody(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}?status=Rejected` , accessToken);
    console.log('rress' , response);
    if(response.success === 'success'){
      toast.success('successfuly Rejected');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);


}

// this is for shortlist application
const shortlistArtistHandler = async()=>{
  const toastId = toast.loading('Loading...');
  try{

    const response = await makeAuthenticatedPATCHRequestWithoutBody(patronProfilePoints.HIRED_REJECT_SHORTLIST_ARTIST_API +`/${applicationId}?status=In-Progress` , accessToken);
    console.log('rress' , response);
    if(response.success === 'success'){
      toast.success('successfuly Shorlisted');
      navigate(-1);
    }
    else {
      toast.error(response.message);
    }
  } catch(error){
  console.log(error);
  toast.error('internal server error');
  }
  toast.dismiss(toastId);


}

  return (
    <div className="portfolioDisplay_wrapper">
   

      <h1 className="portfolio_display_heading">{artistData?.firstName} {artistData?.lastName} Portfolio</h1>

      {/* portfolio card */}
       <PortfolioCardTemplate socalMedia={socalMedia} userDetails={userDetails} profession={artistData?.natureOfArt} userName={userName} />

      

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
              <p className="user_aboutMe_detail">{artistData?.aboutJourney}</p>
        </div>

      <div className="user_profession_details">
           
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Profession</p>
                    <p className="profession_info">{artistData?.natureOfArt}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Talent</p>
                    <p className="profession_info">NA</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Location</p>
                    <p className="profession_info">{artistData?.address?.district} {artistData?.address?.state},{artistData?.address?.pincode}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Experience</p>
                    <p className="profession_info">{artistData?.experience}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Event Type</p>
                    <p className="profession_info">{artistData?.performanceEvents}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Minimum Budget</p>
                    <p className="profession_info">{artistData?.minimumBudget}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Instagram</p>
                    <p className="profession_info">{artistData?.handles?.instagram}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Facebook</p>
                    <p className="profession_info">{artistData?.handles?.facebook}</p>
                    
                </div>
                <div  className="single_userProfession_detail">
                    <p className="profession_title">Youtube</p>
                    <p className="profession_info">{artistData?.handles?.youtube}</p>
                    
                </div>
          
      </div>

      
 
        

      </section>

      {/* <PortfolioPhotoSection /> */}

      {/* <PortfolioVideoSection/> */}
      
         
    <div className="view_button_Wrapper">
      <button onClick={hireArtistHandler} className="hire_btn view_btn " >Hire</button>
      <button onClick={shortlistArtistHandler} className="shortlist_btn view_btn">Shortlist</button>
      <button onClick={rejectArtistHandler} className="reject_btn view_btn">Reject</button>
    </div>

    </div>
  );
}

export default ViewArtist;
