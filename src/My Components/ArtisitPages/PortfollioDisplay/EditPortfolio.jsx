import "./editPortfolio.css";
import PortfolioCardTemplate from "./PortfolioCardTemplate";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import instagram from "./assets/instagram.svg";
import facebookimg from "./assets/facebookimg.svg";
// import mail from "./assets/Mail.svg";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";
import PortfolioUpdateForm from "./PortfolioUpdateForm";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { useSelector } from "react-redux";
import { artistProfilePoints } from "../../../services/apis";
import { toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  

const EdituserDetails = [
  {
    image: phone,
    data: "Your Phone Number Comes Here",
  },
  {
    // image: mail,
    data: "Your Email Comes Here",
  },
  {
    image: location,
    data: "Your Location Comes Here",
  },
];

const editSocalMedia = [
  {
    image: instagram,
    data: "Instagram Profile Username",
  },
  {
    image: facebookimg,
    data: "Facebook Profile Username",
  },
];

function EditPortfolio() {
  const { accessToken } = useSelector((state) => state.auth);
  const [portfolioData , setPortfolioData] = useState(null);

  const fetchUserData = async()=>{
    try{
      
      const response = await makeAuthenticatedGETRequest(artistProfilePoints.FETCH_PROFILE_DATA_API , accessToken);
      // console.log("res" , response);
      if(response.success === 'success'){
        const {phoneNumber , email,address , handles , firstName , lastName , natureOfArt , category , age , chargePerPerformance , experience , eventType , minimumBudget , noOfPerformance , performanceType } = response.data;
      setPortfolioData({
        phoneNumber , email,address , handles , firstName , lastName , natureOfArt , category ,  age , chargePerPerformance ,experience , eventType , minimumBudget , noOfPerformance  ,performanceType
      })
      }else{
        toast.error('something went wrong , please refresh the page' , {
          position:"top-center"
        });
      }
  
    } catch(error){
      console.log(error);
    }
  }
  
    useEffect(()=>{
     fetchUserData();
    },[])

  return (
    <div className="edit_Portfolio_wrapper">
      <nav className="portfolio_actual_navbar"></nav>
      <h1 className="edit_card_text">Edit Portfolio Card</h1>

      <PortfolioCardTemplate portfolioData={portfolioData} userDetails={EdituserDetails} userName={"Your Name is Here"} profession={"Category"} socalMedia={editSocalMedia} editCard={true} />

      <ApplicationButton text={"Upload Profile Picture"} />

      <PortfolioUpdateForm />
    </div>
  );
}

export default EditPortfolio;
