import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import "./profile.css";
const YourComponent = () => {
  return (
    <div className="opportunity-profile">
      <div className="top-division">
        <h1>Kalai Traditional Showcase</h1>
        <h2>Dance Performance</h2>
      </div>
      <div className="profile-middle">
        <div className="icon-text">
          <div className="icons">
          <FiPhone className="profileicons" />
          </div>
          <p>1234567890</p>
        </div>
        <div className="icon-text">
        <div className="icons">
          <MdOutlineLocationOn className="profileicons" />
          </div>
          <p>Cochin</p>
        </div>
        <div className="icon-text">
        <div className="icons">
          <MdOutlineMailOutline className="profileicons" />
          </div>
          <p>kava02@gmail.com</p>
        </div>
      </div>
      <div class="profile-card">
        <div class="left-division">
          <div class="section-heading">PURPOSE OF PERFORMANCE</div>
          <div class="paragraph-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            ante eu ex tristique venenatis vitae ac arcu.
          </div>
          <div class="section-heading">Languages</div>
         
         
          <ul class="list-items">
            <li class="list-item">Tamil</li>
            <li class="list-item">Malayalam</li>
          </ul>
          <div class="paragraph-text"></div>
          <div class="section-heading">Venue of Performance</div>
          <div class="paragraph-text">
            No 12, Gst Apartment, Gst road, Vanpatti, Cochin, Kerala.
          </div>
          <div class="section-heading">Budget</div>
          <div class="paragraph-text">200000</div>
          <div class="section-heading">Date of Performance</div>
          <div class="paragraph-text">12/11/2023</div>
          <div class="section-heading">Duration of performance</div>
          <div class="paragraph-text">2 Hours (6.30 to 8.30)</div>
          <div class="section-heading">Live / Recorded/ Part Live</div>
          <div class="paragraph-text">Recorded</div>
          <div class="section-heading">Curated Performance</div>
        </div>

        <div class="right-division">
          <div class="section-heading">Description of the Performance</div>
          <div class="paragraph-text">
            kerala’s traditional dance performance to get awareness about the
            climate change in both tamil and malayalam languages at cochin,
            Kerala
          </div>

          <div class="section-heading">Category of Art</div>
          <div class="paragraph-text">Dancer(Kathakali)</div>
          <div class="section-heading">No. of Required Artists</div>
          <div class="paragraph-text">25</div>
          <div class="section-heading">Size of Audience</div>
          <div class="paragraph-text">250</div>
          <div class="section-heading">Name of Contact Person</div>
          <div class="paragraph-text">KAVA Mubin</div>
          <div class="section-heading">Theme of Performance</div>
          <div class="paragraph-text">kerala traditional performance</div>
          <div class="section-heading">Any Other Requirements</div>
          <div class="paragraph-text">Artists should be malayali</div>
          <div class="section-heading">City & Country</div>
          <div class="paragraph-text">cochin, Kerala & India</div>
        </div>
      </div>
      <div className="profile-footer">
        <div className="socialicon">
          <FaInstagram></FaInstagram>
          <h3> Instagram ID</h3>
        </div>
        <div className="socialicon">
          <FaFacebook></FaFacebook>
          <h3>Facebook ID</h3>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
