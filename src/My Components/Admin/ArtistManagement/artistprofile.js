import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoMusicalNote } from "react-icons/io5";
import { FaStarOfDavid } from "react-icons/fa";
import "./artistprofile.css";
const YourComponent = () => {
  return (
    <>
      <div className="artist_top-division">
        <div class="artist_circleprofile">
          <img src="./profile.webp" alt="" />
        </div>
        <h1>Kavya</h1>
      </div>
      <div className="artist-ManageProfile">
        <h1>
          {" "}
          <FaUser /> Basic Profile
        </h1>
        <div class="profile-card">
          <div class="left-division">
            <div class="profile_heading">First Name:</div>
            <div class="profile_heading">Last Name:</div>
            <div class="profile_heading">Email:</div>
            <div class="profile_heading">Contact Number:</div>
            <div class="profile_heading">Age:</div>
            <div class="profile_heading">Gender:</div>
            <div class="profile_heading">Pincode:</div>
            <div className="profile_heading">Language:</div>
          </div>

          <div class="right-division">
          <div class="profile_heading">Kavya</div>
            <div class="profile_heading">XXXX</div>
            <div class="profile_heading">kxxxxx@gmail.com</div>
            <div class="profile_heading">2658923480XX</div>
            <div class="profile_heading">29</div>
            <div class="profile_heading">F</div>
            <div class="profile_heading">364794</div>
            <div className="profile_heading">Tamil</div>
            </div>
            
        </div>
        
      </div>
      <div className="artist_art-ManageProfile">
        <h1>
          {" "}
          <FaMicrophone/> Art Profile
        </h1>
        <div class="profile-card">
          <div class="left-division">
            <div class="profile_heading">Category of Art:</div>
            <div class="profile_heading">Name of Art:</div>
          </div>

          <div class="right-division">
          <div class="profile_heading">Dance</div>
            <div class="profile_heading">Kathakali</div>
            </div>
        </div>
      </div>
      <div className="artist_art-ManageProfile">
        <h1>
          {" "}
          <IoMusicalNote/> Performance Profile
        </h1>
        <div class="profile-card">
          <div class="left-division">
            <div class="profile_heading">Total No of Performance:</div>
            <div class="profile_heading">Experience:</div>
          </div>

          <div class="right-division">
          <div class="profile_heading">11</div>
            <div class="profile_heading">15</div>
            </div>
        </div>
      </div>
      <div className="artist_art-ManageProfile">
        <h1>
          {" "}
          <FaStarOfDavid/> Award Profile
        </h1>
        <div class="profile-card">
          <div class="left-division">
            <div class="profile_heading">Total Number of Awards:</div>
            <div class="profile_heading">Highest Level of Awards:</div>
          </div>

          <div class="right-division">
          <div class="profile_heading">56</div>
            <div class="profile_heading">National Award</div>
            </div>
        </div>
      </div>

      <button class="view_more">View More</button>
    </>
  );
};

export default YourComponent;
