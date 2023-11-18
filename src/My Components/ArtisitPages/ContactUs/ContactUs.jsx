import "./contactUs.css";
import darkFilter from "./assets/darkFilter.svg"
import imagePart from "./assets/imagePart.svg"
import doorImage from "./assets/doorImage.svg"
import location from "./assets/location.svg"
import phone from "./assets/phone.svg"
import mail from "./assets/mail.svg"
import { useEffect, useState } from "react";
import { contactUsPoints } from "../../../services/apis";
import { makeAuthenticatedPOSTRequest } from "../../../services/serverHelper";
import { makeAuthenticatedGETRequest } from "../../../services/serverHelper";
import { artistProfilePoints } from "../../../services/apis";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import Artist_navbar from "../Artist_navbar"

const formDetail = [
    {
        placeholder:"Enter your name" , 
        type:"text" , 
        name:"name"
    },
    {
        placeholder:"Enter your email" , 
        type:"email" , 
        name:"email"
    },
    {
        placeholder:"Enter your contact number",
        type:'number' , 
        name:"phoneNumber"
    },
  


]

const boxDetail = [
    {
        image:phone , 
        text:"Phone",
        detail:"+914785236987"
    },
    {
        image:mail , 
        text:"Email",
        detail:"supportekalakaar@gmail.com"
    },
    {
        image:location , 
        text:"Address",
        detail:"123, Random Street, Random City, Mumbai - 123456"
    },

]



function ContactUs() {

    const {accessToken} = useSelector((state)=>state.auth)

  const [portfolioData , setPortfolioData] = useState(null);

  const fetchUserData = async()=>{
    try{
      
      const response = await makeAuthenticatedGETRequest(artistProfilePoints.FETCH_PROFILE_DATA_API , accessToken);

      console.log('res' ,response);

      if(response.status === 'success'){

        const {address, socialLinks , personalInfo ,artInfo, performanceInfo } = response.data;


      setFormData({
        phoneNumber :personalInfo?.contactNumber , email : personalInfo?.email  , name:personalInfo?.firstName 

      })
      }else{
        toast.error('something went wrong , please refresh the page' , {
          position:"top-center"
        });
      }
  
    } catch(error){
      console.log(error);
    }
  }
  
    useEffect(()=>{
     fetchUserData();
    },[])

    const [formData , setFormData ] = useState({
        name:"",
        email:"",
        message:"",
        phoneNumber:"" , 
        subject:""
    })
    
    const changeHandler = (event)=>{
        const {name , value} = event.target;
        setFormData((prev)=>({
            ...prev , 
            [name]:value
        }))
    }
    console.log('fir' ,formData);

    const submitHandler = async(event)=>{
      const toastId =  toast.loading('Loading...');
        event.preventDefault();
        try{

            const response = await makeAuthenticatedPOSTRequest(contactUsPoints.POST_QUERY_API , formData ,accessToken );
            console.log('res' , response);
            if(response.success === 'success'){
                toast.success('Successfully send' , {
                    position:"top-center"
                });
                setFormData({
                    name:"",
                    subject:"",
                    message:"",
                    email:"",
                    phoneNumber:""
                })
            }
            else{
                toast.error(response.message , {
                    position:"top-center"
                });
            }

        }catch(error){
            console.log(error);
            toast.error('something went wrong ,please try again' , {
                position:"top-center"
            });
        }

        toast.dismiss(toastId);
    }

  return (
    <>
    <Artist_navbar />
    <div className="contactUs_wrapper">
      {/* actual navbar section */}
      <nav className="actual_navbar"></nav>

      {/* contactUs section  */}
      <section className="contactUs_container">
        {/* image part */}
        <div className="image_container">
             <img src={imagePart} alt="" className="contact_img" />
              <img src={darkFilter} alt="" className="filter_img" />
              <p className="contactUs_text">Contact Us</p>
        </div>

        {/* image and form container */}
        <main className="image_form_container">
           <img src={doorImage} alt="" className="contact_doorImg" />

           {/* form */}
           <form onSubmit={submitHandler} className="form_container" >
               {formDetail.map((detail , index)=>(
                <input  required key={index} name={detail.name} value={formData[detail.name]} onChange={changeHandler} type={detail.type} placeholder={detail.placeholder} id="hidden" className="contactUs_input" />
               ))}
              <input name="subject" value={formData["subject"]} onChange={changeHandler} type="text" placeholder="Enter subject" className="contactUs_input" />


               <textarea required rows={9} name="message" value={formData.message} onChange={changeHandler} placeholder="Your message" className="contactUs_textarea" />

               <button type="submit" className="contactUs_sendBtn">Send</button>
           </form>
        </main>

{/* three box */}
        {/* <div className="contact_details_box">
             {
                boxDetail.map((box , index)=>(
                    <div key={index} className="contactUs_single_box">
                       <div className="box_image_container">
                        <img src={box.image} alt="image"  />
                       </div>

                       <p className="contact_box_text">{box.text}</p>
   <p className="contact_box_detail">{box.detail}</p>
                    </div>
                ))
             }
        </div> */}

      </section>


    </div>
  </>
  );
}

export default ContactUs;
