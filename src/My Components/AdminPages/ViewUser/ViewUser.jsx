import React, { useState } from "react";
import "./ViewUser.css";
import ViewArtist from "./ViewArtist/ViewArtist";

function ViewUser() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="admin-view-User-cont">
      <h2>View Artist</h2>
      <div className="admin-view-cont-tab">
        <button
          className={
            activeTab === 1
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(1)}
        >
          Artist
        </button>
        <button
          className={
            activeTab === 2
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(2)}
        >
          Patron
        </button>
        <button
          className={
            activeTab === 3
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(3)}
        >
          Partner
        </button>
        <button
          className={
            activeTab === 4
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(4)}
        >
          Art Lover
        </button>
      </div>
      {activeTab >= 0 && <ViewArtist />}
    </div>
  );
}

export default ViewUser;
