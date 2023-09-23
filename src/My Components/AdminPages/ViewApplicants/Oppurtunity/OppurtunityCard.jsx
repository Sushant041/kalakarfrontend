import React from "react";
import "./OppurtunityCard.css";

function OppurtunityCard({
  title,
  description,
  NatureOfArt,
  Category,
  Location,
  Date,
  Amount,
  Language,
  DueDate,
}) {
  return (
    <div className="root-oppurtunity-card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <div className="opputunity-wrapper">
        <div className="oppurtunity-content-cont">
          <h4>Nature of Art</h4>
          <p>{NatureOfArt}</p>
          <h4>Category :</h4>
          <p>{Category}</p>
          <h4>Location</h4>
          <p>{Location}</p>
          <h4>Date of Performance</h4>
          <p>{Date}</p>
          <h4>Amount</h4>
          <p>{`${Amount} INR`}</p>
          <h4>Language</h4>
          <p>{Language}</p>
          <h4>Application Due Date</h4>
          <p>{DueDate}</p>
        </div>
        <div className="oppurtunity-btn-container">
          <button>More Information</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default OppurtunityCard;
