import React from "react";
import "./ViewCard.css";
import PortfolioDisplayTemplate from "../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import OutlineCall from "../../assets/outlineCall.svg";
import Save from "../../assets/save.svg";

function ViewCard() {
  return (
    <div className="root-view-card-cont">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <PortfolioDisplayTemplate />
      </div>
      <div className="view-card-admin-btn-cont">
        <button>View Application</button>
        <button>View Profile</button>
        <button>Remove Artist</button>
        <div>
          <img src={OutlineCall} alt="" />
        </div>
        <div>
          <img src={Save} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
