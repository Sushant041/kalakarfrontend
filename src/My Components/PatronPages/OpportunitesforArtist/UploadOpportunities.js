import React, { useState } from 'react';
import './UploadOpportunities.css';
import Patron_Navbar from '../Patron_Navbar';
import { toast } from 'react-hot-toast';
import { makeAuthenticatedPOSTRequest } from '../../../services/serverHelper';
import { useSelector } from 'react-redux';
import { patronProfilePoints } from '../../../services/apis';

export function UploadOpportunities() {

  const {accessToken} = useSelector((state)=>state.auth);

  const [formData , setFormData] = useState({
    artNature:"",
    location:"",
    performanceDate:"",
    performanceType:"",
    languages:"",
    mediaType :"",
    mediaType :"",
    openings:"",
    performanceDuration:"",
    location:"",
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
    setFormData((prev)=>(
      {
        ...prev ,
        [name]:value
      }
    ))
  }

  const submitHandler = async(event)=>{
    const toastId = toast.loading('Loading...');
    event.preventDefault();
    try{
      const response = await makeAuthenticatedPOSTRequest(patronProfilePoints.UPLOAD_OPPOR_API , formData , accessToken);
      console.log('uplares' , response);
      if(response.success ==='success'){
        toast.success('successfully uploaded');
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
      <div style={{fontFamily:"Poppins"}} className='ArtistOpportunities_Page'>
        <div className='ArtistOpportunities_Image'>
          <div className='ArtistOpportunities_Image_Content'>
            <p>Upload Opportunities for Artist</p>
          </div>
        </div>
        <div className='ArtistOpportunities_Page_Infoform'>
          <form onSubmit={submitHandler}>
            <div className='ArtistOpportunities_Page_Infoform_Contentone'>
             
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Nature of Art</label>
                <input value={formData.artNature} name='artNature' onChange={changeHandler} type='text' placeholder='Enter nature of art'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Location of Performance*</label>
                <input value={formData.location} name='location' onChange={changeHandler} type='text' placeholder='Enter location'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Name of Art</label>
                <input  name='' onChange={changeHandler} type='text' placeholder='Enter art name'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Date of Performance*</label>
                <input value={formData.performanceDate} name='performanceDate' onChange={changeHandler} type='text' placeholder='Enter event date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Type of Performance</label>
                <input value={formData.performanceType} name='performanceType' onChange={changeHandler} type='text' placeholder='Enter performance type'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Languages*</label>
                <input value={formData.languages} name='languages' onChange={changeHandler} type='text' placeholder='Enter languages'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Live / Record</label>
                <select onChange={changeHandler} name='mediaType'>
                  <option   selected hidden>Select</option>
                  <option value="Live">Live</option>
                  <option value="Record">Record</option>
                </select>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Theme</label>
                <input onChange={changeHandler} value={formData.theme} name='theme' type='text' placeholder='Enter theme'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>No of Artist</label>
                <input value={formData.openings} name='openings' onChange={changeHandler} type='text' placeholder='Enter number of artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Time of Performance</label>
                <input onChange={changeHandler} value={formData.timeSlot} name='timeSlot' type='text' placeholder='Enter time(day/afternoon/evening)'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Type of Artist</label>
                <input onChange={changeHandler}  type='text' placeholder='Enter type of artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Duration of Performance</label>
                <input onChange={changeHandler} value={formData.performanceDuration} name='performanceDuration' type='text' placeholder='Enter Performance Duration'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Artist Location</label>
                <input onChange={changeHandler} value={formData.location} name='location' type='text' placeholder='Location of Artist'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Art Skills Required</label>
                <input onChange={changeHandler}  type='text' placeholder='Enter multiple skills'></input>
              </div>
            </div>
            <div className='ArtistOpportunities_Page_Infoform_Contenttwo'>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Proposed Budget</label>
                <input onChange={changeHandler} value={formData.budget} name='budget' type='text' placeholder='Enter proposed budget'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Last Date of Application</label>
                <input onChange={changeHandler} value={formData.applicationPeriod.end} type='text' placeholder='Enter application last date'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Any Other Requirements</label>
                <input onChange={changeHandler} value={formData.otherRequirements} name='otherRequirements' style={{height:"200px"}} type='text'></input>
              </div>
              <div className='ArtistOpportunities_Page_Infoform_inputfield'>
                <label>Do you Offer any Additional Facilities</label>
                <input onChange={changeHandler} value={formData.incentives} name='incentives' style={{height:"200px"}} type='text'></input>
              </div>
            </div>
            <button type='Submit'>Upload Opportunity</button>
          </form>
        </div>
      </div>
    </>
  )
}
