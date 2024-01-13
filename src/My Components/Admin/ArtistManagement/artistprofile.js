// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";
// import { IoMusicalNote } from "react-icons/io5";
// import { FaStarOfDavid } from "react-icons/fa";
// import "./artistprofile.css";
// const YourComponent = () => {
//   return (
//     <>
//       <div className="artist_top-division">
//         <div class="artist_circleprofile">
//           <img src="./profile.webp" alt="" />
//         </div>
//         <h1>Kavya</h1>
//       </div>
//       <div className="artist-ManageProfile">
//         <h1>
//           {" "}
//           <FaUser /> Basic Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">First Name:</div>
//             <div class="profile_heading">Last Name:</div>
//             <div class="profile_heading">Email:</div>
//             <div class="profile_heading">Contact Number:</div>
//             <div class="profile_heading">Age:</div>
//             <div class="profile_heading">Gender:</div>
//             <div class="profile_heading">Pincode:</div>
//             <div className="profile_heading">Language:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">Kavya</div>
//             <div class="profile_heading">XXXX</div>
//             <div class="profile_heading">kxxxxx@gmail.com</div>
//             <div class="profile_heading">2658923480XX</div>
//             <div class="profile_heading">29</div>
//             <div class="profile_heading">F</div>
//             <div class="profile_heading">364794</div>
//             <div className="profile_heading">Tamil</div>
//             </div>

//         </div>

//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <FaMicrophone/> Art Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Category of Art:</div>
//             <div class="profile_heading">Name of Art:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">Dance</div>
//             <div class="profile_heading">Kathakali</div>
//             </div>
//         </div>
//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <IoMusicalNote/> Performance Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Total No of Performance:</div>
//             <div class="profile_heading">Experience:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">11</div>
//             <div class="profile_heading">15</div>
//             </div>
//         </div>
//       </div>
//       <div className="artist_art-ManageProfile">
//         <h1>
//           {" "}
//           <FaStarOfDavid/> Award Profile
//         </h1>
//         <div class="profile-card">
//           <div class="left-division">
//             <div class="profile_heading">Total Number of Awards:</div>
//             <div class="profile_heading">Highest Level of Awards:</div>
//           </div>

//           <div class="right-division">
//           <div class="profile_heading">56</div>
//             <div class="profile_heading">National Award</div>
//             </div>
//         </div>
//       </div>

//       <button class="view_more">View More</button>
//     </>
//   );
// };

// export default YourComponent;

import React ,{useEffect, useState}from "react";
import { FaInstagram,FaFacebook,FaYoutube,FaLinkedin,FaTwitter } from "react-icons/fa";
import "./artistprofile.css"; 
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;


const YourComponent = () => {

  const [artdata, setArtData] = useState({})

  const artId = localStorage.getItem("artId");
  const token = localStorage.getItem("accessToken");
  
  const getartist = async() =>{
    try {

      const artistData = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/user/${artId}`, token)

      console.log(artistData);
      setArtData(artistData.data)
      toast.dismiss(toast.loading("loading..."));
      toast.success("Artist loaded successfully")
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getartist();
  }, [])

  return ( artdata &&
    <div className="main-container">
      <div className="left-container">
      <div className="artist_top-division">
        <div class="artist_circleprofile">
          <img src={artdata.avatar && artdata.avatar.url} alt="" />
        </div>
        <h1>
          {artdata.firstName}
        </h1>
      </div>
      <div className="basic_profile">
          <h1><FaUser/>Basic Profile</h1>
          <div class="basic_profile-card">
            <div class="left-division">
            <div class="profile_heading">First Name:</div>
            <div class="profile_heading">Last Name:</div>
            <div class="profile_heading">Email:</div>
            <div class="profile_heading">Contact Number:</div>
            <div class="profile_heading">Age:</div>
            <div class="profile_heading">Gender:</div>
            <div class="profile_heading">Pincode:</div>
            <div className="profile_heading">Languages:</div>
            </div>

            <div class="right-division">
            <div class="profile_heading">
              {artdata.firstName}
            </div>
            <div class="profile_heading"> {artdata.lastName} </div>
            <div class="profile_heading"> {artdata.email} </div>
            <div class="profile_heading"> {artdata.phoneNumber && artdata.phoneNumber.number} </div>
            <div class="profile_heading">{artdata._doc && artdata._doc.personalInfo.age ? artdata._doc.personalInfo.age : "-"}</div>
            <div class="profile_heading">{artdata._doc && artdata._doc.personalInfo.gender ? artdata._doc.personalInfo.gender : "-"}</div>
            <div class="profile_heading">{artdata.address && artdata.address.pincode ? artdata.address.pincode : "-"}</div>
            <div className="profile_heading">{artdata._doc && artdata._doc.personalInfo.languages.map((lang)=>{
              return <span>{lang}, </span>
            })}</div>
            </div>
          </div>
        </div>
        <div className="artist_art-ManageProfile">
          <h1> Other Details</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Social Category:</div>
              <div class="profile_heading">Disability:</div>
              <div class="profile_heading">Source of Income:</div>
              <div class="profile_heading">Annual Income:</div>
              <div class="profile_heading">UPI Id:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">
                {artdata._doc && artdata._doc.personalInfo.socialCategory ? artdata._doc.personalInfo.socialCategory : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.personalInfo.pwd ? artdata._doc.personalInfo.pwd : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.personalInfo.incomeSrc ? artdata._doc.personalInfo.incomeSrc : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.personalInfo.annualIncome ? artdata._doc.personalInfo.annualIncome : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.otherInfo.upiId ? artdata._doc.otherInfo.upiId : "-"}
              </div>
            </div>
          </div>
        </div>
        <div className="artist_art-ManageProfile">
          <h1> ID Proofs</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Aadhar No:</div>
              <div class="profile_heading">PAN No:</div>
              <div class="profile_heading">Passport:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">
                {artdata._doc && artdata._doc.otherInfo.adharNumber ? artdata._doc.otherInfo.adharNumber : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.otherInfo.panNumber ? artdata._doc.otherInfo.panNumber : "-"}
              </div>
              <div class="profile_heading">
              {artdata._doc && artdata._doc.otherInfo.idProof.num ? artdata._doc.otherInfo.idProof.num : "-"}
              </div>
            </div>
          </div>
        </div>
        <div className="aboutartist">
          <h2>Highlights of Performance</h2>
          <p>
          {artdata._doc && artdata._doc.performanceInfo.highlights ? artdata._doc.performanceInfo.highlights : "No highlights" }
          </p>
        </div>

        <div className="artist-ManageProfile">
          <h1> Major Events</h1>
          <div class="major_events_container">
            <div class="major_events">Aadhar No:</div>
            <div class="major_events">PAN No:</div>
            <div class="major_events">Passport:</div>
          </div>
        </div>
        <div className="profile_social_icons">
          <FaInstagram/>
          <FaFacebook/>
          <FaYoutube/>
          <FaLinkedin/>
          <FaTwitter/>
        </div>
      </div>
      <div className="right-container">
        <div className="aboutartist">
          <h2>About me as Artist</h2>
          <p>
            {artdata._doc && artdata._doc.personalInfo.about}
          </p>
        </div>
        <div className="performance_profile">
          <h1>Performance Profiles</h1>
          <div class="profile-card">
            <div class="left-division">
              <div class="profile_heading">Aadhar No:</div>
              <div class="profile_heading">PAN No:</div>
              <div class="profile_heading">Passport:</div>
            </div>

            <div class="right-division">
              <div class="profile_heading">1234-4567-5624</div>
              <div class="profile_heading">12345678</div>
              <div class="profile_heading">85236794101</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
