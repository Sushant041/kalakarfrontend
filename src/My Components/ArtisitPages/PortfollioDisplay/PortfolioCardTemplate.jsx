import "./portfolioCardTemplate.css";
import rectangle from "./assets/reactangle.svg";
import ekalakaar from "./assets/ekalakaar.svg";
import Ellipse from "./assets/Ellipse 71.svg";
import blackRec from "./assets/blackRec.svg"



function PortfolioDisplayTemplate({socalMedia , profession , userDetails , userName , editCard = false}) {
  return (

      <section className="portfolio_card">

        {/* left part */}
        <div className="card_userdetails">
          <img src={ekalakaar} alt="" className="portfolio_ekalakaar_image" />
          <div className="card_details_wrapper">
            {userDetails.map((detail, index) => (
              <div className="card_single_detail">
                <div key={index} className={`card_details_image ${editCard?('blackBackground'):('redBackground')} `}>
                  {" "}
                  <img src={detail.image} alt="" />{" "}
                </div>
                <p className="card_detail_text">{detail.data}</p>
              </div>
            ))}
          </div>

          <div className="card_user_socialMedia_details">
            {socalMedia.map((social, index) => (
              <div key={index} className="card_single_socialDetail">
                <img
                  src={social.image}
                  alt="socialMedia_Image"
                  className="card_socialMedia_image"
                />
                <p className="card_socialMedia_id">{social.data}</p>
              </div>
            ))}
          </div>
        </div>

        {/* rectangle part  */}
        <img src={editCard?(blackRec):(rectangle)} alt="" className="rectange_image" />

        {/* third part */}
        <div className="card_userName_details">
{
  editCard?(
    <div className="user_photo user_profile">Your Photo Here</div>

  ):(
     <img src={Ellipse} alt="" className="user_profile" /> 

  )
}
          <h1 className="card_userName">{userName}</h1>
          <h1 className="card_userProfession">{profession}</h1>
        </div>

      </section>
    
  );
}

export default PortfolioDisplayTemplate;
