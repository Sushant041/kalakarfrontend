import React from "react";
import "./ViewProfile.css";
import Artist_navbar from "../../ArtisitPages/Artist_navbar";
import PortfolioDisplayTemplate from "../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import tick from "../assets/tick.svg";
import PhotoSection from "./PhotoSection/PhotoSection";
import PortfolioPhotoSection from "../../ArtisitPages/PortfollioDisplay/PortfolioPhotoSection";
import Footer from "../../Footer/Footer";

function ViewProfile() {
  return (
    <div className="admin-page-root-container-vp">
      <Artist_navbar />
      <div className="section-division-admin-viewProfile">
        <h1>Dael Steyn's Portfolio</h1>
        <PortfolioDisplayTemplate />

        <div className="userName_review_container">
          <div className="portfolio_verify_userName">
            <p className="portfolio_userName">Dael Steyn</p>
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
        <div className="admin-about-me-container">
          <h2>About me</h2>
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>

        <div className="display-data-table">
          <p>Category :</p>
          <h2>Dancer</h2>
          <p>Art Name :</p>
          <h2>Dancing, Singing</h2>
          <p>Location :</p>
          <h2>India</h2>
          <p>Age:</p>
          <h2>28</h2>
          <p>Performance Type :</p>
          <h2>Solo</h2>
          <p>No of Performance :</p>
          <h2>121</h2>
          <p>Charges Per Performance :</p>
          <h2>12k</h2>
          <p>Experience :</p>
          <h2>2 years</h2>
          <p>Events Type :</p>
          <h2>House Party</h2>
          <p>Minimum Budget :</p>
          <h2>10k - 20k</h2>
          <p>Instagram :</p>
          <h2>random</h2>
          <p>Facebook :</p>
          <h2>random</h2>
          <p>Youtube :</p>
          <h2>random</h2>
        </div>
      </div>
      <h1 className="caraussel-head">Photos</h1>
      <PhotoSection />

      <h2 className="caraussel-head">Videos</h2>
      <PhotoSection />

      <div className="section-division-admin-viewProfile">
        <div className="admin-vp-button-bottom">
          <button
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #AD2F3B",
              color: "#AD2F3B",
            }}
            className="admin-vp-btn"
          >
            Remove Artist
          </button>
          <button className="admin-vp-btn">Edit Artist Details</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewProfile;
