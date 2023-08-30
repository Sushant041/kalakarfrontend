import React from 'react';
import './UploadOpportunities.css';
import Patron_Navbar from '../Patron_Navbar';
import { Link } from 'react-router-dom';

export function UploadOpportunities() {
  return (
    <>
      <Patron_Navbar />
      <div className='ArtistOpportunities_Page'>
        <div className='ArtistOpportunities_Image'>
          <div className='ArtistOpportunities_Image_Content'>
            <p>Upload Opportunities for Artist</p>
          </div>
        </div>
        <div className='ArtistOpportunities_Page_Infoform'>
          <form>
            <div className='ArtistOpportunities_Page_Infoform_Contentone'>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Purpose*</label>
                <input type='text' placeholder='Enter your purpose'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Nature of Art</label>
                <input type='text' placeholder='Enter nature of art'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Location of Performance*</label>
                <input type='text' placeholder='Enter location'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Name of Art</label>
                <input type='text' placeholder='Enter art name'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Date of Performance*</label>
                <input type='text' placeholder='Enter event date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Type of Performance</label>
                <input type='text' placeholder='Enter performance type'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Languages*</label>
                <input type='text' placeholder='Enter languages'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Live / Record</label>
                <select>
                  <option selected hidden>Select</option>
                </select>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Theme</label>
                <input type='text' placeholder='Enter theme'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>No of Artist</label>
                <input type='text' placeholder='Enter number of artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Time of Performance</label>
                <input type='text' placeholder='Enter time(day/afternoon/evening)'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Type of Artist</label>
                <input type='text' placeholder='Enter type of artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Duration of Performance</label>
                <input type='text' placeholder='Enter Performance Duration'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Artist Location</label>
                <input type='text' placeholder='Location of Artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Art Skills Required</label>
                <input type='text' placeholder='Enter multiple skills'></input>
              </div>
            </div>
            <div className='ArtistOpportunities_Page_Infoform_Contenttwo'>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Proposed Budget</label>
                <input type='text' placeholder='Enter proposed budget'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Last Date of Application</label>
                <input type='text' placeholder='Enter time(day/afternoon/evening)'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Any Other Requirements</label>
                <input style={{ height: "200px" }} type='text'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Do you Offer any Additional Facilities</label>
                <input style={{ height: "200px" }} type='text'></input>
              </div>
            </div>
            <div className='ArtistOpportunities_Page_Infoform_btns'>
              <button type='Submit'>Upload Opportunity</button>
              <Link style={{textDecoration:"none"}} to={"/UploadedOpportunities"}>
                <button type='button'>Uploaded Opportunities</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
