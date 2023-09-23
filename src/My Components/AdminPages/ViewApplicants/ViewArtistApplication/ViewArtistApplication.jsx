import React from "react";
import "./ViewArtistApplication.css";
import PortfolioDisplayTemplate from "../../../ArtisitPages/PortfollioDisplay/PortfolioCardTemplate";
import OppurtunityCard from "../Oppurtunity/OppurtunityCard";

function ViewArtistApplication() {
  return (
    <div className="root-view-card-cont">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <PortfolioDisplayTemplate />
      </div>
      <div className="root-oppurtunity-container">
        <OppurtunityCard
          title={"Dancer for Entertain the Regular Audience"}
          description={
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate"
          }
          NatureOfArt={"Khatak"}
          Category={"Dance"}
          Location={"Mumbai"}
          Date={"08/11/11"}
          Amount={"5,000"}
          Language={"Hindi"}
          DueDate={"01/01/11"}
        />
        <OppurtunityCard
          title={"World Cup 2023"}
          description={
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate"
          }
          NatureOfArt={"Khatak"}
          Category={"Dance"}
          Location={"Mumbai"}
          Date={"08/11/11"}
          Amount={"5,000"}
          Language={"Hindi"}
          DueDate={"01/01/11"}
        />
        <OppurtunityCard
          title={"Random"}
          description={
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate"
          }
          NatureOfArt={"Khatak"}
          Category={"Dance"}
          Location={"Mumbai"}
          Date={"08/11/11"}
          Amount={"5,000"}
          Language={"Hindi"}
          DueDate={"01/01/11"}
        />
      </div>
    </div>
  );
}

export default ViewArtistApplication;
