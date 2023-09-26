import React, { useState } from "react";
import "./ViewApplicants.css";
import search from "../assets/search.svg";
import ViewCard from "../ViewUser/ViewCard/ViewCard";

function ViewApplicants() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="admin-view-User-cont">
      <h2>View Applicants</h2>
      <div className="admin-view-cont-tab vw-applicant">
        <button
          className={
            activeTab === 1
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(1)}
        >
          Saved
        </button>
        <button
          className={
            activeTab === 2
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(2)}
        >
          Applied
        </button>
        <button
          className={
            activeTab === 3
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(3)}
        >
          In-Progress
        </button>
        <button
          className={
            activeTab === 4
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(4)}
        >
          Hired
        </button>
        <button
          className={
            activeTab === 5
              ? `admin-status-btn-user active-btnn`
              : `admin-status-btn-user`
          }
          onClick={() => setActiveTab(5)}
        >
          Rejected
        </button>
      </div>
      {activeTab >= 0 && <ViewCard />}
    </div>
  );
}

export default ViewApplicants;
