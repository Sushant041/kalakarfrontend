// import React, { useState, useEffect } from "react";
// import { BiSolidHide } from "react-icons/bi";
// import "./artistmanage.css";

// const ArtsistManagement = () => {
//   const [selectedOption, setSelectedOption] = useState('default');
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const itemsPerPage = 10;

//   const handlePageClick = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const response = await fetch(
//           "https://api.ekalakaar.com/api/v1/admin/user?role=Artist",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQzODE3NDMsImV4cCI6MTcwNDQ2ODE0M30.j5PpZQA-m4PC-6JYgYWVOGeVoBImNOOCR1vsrdp44Vw`, // replace with your access token
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const responseData = await response.json();
//         setData(responseData.data);
//         console.log(responseData);
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     getUser();
//   }, []);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const getSortedProfiles = () => {
//     switch (selectedOption) {
//       case 'ascending':
//         return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
//       case 'descending':
//         return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
//       case 'recentlyAdded':
//         return [...data].sort((a, b) => b.createdAt - a.createdAt);
//       default:
//         return data;
//     }
//   };

//   const sortedProfiles = getSortedProfiles();

//   return (
//     <>
//       <div className="artist_management">
//         <div className="artist_management_topdivision">
//           <h1>Artist Management</h1>
//           <BiSolidHide className="hiddenicon" />
//         </div>
//       </div>
//       <div className="artist_top_buttons">
//         <button className="total_artist">Filter</button>
//         <button className="total_artist">Total Artist <br /><span style={{color:"black",fontStyle:"bold"}}> {data.length}</span></button>
//         <div className="total_artist">
//           <select
//             id="sortDropdown"
//             onChange={handleSelectChange}
//             value={selectedOption}
//           >
//             <option value="default">Sort by</option>
//             <option value="ascending">Ascending Order</option>
//             <option value="descending">Descending Order</option>
//             <option value="recentlyAdded">Recently Added</option>
//           </select>
//         </div>
//       </div>
//       <div className="artist_top-division">
//         {sortedProfiles.map((profile) => (
//           <div key={profile._id} className="artist_management_profile">
//             <img src={profile.avatar?.url} alt="" />
//             <h1>{profile.firstName}</h1>
//             <h2>{profile.role}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ArtsistManagement;




import React, { useState, useEffect } from "react";
import { BiSolidHide } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import "./artistmanage.css";
import { Link } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ArtsistManagement = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    artType: [],
    language: [],
    location: [],
    age: [],
    gender: [],
    averageDuration: [],
    averagePrice: [],
  });
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const itemsPerRow = 3;
  const itemsPerPage = 9;

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
   
  const token = localStorage.getItem("accessToken")
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await makeAuthenticatedGETRequest(`${BASE_URL}/admin/users?role=Artist`, token);

        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    getUser();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getSortedProfiles = () => {
    switch (selectedOption) {
      case 'ascending':
        return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
      case 'descending':
        return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
      case 'recentlyAdded':
        return [...data].sort((a, b) => b.createdAt - a.createdAt);
      default:
        return data;
    }
  };


  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }
      return updatedFilters;
    });
  };

  const applyFilters = (profile) => {
    return (
      (filters.artType.length === 0 || filters.artType.includes(profile.artType)) &&
      (filters.language.length === 0 || filters.language.includes(profile.language)) &&
      (filters.location.length === 0 || filters.location.includes(profile.location)) &&
      (filters.age.length === 0 || filters.age.includes(profile.age.toString())) &&
      (filters.gender.length === 0 || filters.gender.includes(profile.gender)) &&
      (filters.averageDuration.length === 0 || filters.averageDuration.includes(profile.averageDuration.toString())) &&
      (filters.averagePrice.length === 0 || filters.averagePrice.includes(profile.averagePrice.toString()))
    );
  };

  // Calculate the start and end index based on the current page
  useEffect(() => {
    const sortedProfiles = getSortedProfiles();
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sortedProfiles && sortedProfiles.length);
    const profilesToDisplay = sortedProfiles && sortedProfiles.slice(startIndex, endIndex).filter(applyFilters);
    setFilteredProfiles(profilesToDisplay);
  }, [currentPage, filters, selectedOption, data]);

  return (
    <>
      <div className="artist_management">
        <div className="artist_management_topdivision">
          <h1>Artist Management</h1>
          <BiSolidHide className="hiddenicon" />
        </div>
      </div>
      <div className="artist_top_buttons">
      <button className="total_artist" onClick={() => setShowFilters(!showFilters)}>
          Filter
        </button>
        {showFilters && (
          <div className="filter-options">
            <CheckboxFilter
              label="Art Type"
              options={["Dance", "Music"]}
              selectedOptions={filters.artType}
              onChange={(value) => handleCheckboxChange("artType", value)}
            />
            <CheckboxFilter
              label="Language"
              options={["English", "Spanish"]}
              selectedOptions={filters.language}
              onChange={(value) => handleCheckboxChange("language", value)}
            />
          </div>
        )}

        <button className="total_artist">
          Total Artist <br />
          <span style={{ color: "black", fontStyle: "bold" }}> {data && data.length}</span>
        </button>
        <div className="total_artist">
          <select
            id="sortDropdown"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="default">Sort by</option>
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending Order</option>
            <option value="recentlyAdded">Recently Added</option>
          </select>
        </div>
      </div>
      <div className="artist_top-division">
        {Array.from({ length: Math.ceil(itemsPerPage / itemsPerRow) }).map((_, rowIndex) => (
          <div key={rowIndex} className="artist_row">
            {filteredProfiles && filteredProfiles
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map((profile) => (
                <div key={profile._id} className="artist_management_profile">
                  <Link to="/artistProfile" style={{textDecoration: "none"}} >
                  <img src={profile.avatar?.url} alt="" />
                  <h1>{profile.firstName}</h1>
                  <h2>{profile.role}</h2>
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(filteredProfiles && filteredProfiles.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => handlePageClick()}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

const CheckboxFilter = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div className="filter-group">
      <label>{label}</label>
      <div className="checkbox-options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ArtsistManagement;
