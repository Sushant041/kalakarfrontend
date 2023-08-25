import "./contactUs.css";
import darkFilter from "./assets/darkFilter.svg"
import imagePart from "./assets/imagePart.svg"
import doorImage from "./assets/doorImage.svg"
import location from "./assets/location.svg"
import phone from "./assets/phone.svg"
import mail from "./assets/mail.svg"


const formDetail = [
    {
        placeholder:"Enter your name" , 
        type:"text"
    },
    {
        placeholder:"Enter your email" , 
        type:"email"
    },
    {
        placeholder:"Enter your contact number",
        type:'number'
    },
    {
        placeholder:"Enter subject",
        type:"text"
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
  return (
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
           <form  className="form_container" >
               {formDetail.map((detail , index)=>(
                <input key={index} type={detail.type} placeholder={detail.placeholder} className="contactUs_input" />
               ))}

               <textarea rows={9} placeholder="Your message" className="contactUs_textarea" />

               <button className="contactUs_sendBtn">Send</button>
           </form>
        </main>

{/* three box */}
        <div className="contact_details_box">
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
        </div>

      </section>


    </div>
  );
}

export default ContactUs;
