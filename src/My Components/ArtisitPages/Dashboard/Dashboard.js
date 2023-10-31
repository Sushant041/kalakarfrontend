import React, { useEffect, useState } from "react";
import Artist_navbar from "../Artist_navbar";
import imagePart from "./assets/imagePart.svg";
import darkFilter from "./assets/darkFilter.svg";
import "./dashboard.css";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { statusOfAppliPoints } from "../../../services/apis";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const [appliedData, setAppliedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApplication = async () => {
    setLoading(true);
    try {
      const response = await makeAuthenticatedGETRequest(
        statusOfAppliPoints.FETCH_APPLIED_APPLI_API,
        accessToken
      );
      // console.log("response", response);
      const { data } = response;
      // console.log("data", data);

      if (response.status === "success") {
        setAppliedData(response?.data);

        console.log(appliedData);
      } else {
        toast.error("Cannot fetch Applied Appliction , please refresh page", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  return (
    <>
      <Artist_navbar />
      <div className="dashboard-wrapper">
        <section className="dashboard-container">
          <div className="image_container">
            <img src={imagePart} alt="" className="contact_img" />
            {/* <img src={darkFilter} alt="" className="filter_img" /> */}
            <p className="contactUs_text"></p>
          </div>

          <div className="filter-container">
            <div className="dashboard-filter">
              <label className="filter-label">Applied</label>
              <select className="dashboard-select">
                <option>Select</option>
                <option>Unselect</option>
              </select>
            </div>
            <div className="dashboard-filter">
              <label className="filter-label">Shortlisted</label>
              <select className="dashboard-select">
                <option>Select</option>
                <option>Unselect</option>
              </select>
            </div>
            <div className="dashboard-filter">
              <label className="filter-label">Hired</label>
              <select className="dashboard-select">
                <option>Select</option>
                <option>Unselect</option>
              </select>
            </div>
            <div className="dashboard-filter">
              <label className="filter-label">Rejected</label>
              <select className="dashboard-select">
                <option>Select</option>
                <option>Unselect</option>
              </select>
            </div>
          </div>

          <div className="table-container">
            {loading ? (
              <div className="custom-loader" style={{ margin: "0 auto" }}></div>
            ) : (
              <table className="table">
                <tr className="table-row">
                  <th className="table-head">Name of Opportunity</th>
                  <th className="table-head">Location</th>
                  <th className="table-head">Applied on</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Income</th>
                </tr>

                {appliedData.map((event, index) => (
                  <tr className="table-row" key={index}>
                    <td className="table-body">No Data Found</td>
                    <td className="table-body">
                      {event?.opportunity?.location}
                    </td>
                    <td className="table-body">
                      {new Date(event?.appliedOn).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="table-body">{event?.status}</td>
                    <td className="table-body">
                      {event?.status === "Hired"
                        ? event?.opportunity?.budget
                        : 0}
                    </td>
                  </tr>
                ))}
              </table>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
