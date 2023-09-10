import "./patronProfile.css";
import profileImg from "./assets/profileImg.svg";
import rectangleImg from "./assets/rectangleImg.svg";
import tick from "./assets/tick.svg";
import { useEffect, useState } from "react";
import Patron_Navbar from "../Patron_Navbar";
import { toast } from "react-toastify";
import { makeAuthenticatedGETRequest, makeAuthenticatedPATCHRequest } from "../../../services/serverHelper";
import { patronProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";


const name = "Patron Name";
const profession = "Patron Profession";


function PatronProfile() {

  const {accessToken} = useSelector((state)=>state.auth);

  const [formData , setFormData] = useState({
    firstName:"",
    lastName:"",
    operationArea:"",
    address:"",
    businessNature:"",
    about:"",
    expectationFromEk:"",
    website:"",
    phoneNumber:"",
    authorizedPersonName:"",
    designation:"" , 
    email:"" ,
    
  })


  const fetchPatronProfileData = async()=>{
    try{
      const response = await makeAuthenticatedGETRequest(patronProfilePoints.FETCH_PATRON_APPLI_API ,accessToken );
      console.log('res' , response);
      if(response.success === 'success'){
          const {firstName , lastName ,operationArea ,businessNature,address ,about,expectationFromEk,website,phoneNumber,authorizedPersonName , email , designation} = response.data;
          
          setFormData({
            firstName , 
            lastName,
            website,
            about,
            expectationFromEk,
            operationArea,
            businessNature,
            address,
            phoneNumber,
            authorizedPersonName,
            designation ,
            email
          })
      }
      else{
        toast.error(response.message);
      }

    } catch(error){
      console.log(error);
      toast.error('something went wrong , please try again')
    }
  }

  useEffect(()=>{
      fetchPatronProfileData();
  },[])

  const submitHandler = async(event)=>{
    event.preventDefault();
     const toastId = toast.loading('Loading...');
    try{
       const response = await makeAuthenticatedPATCHRequest(patronProfilePoints.FETCH_PATRON_APPLI_API, formData , accessToken);
       console.log('respnse' , response);
       if(response.success ==='success'){
       toast.success('successfully updated');
      
      }
       else{
        toast.error(response.message);
       }

    } catch(error){
 console.log(error);
 toast.error('something went wrong , please try again')
    }
    toast.dismiss(toastId);
  }

  const changeHandler = (event)=>{
  const {name , value} = event.target;
  setFormData((prev)=>({
    ...prev ,
    [name]:value
  }))
  }

  // console.log('forda' ,formData);

  return (
    <div className="patronProfile_wrapper">
      {/* actual navbar */}
      <Patron_Navbar />

      <section className="patronProfile_container">
        <img src={rectangleImg} alt="" className="rectangleImg" />
        <div className="patron_img_name_container">
          <img src={profileImg} alt="" className="patron_img" />
          <div className="verify_name_wrapper">
            <p className="patron_name">{formData?.firstName} {formData?.lastName} </p>
            <div className="verify_container">
              <img src={tick} alt="tick" className="verifyImg" />
            </div>
          </div>
          <p className="patron_profession">{profession}</p>
        </div>

        {/* personal information  */}
        <main className="personal_information_wrapper">
          <form onSubmit={submitHandler} className="personal_info_form">
            <p className="personal_information_text">Personal Information</p>
            <div className="personal_info_form_part">
              
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">First Name</p>
                  <input name="firstName" onChange={changeHandler} value={formData.firstName} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Last Name</p>
                  <input name="lastName" onChange={changeHandler} value={formData.lastName} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Area Of Operation</p>
                  <input name="operationArea" onChange={changeHandler} value={formData.operationArea} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Nature Of Buisness / Function</p>
                  <input name="businessNature" onChange={changeHandler} value={formData.businessNature} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Name of the Authorized Person</p>
                  <input name="authorizedPersonName" onChange={changeHandler} value={formData.authorizedPersonName} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Designation</p>
                  <input name="designation" onChange={changeHandler} value={formData.designation} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Address</p>
                  <input name="address" onChange={changeHandler} value={formData.address} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Company Email</p>
                  <input name="email" onChange={changeHandler} value={formData.email} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Contact Details</p>
                  <input name="phoneNumber" onChange={changeHandler} value={formData.phoneNumber} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Website</p>
                  <input name="website" onChange={changeHandler} value={formData.website} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">Expectation from eKalakaar</p>
                  <input name="expectationFromEk"  onChange={changeHandler} value={formData.expectationFromEk} className={`personal_form_input`}   />
                </label>
                <label  htmlFor="" className="single_personal_info">
                  <p className="form_title">About</p>
                  <textarea name="about" onChange={changeHandler} value={formData.about} style={{height:"150px" , resize:"none"}} className={`personal_form_input  "aboutUs_input `}   />
                </label>
              
            </div>
         
            <button type="submit" className="updateButton">
          Update
        </button>
          </form>
        </main>

      
      </section>
    </div>
  );
}

export default PatronProfile;
