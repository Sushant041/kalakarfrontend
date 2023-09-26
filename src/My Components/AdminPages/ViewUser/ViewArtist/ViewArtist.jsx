import React from "react";
import "./ViewArtist.css";
import search from "../../assets/search.svg";
import ViewCard from "../ViewCard/ViewCard";

function ViewArtist() {
  return (
    <div className="view-artist-admin-root-cnt">
      <div className="view-artist-input-cont">
        <input type="text" />
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <h2>Filter Applied:</h2>
      <div className="d-flex flex-column gap-4">
        <ViewCard />

        <ViewCard />
        <ViewCard />
      </div>
    </div>
  );
}

export default ViewArtist;
