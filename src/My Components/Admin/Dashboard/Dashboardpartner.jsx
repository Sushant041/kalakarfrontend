import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
// import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Dashboard() {
  const [totalArtists, setTotalArtists] = useState(0);
  const [totalPatrons, setTotalPatrons] = useState(0);
  const [totalOpportunities, setTotalOpportunities] = useState(0);

  const token = localStorage.getItem('accessToken');


  useEffect(() => {
    const getUser = async (role) => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/users?${role}`, token);
       
         console.log(response)
        if (role === "Artist") {
          setTotalArtists(response.data.length);
        } else if (role === "Patron") {
          setTotalPatrons(response.data.length);
        }
      } catch (error) {
        console.error(`Error fetching ${role} data:`, error);
      }
    };

    const getOpportunity = async () => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/opps`, token);
        
        console.log(response)
        setTotalOpportunities(response.data.length);
      } catch (error) {
        console.error("Error fetching opportunity data:", error);
      }
    };

    getUser("Artist");
    getUser("Patron");
    getOpportunity();
  }, []);

  return (
    <div className="Dashboard">
      <div className="dashboarditems">
        {/* <div className="card flex justify-content-center">
          <Calendar label="Basic date picker" />
        </div>
        <div className="card flex justify-content-center">
          <Calendar label="Basic date picker" />
        </div> */}
        <button className="dashboardbutton">Filter</button>
      </div>
      <div className="dashboard_circle">
        <div className="circle">
          <Link to="/" className="Link">
            <p>Total Patrons</p>
            <p>{totalPatrons}</p>
          </Link>
        </div>
        <div className="circle">
          <Link to="/DashboardArtist" className="Link">
            <p>Total Artists</p>
            <p>{totalArtists}</p>
          </Link>
        </div>
        <div className="circle">
          <Link to="/Dashboardpartner" className="Link">
            <p>Total Partners</p>
            <p>12</p>
          </Link>
        </div>
        <div className="circle">
          <Link to="/DashboardArtLover" className="Link">
            <p>Total Art-Lovers</p>
            <p>12</p>
          </Link>
        </div>
      </div>
      <div className="dashboard_circle">
        <div className="circle">
          <Link to="/DashboardOpportunity" className="Link">
            <p>Opportunities</p>
            <p>{totalOpportunities}</p>
          </Link>
        </div>
        <div className="circle applicationprogress">
          <div className="uppercircle">
            <div className="progressbar1">M</div>
            <Link to="/DashboardApplication" className="Link">
              <p>Applications</p>
              <p>12</p>
            </Link>
            <div className="progressbar2">M</div>
          </div>
        </div>
        <div className="circle">
          <Link to="/DashboardPerformance" className="Link">
            <p>Performances</p>
            <p>12</p>
          </Link>
        </div>
        <div className="circle" style={{ border: "3px solid #AD2F3B" }}>
          <Link to="/DashboardRevenue" className="Link">
            <p>Revenue</p>
            <p>12</p>
          </Link>
        </div>
      </div>
    <div className="dashboarditems">
    <div className="card flex justify-content-center" style={{height : "30px", backgroundColor: "white", border: "2px solid black"}}>
            <input type="text" className="p-invalid" style={{border: "none"}} />
        </div>
    <button class="dashboardbutton">Submit</button>
    </div>
    <div className="dashboard_graph">
      <h3>Partners</h3>
      <img src="./partnergraph.png" alt="" />
      <div className="dashboard_graph_square">
       <div className="square"></div>
        <p>Partners</p>
      </div>
    </div>

    </div>
  );
}