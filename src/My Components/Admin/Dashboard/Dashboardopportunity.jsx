import React from "react";
import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";
export default function Dashboard() {
 
  return (
    <div className="Dashboard">
      <div className="dashboarditems">
      <div className="card flex justify-content-center">
            <Calendar label="Basic date picker"/>
        </div>
        <div className="card flex justify-content-center">
            <Calendar label="Basic date picker" />
        </div>
      <button class="dashboardbutton">Filter</button>
      </div>
      <div className="dashboard_circle">
      <div class="circle" >
        <p>Total Patrons</p>
        <p>56</p>
      </div>
      <div class="circle">
        <p>Total Artists </p>
        <p>252</p>
      </div>
      <div class="circle">
        <p>Total Partners </p>
        <p>8</p>
      </div>
      <div class="circle">
        <p>Total Art-Lover </p>
        <p>77</p>
      </div>
    </div>
    <div className="dashboard_circle">
      <div class="circle" style={{border: "3px solid #AD2F3B"}}>
        <p>Opportunities</p>
        <p>12</p>
      </div>
      <div class="circle applicationprogress">
        <div className="uppercircle">
         
      <div className="progressbar1">M</div>
        <p>Application</p>
        <p>338</p>
        <div className="progressbar2">M</div>
        </div>
     
      </div>
      <div class="circle">
        <p>Performances</p>
        <p>45</p>
      </div>
      <div class="circle">
        <p>Revenue</p>
        <p>725000</p>
      </div>
    </div>
    <div className="dashboarditems">
    <div className="card flex justify-content-center">
            <input type="text" className="p-invalid" />
        </div>
    <button class="dashboardbutton">Submit</button>
    </div>
    <div className="dashboard_graph">
      <h3>Opportunities</h3>
      <img src="./opportunity-graph.png" alt="" />
      <div className="dashboard_graph_square">
       <div className="square"></div>
        <p>Opportunities</p>
      </div>
    </div>

    </div>
  );
}
