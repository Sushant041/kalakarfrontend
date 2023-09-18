import React, { useState, useEffect } from "react";
import "./RootAdmin.css";
import Avatar from "./AdminComponent/Avatar/Avatar";
import Artist_navbar from "../ArtisitPages/Artist_navbar";
import menu from "./assets/threeLine.svg";
import Contact from "./Contact/Contact";
import DashBoard from "./Dashboard/DashBoard";
import ViewUser from "./ViewUser/ViewUser";
import ViewApplicants from "./ViewApplicants/ViewApplicants";
import ViewCoursesProduct from "./ViewCoursesProduct/ViewCoursesProduct";
import Footer from "../Footer/Footer";

function RootAdmin() {
  const [activeTab, setActiveTab] = useState(1);
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth >= 650) {
      setNav(true);
    }
    const updateDimension = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [windowWidth]);

  const navhandler = () => {
    setNav((pre) => {
      return !pre;
    });
  };

  return (
    <div className="root-admin-wrapper">
      <div className="root-admin-container">
        <Artist_navbar />
        <div className="root-admin-content-wrapper">
          <div className="menu-icon-admin-cont" onClick={navhandler}>
            <img src={menu} />
          </div>
          {nav && (
            <div className="admin-menu-wrapper">
              <div className="admin-status-btn-container r_container_admin">
                <Avatar styling={{ alignSelf: "center", width: "150px" }} />
                <h5>Admin Name</h5>
                <button
                  className={
                    activeTab === 1
                      ? `admin-status-btn active-btnn`
                      : `admin-status-btn`
                  }
                  onClick={() => setActiveTab(1)}
                >
                  Dashboard
                </button>
                <button
                  className={
                    activeTab === 2
                      ? `admin-status-btn active-btnn`
                      : `admin-status-btn`
                  }
                  onClick={() => setActiveTab(2)}
                >
                  View Artist
                </button>
                <button
                  className={
                    activeTab === 3
                      ? `admin-status-btn active-btnn`
                      : `admin-status-btn`
                  }
                  onClick={() => setActiveTab(3)}
                >
                  View Applicants
                </button>
                <button
                  className={
                    activeTab === 4
                      ? `admin-status-btn active-btnn`
                      : `admin-status-btn`
                  }
                  onClick={() => setActiveTab(4)}
                >
                  View Courses and Products
                </button>
                <button
                  className={
                    activeTab === 5
                      ? `admin-status-btn active-btnn`
                      : `admin-status-btn`
                  }
                  onClick={() => setActiveTab(5)}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
          <div className="root-desc-tab-cont">
            {activeTab === 1 && <DashBoard />}
            {activeTab === 2 && <ViewUser />}

            {activeTab === 3 && <ViewApplicants />}

            {activeTab === 4 && <ViewCoursesProduct />}

            {activeTab === 5 && <Contact />}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RootAdmin;
