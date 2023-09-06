import React, { useState } from 'react';
import './UploadOpportunities.css';
import Patron_Navbar from '../Patron_Navbar';
// import { toast } from 'react-hot-toast';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import {  useSelector } from 'react-redux';
import { makeAuthenticatedPOSTRequest } from '../../../services/serverHelper';
import {patronProfilePoints} from "../../../services/apis"
import { Link } from 'react-router-dom';


export function UploadOpportunities() {

  const {accessToken} = useSelector((state)=>state.auth);

  const [formData , setFormData] = useState({
    artNature:"",
    location:"",
    performanceDate:"",
    performanceType:"",
    languages:"",
    mediaType :"",
    position:"",
    category:"",
    description:"",
    requiredArtists:"",
    artistLevel:"",
    // mediaType :"",
    // openings:"",
    performanceDuration:"",
    // location:"",
    budget:"",
    applicationPeriod:{
      start:"",
      end:""
    },
    otherRequirements:"",
    incentives:"",
    expertise:"",
    timeSlot :"",
    theme:""

  })

  const changeHandler  = (event)=>{
    const {name , value} = event.target;
    if (name.startsWith('applicationPeriod.')) {
      // Handle nested property updates
      const nestedProp = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        applicationPeriod: {
          ...prev.applicationPeriod,
          [nestedProp]: value,
        },
      }));
    } else {
      // Handle updates for other properties
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const submitHandler = async(event)=>{
    const toastId = toast.loading('Loading...');
    event.preventDefault();
    try{
      const response = await makeAuthenticatedPOSTRequest(patronProfilePoints.UPLOAD_OPPOR_API, formData , accessToken);
      console.log('uplares' , response);
      if(response.success ==='success'){
        toast.success('successfully uploaded');
        setFormData({
          artNature:"",
          location:"",
          performanceDate:"",
          performanceType:"",
          languages:"",
          mediaType :"",
          position:"",
          category:"",
          description:"",
          requiredArtists:"",
          artistLevel:"",
          // mediaType :"",
          // openings:"",
          performanceDuration:"",
          // location:"",
          budget:"",
          applicationPeriod:{
            start:"",
            end:""
          },
          otherRequirements:"",
          incentives:"",
          expertise:"",
          timeSlot :"",
          theme:""
      
        })
      }
      else{
        toast.error(response.message);
      }

    } catch(error){
      console.log(error);
      toast.error('something went wrong , please try again');
    }
    toast.dismiss(toastId);
  }
  return (
    <>
      <Patron_Navbar/>
      <div className='ArtistOpportunities_Page'>
        <div className='ArtistOpportunities_Image'>
          <div className='ArtistOpportunities_Image_Content'>
            <p>Upload Opportunities for Artist</p>
          </div>
        </div>
        <div className='ArtistOpportunities_Page_Infoform'>
          <form onSubmit={submitHandler}>
            <div className='ArtistOpportunities_Page_Infoform_Contentone'>
             
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Nature of Art*</label>
                <input value={formData.artNature} name='artNature' onChange={changeHandler} type='text' placeholder='Enter nature of art'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Location of Performance*</label>
                <input value={formData.location} name='location' onChange={changeHandler} type='text' placeholder='Enter location'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Description*</label>
                <input  name='description' value={formData.description} onChange={changeHandler} type='text' placeholder='Enter art Description'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Date of Performance*</label>
                <input value={formData.performanceDate} name='performanceDate' onChange={changeHandler} type='text' placeholder='Enter event date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Type of Performance*</label>
                <input value={formData.performanceType} name='performanceType' onChange={changeHandler} type='text' placeholder='Enter performance type'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Languages*</label>
                <input value={formData.languages} name='languages' onChange={changeHandler} type='text' placeholder='Enter languages'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Live / Record *</label>
                <select onChange={changeHandler} name='mediaType'>
                  <option   selected hidden>Select</option>
                  <option value="Live">Live</option>
                  <option value="Record">Record</option>
                </select>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Theme*</label>
                <input onChange={changeHandler} value={formData.theme} name='theme' type='text' placeholder='Enter theme'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Number of Artist*</label>
                <input value={formData.requiredArtists} name='requiredArtists' onChange={changeHandler} type='text' placeholder='Enter number of artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Time of Performance*</label>
                <input onChange={changeHandler} value={formData.timeSlot} name='timeSlot' type='text' placeholder='Enter time(day/afternoon/evening/Night)'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Position*</label>
                <input onChange={changeHandler}  type='text' value={formData.position} placeholder='Enter Position' name='position'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Duration of Performance*</label>
                <input onChange={changeHandler} value={formData.performanceDuration} name='performanceDuration' type='text' placeholder='Enter Performance Duration'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Artist Level*</label>
                <input onChange={changeHandler} value={formData.artistLevel} name='artistLevel' type='text' placeholder='Enter Artist Level'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Expertise*</label>
                <input onChange={changeHandler} value={formData.expertise} name='expertise' type='text' placeholder='Enter Artist Expertise'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Category*</label>
                <input onChange={changeHandler}  type='text' name='category' value={formData.category} placeholder='Enter Category'></input>
              </div>
            </div>
            <div className='ArtistOpportunities_Page_Infoform_Contenttwo'>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Proposed Budget*</label>
                <input onChange={changeHandler} value={formData.budget} name='budget' type='text' placeholder='Enter proposed budget'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Start Date of Application*</label>
                <input onChange={changeHandler} name='applicationPeriod.start' value={formData.applicationPeriod.start} type='text' placeholder='Enter application Start date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Last Date of Application*</label>
                <input onChange={changeHandler} name='applicationPeriod.end' value={formData.applicationPeriod.end} type='text' placeholder='Enter application last date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Any Other Requirements*</label>
                <input onChange={changeHandler} name='otherRequirements' value={formData.otherRequirements} style={{height:"200px"}} type='text' placeholder='Enter Any Other requirements' ></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Do you Offer any Additional Facilities(incentives)*</label>
                <input onChange={changeHandler} name='incentives' value={formData.incentives} style={{height:"200px"}} type='text' placeholder='Enter Incentives'></input>
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
