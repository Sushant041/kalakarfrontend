import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import "./artistmanage.css";

const ArtsistManagement = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const [profiles, setProfiles] = useState([
    
    // Add more profile objects as needed
  ]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getSortedProfiles = () => {
    switch (selectedOption) {
      case 'ascending':
        return [...profiles].sort((a, b) => a.name.localeCompare(b.name));
      case 'descending':
        return [...profiles].sort((a, b) => b.name.localeCompare(a.name));
      case 'recentlyAdded':
        return [...profiles].sort((a, b) => b.timestamp - a.timestamp);
      default:
       
        return profiles;
    }
  };

  const sortedProfiles = getSortedProfiles();

  return (
    <>
    <div className="artist_management">
      <div class="artist_management_topdivision">
        <h1>Artist Management</h1>
        <BiSolidHide  className="hiddenicon"/>
        </div>
        </div>
        <div className="artist_top_buttons">
        <button className="total_artist">Filter</button>
        <button className="total_artist">Total Artist</button>
        <div className="button">
      {/* <label htmlFor="sortDropdown">Sort profiles by:</label> */}
      <select  id="sortDropdown" onChange={handleSelectChange} value={selectedOption}>
        <option value="default">Sort by</option>
        <option value="ascending">Ascending Order</option>
        <option value="descending">Descending Order</option>
        <option value="recentlyAdded">Recently Added</option>
      </select>

      <ul>
        {sortedProfiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
      </div>
      <div className="artist_top-division">
        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>
      </div>
      <div className="artist_top-division">
        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>
      </div>
      <div className="artist_top-division">
        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>

        <div class="artist_management_profile">
          <img src="./profile.webp" alt="" />
          <h1>Kavya</h1>
          <h2>Musician</h2>
        </div>
      </div>
     
    </>
  );
};

export default ArtsistManagement;
