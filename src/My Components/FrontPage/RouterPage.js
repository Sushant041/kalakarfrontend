import { HomePage } from "./HomePage";
import { EkPhotos } from "./EkPhotos";
import { EkVideos } from "./EkVideos";
import { EkPrint } from "./EkPrint";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Ekevents } from "./Ekevents";
import { LoginPage } from "../LoginPages/LoginPage";
import Choosing from "../LoginPages/Choosing";
import Signup from "../../My Components/LoginPages/Authorization/Signup";
import ResetPassword from "../../My Components/LoginPages/Authorization/ResetPassword";
import ForgetPassword from "../../My Components/LoginPages/Authorization/ForgetPassword";
import VerificationCode from "../../My Components/LoginPages/Authorization/VerificationCode";
import { useSelector } from "react-redux";
import { Artist_Profile } from "../ArtisitPages/ProfilePages/Artist_Profile";
import { Artist_OpportunitiesMoreInfo } from "../ArtisitPages/ProfilePages/Artist_OpportunitiesMoreInfo";
import { Newsletter } from "../ArtisitPages/Newsletter/Newsletter";
import { Artist_Opportunities } from "../ArtisitPages/ProfilePages/Artist_Opportunities";
import StatusOfApplication from "../ArtisitPages/StatusOfApplication/StatusOfApplication";
import PortfolioDisplay from "../ArtisitPages/PortfollioDisplay/PortfolioDisplay";
import EditPortfolio from "../ArtisitPages/PortfollioDisplay/EditPortfolio";
import ContactUs from "../ArtisitPages/ContactUs/ContactUs";
import ChatViewSection from "../ArtisitPages/ChatDisplay/ChatViewSection";
import ChatDisplay from "../ArtisitPages/ChatDisplay/ChatDisplay";
import PatronProfile from "../PatronPages/PatronProfile/PatronProfile";
import ArtistProfiles from "../PatronPages/ArtistProfiles/ArtistProfiles";
import ViewArtist from "../PatronPages/PatronViewAritist/ViewArtist";
import EventApplication from "../PatronPages/PatronViewAritist/EventApplication";
import ArtistApplication from "../PatronPages/PatronViewAritist/ArtistApplication";
import Partner_Profile from "../PartnersPages/ProfilePage/Partner_Profile";
import AboutPartner from "../PartnersPages/AboutUs/AboutPartner";
import EditAboutPartner from "../PartnersPages/AboutUs/EditAboutPartner";
import SellProduct from "../PartnersPages/SellProduct/SellProduct";
import MyProductsandCourses from "../PartnersPages/MyProducts/MyProductsandCourses";
import SkillDevelopment from "../ArtisitPages/Skill Development/SkillDevelopment"
import CourseCategories from "../ArtisitPages/Course Categories/CourseCategories"
import PatronPortfolioDisplay from "../ArtisitPages/PortfollioDisplay/PatronPortfolioDisplay";
import UploadedOpportunities  from "../PatronPages/OpportunitesforArtist/UploadedOpportunities";
import UploadOpportunities from "../PatronPages/OpportunitesforArtist/UploadOpportunities";
import EditOpportunity from "../PatronPages/OpportunitesforArtist/EditOpportunity";
import Patron_Portfolio from "../PatronPages/PatronProfile/Portfolio/Patron_Portfolio"
import Edit_Patron_Portfolio from "../PatronPages/PatronProfile/Portfolio/Edit_Patron_Portfolio"




export default function RouterPage() {

  const {role , accessToken } = useSelector((state)=>state.auth);

  return (
    <div>
      <Routes>

        {
          !accessToken && 
          <>
          <Route path="/Login" exact element={<LoginPage />} />
        <Route path="/Choose" exact element={<Choosing />} />
        <Route path="/register" exact element={<Signup />} />
        <Route path="/resetPassword" exact element={<ResetPassword />} />
        <Route path="/forgetPassword" exact element={<ForgetPassword />} />
        <Route path="/verifyCode" exact element={<VerificationCode />} />

          </>
        }
        <Route path="/" exact element={<HomePage />} />
        <Route path="/EkPhotos" exact element={<EkPhotos />} />
        <Route path="/EkVideos" exact element={<EkVideos />} />
        <Route path="/EkPrint" exact element={<EkPrint />} />
        <Route path="/Ekevents" exact element={<Ekevents />} />

        
        {
          role === 'Artist' && (
            <>
            
            <Route path="/Artist_Profile" exact element={<Artist_Profile />} />
        <Route path="/Artist_Opportunities" exact element={<Artist_Opportunities />} />
        <Route path="/statusOfApplication" element={<StatusOfApplication />} />
        <Route path="/Artist_OpportunityDetails" exact element={<Artist_OpportunitiesMoreInfo />} />
        <Route path="/PortfolioDisplay" element={<PortfolioDisplay />} />
        <Route path="/patron_view_artist/:id" element={<PatronPortfolioDisplay />} />
        <Route path="/EditPortfolio" element={<EditPortfolio />} />
        <Route path="/latestNews" exact element={<Newsletter />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/chatApp" element={<ChatDisplay />} />
        <Route path="/viewChat/:id" element={<ChatViewSection showViewChat={true} />} />
            </>
          )

        }

        {
          role === 'Patron' && 
          (
            <>
             <Route path="/UploadOpportunity" exact element={<UploadOpportunities />} />
        <Route path="/UploadedOpportunities" exact element={<UploadedOpportunities />} />
        <Route path="/EditOpportunity" exact element={<EditOpportunity />} />
        <Route path="/Patron_Profile" element={<PatronProfile />} />
        <Route path="/ViewArtistProfiles" element={<ArtistProfiles />} />
        <Route path="/patron-view-artist/:id" element={<ViewArtist />} />
        <Route path="/patron-event-appli/:id" element={<EventApplication />} />
        <Route path="/patron-artist-appli" element={<ArtistApplication />} />
        <Route path="/Patron_Portfolio" exact element={<Patron_Portfolio/>}/>
        <Route path="/Edit_Patron_Portfolio" exact element={<Edit_Patron_Portfolio/>}/>
<Route path="/Patron_Portfolio" exact element={<Patron_Portfolio/>}/>
<Route path="/Edit_Patron_Portfolio" exact element={<Edit_Patron_Portfolio/>}/>
            </>

          )
        }
        
    

       


        <Route path="/partner-profile" element={<Partner_Profile />} />
        <Route path="/skilldevelopment" element={<SkillDevelopment />} />
        <Route path="/CourseCategories" exact element={<CourseCategories />} />
        

        <Route path="/About_Partner" exact element={<AboutPartner />} />
        <Route path="/Edit_About_Partner" exact element={<EditAboutPartner />} />
        <Route path="/SellProduct" exact element={<SellProduct />} />
        <Route path="/Partner_ProductsandCourses" exact element={<MyProductsandCourses />} />
   </Routes>
    </div>
  );
}
