import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file

const YourComponent = () => {
  const [sideNavWidth, setSideNavWidth] = useState(0);

  const openNav = () => {
    setSideNavWidth(250);
  };

  const closeNav = () => {
    setSideNavWidth(0);
  };
  function toggledropdown() {
    let ddown = document.querySelector(".dropdown-container");

    if (ddown) {
      if (ddown.style.display == "block") ddown.style.display = "none";
      else ddown.style.display = "block";
    } else {
      console.error("Element with class 'dropdown-container' not found.");
    }
  }
  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: sideNavWidth + "px" }}
      >
        <div className="sidebar-header">
          <a href="javascript:void(0)" onClick={closeNav} className="header-icon" >
            &times;
          </a>
          <img src="./logo.png" alt=""  className="sidebarlogo"/>
        </div>

        <a href="/">Dashboard</a>
        <button
          onClick={() => {
            toggledropdown();
          }}
          class="dropdown-btn"
        >
          Manage Users
        </button>
        <div class="dropdown-container">
          <ul>
            <li>
              <a href="/artist">Artist</a>
            </li>
            <li>
              <a href="/UserPatron">Patron</a>
            </li>
            <li>
              <a href="/UserPartner">Partners</a>
            </li>
            <li>
              <a href="/UserArt-lover">Art-Lover</a>
            </li>
          </ul>
        </div>
        <a href="#">ManageProfile</a>
        <a href="/ArtsistManagement">Manage Artists</a>
        <a href="/Opportunity">Manage Opportunities</a>
        <a href="#">Manage Art </a>
        <a href="/ManageSkills">Manage Skills</a>
        <a href="/ManageLanguages">Manage Languages</a>
        <a href="#">Manage Jobs</a>
        <a href="">Manage Banners</a>
        <a href="#">Manage Advertisement</a>
        <a href="#">Manage Payments</a>
        <a href="">Plans</a>
        <a href="">Review</a>
        <a href="">Credit</a>
        <a href="">Feedbacks</a>
        <a href="">Users Notification</a>
        <a href="">Reports</a>
        <a href="">Logout</a>
      </div>
      <div className="Navbar">
        <img
          style={{
            position: "absolute",
            left: "30%",
            top: "0rem",
            width: "20rem",
          }}
          src="./navimage.png"
          alt=""
        />

        <span
          className="Hamburger"
          style={{
            cursor: "pointer",
            color: "white",
            fontSize: "30px",
            margin: "auto 40px",
          }}
          onClick={openNav}
        >
          &#9776;
        </span>
        <img
          style={{
            position: "absolute",
            left: "80%",
            top: "-13rem",
            width: "17rem",
          }}
          src="./navimage.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default YourComponent;
